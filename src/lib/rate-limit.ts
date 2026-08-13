const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX) || 100;
const WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000;

type RateLimitOptions = {
  /** Override max requests for this key (default: RATE_LIMIT_MAX / 100). */
  max?: number;
  /** Override window in ms (default: RATE_LIMIT_WINDOW_MS / 15 min). */
  windowMs?: number;
};

/**
 * In-memory rate limiter (Map). Fine for a single Node instance.
 * For multi-instance / serverless production, move to a durable store
 * such as Upstash Redis so limits are shared across all instances.
 */
export function rateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): { success: boolean; remaining: number } {
  const max = options.max ?? MAX_REQUESTS;
  const windowMs = options.windowMs ?? WINDOW_MS;
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return { success: true, remaining: max - 1 };
  }

  if (record.count >= max) {
    return { success: false, remaining: 0 };
  }

  record.count++;
  return { success: true, remaining: max - record.count };
}
