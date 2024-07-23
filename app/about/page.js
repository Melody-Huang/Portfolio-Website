import { Inter, Playfair_Display } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="relative h-64 bg-emerald-600">
          <Image
            src="/header-bg.jpg"
            alt="Header background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/profile.jpg"
                  alt="Melody Huang"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h1 className={`${playfair.className} text-4xl font-bold text-white shadow-text`}>About Me</h1>
            </div>
          </div>
        </div>
        <div className="px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <p className={`${inter.className} text-lg text-gray-700 leading-relaxed mb-6`}>
              My name is Melody Huang. 15 years ago, destiny brought me to America. Like countless first-generation immigrants, I worked hard in pursuit of a better life in this country. Out of practical concern, I made a bold decision to go back to college to shift my career path to computer science.
            </p>
            <div className="my-8 flex items-center">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-4 text-gray-500 italic">My Journey</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <p className={`${inter.className} text-lg text-gray-700 leading-relaxed mb-6`}>
              My educational journey started from a community college and ended with graduation from UC Berkeley. On this ten-year self-improvement path, I overcame numerous challenges and difficulties while fulfilling my family roles as a wife and mother of two children.
            </p>
            <p className={`${inter.className} text-lg text-gray-700 leading-relaxed mb-6`}>
              When I was able to embrace a new life as a software engineer, my career development was abruptly paused by the onset of the COVID-19 pandemic. It was a challenging time as I was trapped at home caring for my young children, but it also provided me with an opportunity for reflection and growth.
            </p>
            <p className={`${inter.className} text-lg text-gray-700 leading-relaxed mb-6`}>
              I took proactive steps to learn new technologies and skills, practicing them by creating various projects. Now, I am equipped with a diverse skill set, ranging from front-end design to back-end architecture. I am fully ready to resume my career as a software engineer.
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
              <p className={`${inter.className} text-gray-600 italic`}>
                Feel free to explore my projects and get in touch if you would like to discuss potential collaborations or opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}