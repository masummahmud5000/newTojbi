import '@fortawesome/fontawesome-free/css/all.min.css'
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* //////////////////////////// */}
        <nav className="bg-green-600 py-5 pl-5 border-0 border-blue-800 border-b-5">
          <h1 className="text-white text-xl font-bold">Masum Software Lab</h1>
        </nav>
        {/* //////////////////////////// */}
        {children}
        {/* //////////////////////////// */}
        {/* //////////////////////////// */}
      </body>
    </html>
  );
}
