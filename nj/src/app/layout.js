import '@fortawesome/fontawesome-free/css/all.min.css'
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel='manifest' href='/manifest.json'/>
      <meta name='theme_color' content='#000000'/>
      <body>
        {/* //////////////////////////// */}
        <nav className="bg-green-600 py-5 pl-5 border-0 border-blue-800 border-b-5">
          <h1 className="text-white text-xl font-bold lg:text-3xl">Masum Software Lab</h1>
        </nav>
        {/* //////////////////////////// */}
        {children}
        {/* //////////////////////////// */}
        {/* //////////////////////////// */}
      </body>
    </html>
  );
}
