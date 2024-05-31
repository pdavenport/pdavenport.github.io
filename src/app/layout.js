import "./globals.css";
import { GlowNavBar } from "@/components/glowNavBar";

export const metadata = {
  title: "Peter says hey",
  description: "I'm grateful you're here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlowNavBar />
        {children}
      </body>
    </html>
  );
}
