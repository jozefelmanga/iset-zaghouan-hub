import type { ReactNode } from "react";
import { ClientChrome } from "@/components/layout/ClientChrome";
import { Footer } from "@/components/layout/Footer";

/** Server layout shell — passes Footer as a slot so it stays a Server Component. */
export function RootShell({ children }: { children: ReactNode }) {
  return <ClientChrome footer={<Footer />}>{children}</ClientChrome>;
}
