const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX) || 100;
const WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000;

export function rateLimit(identifier: string): { success: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + WINDOW_MS });
    return { success: true, remaining: MAX_REQUESTS - 1 };
  }

  if (record.count >= MAX_REQUESTS) {
    return { success: false, remaining: 0 };
  }

  record.count++;
  return { success: true, remaining: MAX_REQUESTS - record.count };
}
