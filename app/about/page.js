import { Inter, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="bg-emerald-600 px-6 py-4 flex items-center justify-between">
          <h1 className={`${playfair.className} text-3xl font-bold text-white`}>About Me</h1>
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Melody Huang"
              fill
              sizes="(max-width: 48px) 100vw, 48px"
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
        <div className="px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <p className={`${inter.className} text-lg text-gray-700 leading-relaxed mb-6`}>
              My name is Melody Huang. Fifteen years ago, I came to the United States with dreams of building a better future.
              Like many first-generation immigrants, I embraced hard work and determination to achieve my goals. Driven by a passion for
              career advancement, I returned to college after being graduated for 10 years and made a career shift to pursue a degree in computer science.
            </p>
            <p className={`${inter.className} text-lg text-gray-700 leading-relaxed mb-6`}>
              My educational journey began at a community college and culminated in my graduation from UC Berkeley.
              Over this ten-year course, I balanced hard on the demanding roles of student, wife, and mother of two children,
              and finally successfully transitioned into a new career as a software engineer.
            </p>
            <p className={`${inter.className} text-lg text-gray-700 leading-relaxed mb-6`}>
              The COVID-19 pandemic unexpectedly paused my career. However, I positively used this time for personal growth,
              dedicating myself to learning new technologies and enhancing coding skills through various side projects. Now,
              with a diverse skill set in front-end design and back-end implementation, I am fully prepared to resume my career
              as a software engineer and contribute my expertise and passion to innovative projects.
            </p>
            <div className="mt-12">
              <h2 className={`${playfair.className} text-2xl font-semibold text-gray-800 mb-6 text-center`}>Skills & Technologies</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {['React', 'Next.js', 'Go', 'Python', 'JavaScript', 'Node.js', 'Cloudflare Workers', 'Tailwind CSS', 'HTML/CSS', 'Git'].map((skill) => (
                  <span key={skill} className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-emerald-200 hover:shadow-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-inner">
              <h3 className={`${playfair.className} text-xl font-semibold text-gray-800 mb-3`}>Education</h3>
              <p className={`${inter.className} text-gray-700`}>B.S. in Computer Science, UC Berkeley</p>
            </div>
            <div className="mt-12 text-center">
              <p className={`${inter.className} text-lg text-emerald-600 font-semibold`}>
                Let&apos;s connect and work on something amazing together!
              </p>
              <Link href="/contact" className="inline-block mt-4 px-6 py-3 bg-emerald-600 text-white rounded-full font-medium transition-all hover:bg-emerald-700 hover:shadow-lg">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}