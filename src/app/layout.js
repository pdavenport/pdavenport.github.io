import "./globals.css";
import { AnchorNavBar } from "../components/anchorNavBar";

export const metadata = {
  title: "Peter says hey",
  description: "I'm grateful you're here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
