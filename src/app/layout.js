import "./globals.css";
import { NavBar } from "../components/navBar";

export const metadata = {
  title: "Peter says hey",
  description: "I'm grateful you're here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
