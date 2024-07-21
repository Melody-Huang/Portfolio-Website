import { Inter, Playfair_Display } from 'next/font/google'

  const inter = Inter({ subsets: ['latin'] })
  const playfair = Playfair_Display({ subsets: ['latin'] })

  export default function About() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-4">
            <h1 className={`${playfair.className} text-4xl font-bold text-white`}>About Me</h1>
          </div>
          <div className="px-6 py-8">
            <p className={`${inter.className} text-lg text-gray-700 leading-relaxed mb-6`}>
            My name is Melody Huang. 15 years ago destiny brought me to America. Like countless first-generation immigrants, we worked hard in
pursuit of a better life in this country. Out of practical concern, I made a bold decision to go back to colleger for shifting my career path to computer science.
My educational journey starts from a community college and ends with graduation from UC Berkeley. On this ten-year self-improvement path, I have overcome numerous
challenges and difficulties while fulfilling my family roles as a wife and mother of two children. When I was able to embrace a new life as a software engineer,
my career development was abruptly paused by the onset of the COVID-19 pandemic. It was really a hard time since I had been trapped home and took care of my little
kids, but it also provided me with an opportunity for reflection and growth. I took proactive steps to learn new technologies and skills and practice them in making
various projects. Now I am equipped with a diverse skill set, ranging from front-end design to back-end architecture. I am fully resdy to resume my career as a software
engineer. Feel free to explore my projects and get in touch if you'd like to discuss potential collaborations or opportunities.
            </p>
            <div className="mt-8">
              <h2 className={`${playfair.className} text-2xl font-semibold text-gray-800 mb-4`}>Skills & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Go', 'Python', 'JavaScript', 'Node.js', 'Cloudflare Workers', 'Tailwind CSS', 'HTML/CSS', 'Git'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }