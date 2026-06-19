import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children, transparentHeader = false }: { children: ReactNode; transparentHeader?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      <Header transparent={transparentHeader} />
      <main className={transparentHeader ? "" : "pt-16 md:pt-20"}>{children}</main>
      <Footer />
    </div>
  );
}