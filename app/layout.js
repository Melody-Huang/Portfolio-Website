import './globals.css'

export const metadata = {
  title: 'Melody - Portfolio',
  description: 'Personal portfolio of Melody',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}