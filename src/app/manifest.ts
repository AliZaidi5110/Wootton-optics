import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.opticsName} & ${SITE.hearingName}`,
    short_name: "Wootton",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f4",
    theme_color: "#0a1f35",
    lang: "en-GB",
    orientation: "portrait-primary",
    icons: [
      {
        src: IMAGES.clinic,
        sizes: "any",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
