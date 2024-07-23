import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <div className="-mt-16">
          <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={250}
            height={250}
            className="rounded-full mb-8 border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Melody Chunhua Huang</h1>
        <p className="text-xl mb-10">Fullstack Developer | React.js | Next.js | Tailwind CSS | JS | Go | Python </p>
        <div className="space-x-4">
          <Link href="/projects" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
            View Projects
          </Link>
          <Link href="/contact" className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Brief Introduction */}

      <section id="about-me" className="bg-white py-20">
        {/* <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-center">
            I'm a passionate fullstack software developer with expertise and experience in building modern web applications.
            I am dedicated to create efficient, scalable, and user-friendly solutions to app development.
          </p>
        </div> */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-center">
          I am a passionate fullstack software developer with expertise and experience in building modern web applications.
          I am dedicated to create efficient, scalable, and user-friendly solutions to app development.
          </p>
        <div className="text-center">
        <Link
          href="/about"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
        >
        Learn More About Me
        </Link>
      </div>
      </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Next.js', 'Go', 'Python', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let us Work Together</h2>
          <p className="mb-8 text-1xl">I am always open to new opportunities and collaborations.</p>
          <Link href="/contact" className="bg-white text-gray-800 px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300">
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  )
}