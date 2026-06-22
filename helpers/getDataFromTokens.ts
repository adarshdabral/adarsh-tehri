import jwt from "jsonwebtoken";

export const getDataFromToken = (token: string): string | null => {
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET || "") as unknown;

    if (typeof decoded === "object" && decoded !== null && "id" in decoded) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (decoded as any).id;
    }

    return null;
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    throw new Error(msg);
  }
};