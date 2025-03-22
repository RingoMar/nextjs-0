import type { Metadata } from "next";
import { firaSans } from "@/lib/fonts";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Ringo Mar - Portfolio & Projects",
  description: "Portfolio and projects of Ringo Mar, a coder from Trinidad specializing in web development, timers, and innovative tools for streamers and developers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={firaSans.variable}>
      <body>
        <Providers>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
