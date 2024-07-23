// layout.js
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Melody Huang - Portfolio',
  description: 'Personal portfolio of Melody Huang, Fullstack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-slate-50 text-slate-800">
        <header className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-800">MH</Link>
            <nav>
              <ul className="flex space-x-6">
                {['About', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`}
                          className="text-slate-600 hover:text-emerald-500 transition duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main className="pt-16">{children}</main>
        <footer className="bg-slate-100 text-slate-600 py-8 mt-20">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2024 Melody Chunhua Huang. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}