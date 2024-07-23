export default function Projects() {
    const projects = [
      { id: 1, title: 'My Portfolio Website', description: 'Welcome to my portfolio! I am Melody Huang, a mother of two children and also a passionate fullstack software developer.'},
      { id: 2, title: 'Family Chatting Platform', description: 'It is a chatting platform for family communication with reminding notes for marked members.' },
      { id: 3, title: 'Japanese Learning App', description: 'My personal Japanese learning app providing sentences tailored for personal learning pace.' },
    ]

    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="border p-4 rounded shadow">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </main>
    )
  }