"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { PageLoader } from "@/components/shared/PageLoader";

const MIN_DISPLAY_MS = 500;
const MAX_DISPLAY_MS = 1200;
const FADE_OUT_MS = 400;
const INITIAL_LOAD_MS = 700;

type NavigationContextValue = {
  showLoader: () => void;
  hideLoader: () => void;
  isLoading: boolean;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}

function isInternalNavigationLink(anchor: HTMLAnchorElement): boolean {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }
  if (anchor.target === "_blank" || anchor.hasAttribute("download")) {
    return false;
  }

  try {
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) {
      return false;
    }

    const current = window.location.pathname + window.location.search;
    const next = url.pathname + url.search;
    return current !== next;
  } catch {
    return false;
  }
}

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const startTimeRef = useRef(Date.now());
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maxTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInitialMountRef = useRef(true);
  const pendingNavigationRef = useRef(false);

  const clearTimers = useCallback(() => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    if (maxTimeoutRef.current) clearTimeout(maxTimeoutRef.current);
  }, []);

  const finishHiding = useCallback(() => {
    setIsVisible(false);
    fadeTimeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, FADE_OUT_MS);
  }, []);

  const showLoader = useCallback(() => {
    clearTimers();
    startTimeRef.current = Date.now();
    setIsLoading(true);
    setIsVisible(true);

    maxTimeoutRef.current = setTimeout(() => {
      finishHiding();
    }, MAX_DISPLAY_MS);
  }, [clearTimers, finishHiding]);

  const hideLoader = useCallback(() => {
    const elapsed = Date.now() - startTimeRef.current;
    const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      if (maxTimeoutRef.current) clearTimeout(maxTimeoutRef.current);
      finishHiding();
    }, remaining);
  }, [finishHiding]);

  useEffect(() => {
    const handleLoad = () => hideLoader();
    const fallback = setTimeout(hideLoader, INITIAL_LOAD_MS);

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallback);
    };
  }, [hideLoader]);

  useEffect(() => {
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
      return;
    }

    if (pendingNavigationRef.current) {
      pendingNavigationRef.current = false;
    }

    hideLoader();
  }, [pathname, hideLoader]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor || !isInternalNavigationLink(anchor)) {
        return;
      }

      pendingNavigationRef.current = true;
      showLoader();
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [showLoader]);

  useEffect(() => clearTimers, [clearTimers]);

  return (
    <NavigationContext.Provider value={{ showLoader, hideLoader, isLoading }}>
      {children}
      {isLoading && <PageLoader visible={isVisible} />}
    </NavigationContext.Provider>
  );
}
