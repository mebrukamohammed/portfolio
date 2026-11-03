import "./globals.css";

export const metadata = {
  title: "Mebruka Mohammed",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}