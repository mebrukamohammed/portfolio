
import "./globals.css";



// Configure them


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}



export const metadata = {
  title: "Mebruka Mohammed",
  description: "personal portfolio",
};

