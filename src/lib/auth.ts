export function checkBasicAuth(authHeader: string | null): boolean {
  if (!authHeader?.startsWith("Basic ")) return false;

  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    // If no password configured, block all access to admin
    return false;
  }

  try {
    const decoded = atob(authHeader.slice(6));
    // Accept either "password" or "user:password" — password-only is the core check
    const supplied = decoded.includes(":") ? decoded.split(":")[1] : decoded;
    return supplied === password;
  } catch {
    return false;
  }
}
