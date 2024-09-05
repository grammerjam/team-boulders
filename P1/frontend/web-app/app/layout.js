import "./globals.css";

// Import and configure Outfit font
import { Outfit } from "next/font/google";

export const outfit = Outfit({
  subsets: ['latin']
});

export const metadata = {
  title: "Team Boulder",
  description: "Entertainment Web App",
}

export default function RootLayout({ children }) {
  return (
    // Attach font to global JSX node
    <html
      lang="en">
      <body className={ outfit.className }>{children}</body>
    </html>
  );
}
