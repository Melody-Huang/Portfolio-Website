import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'My Portfolio Website',
      description: 'Welcome to my portfolio! I am Melody Huang, a mother of two children and also a passionate fullstack software developer.',
      image: '/portfolio-preview.jpg',
      link: '/'
    },
    {
      id: 2,
      title: 'Family Chatting Platform',
      description: 'A chatting platform for family communication with reminding notes for marked members.',
      image: '/family-chat-preview.jpg',
      link: '/projects/family-chat'
    },
    {
      id: 3,
      title: 'Japanese Learning App',
      description: 'My personal Japanese learning app providing sentences tailored for personal learning pace.',
      image: '/japanese-app-preview.jpg',
      link: '/projects/japanese-app'
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-12 text-center text-gray-800`}>My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className={`text-2xl font-bold mb-3 text-gray-800`}>{project.title}</h2>
                <p className={`text-gray-600 mb-4`}>{project.description}</p>
                <Link href={project.link}
                      className="inline-block bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition duration-300">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}