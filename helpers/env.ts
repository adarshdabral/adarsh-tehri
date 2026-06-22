export function requireEnv(name: string): string {
  const val = process.env[name];
  if (!val) throw new Error(`${name} environment variable is not set`);
  return val;
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}
