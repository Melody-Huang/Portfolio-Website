// // page.js
// import Image from 'next/image'
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 mb-10 md:mb-0">
//           <Image
//             src="/profile.jpg"
//             alt="Melody Huang"
//             width={250}
//             height={250}
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="md:w-1/2 md:pl-10">
//           <h1 className="text-4xl font-bold mb-5 text-slate-800">Melody Chunhua Huang</h1>
//           <p className="text-xl mb-6 text-slate-600">Fullstack Developer specializing in React, Next.js, Python and Go</p>
//           <p className="mb-8 text-slate-600">
//             I create efficient, scalable, and user-friendly web applications.
//             With a passion for clean code and innovative solutions.
//           </p>
//           <Link href="/projects" className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 transition duration-300">
//             View My Work
//           </Link>
//         </div>
//       </section>

//       {/* Featured Projects */}
//       <section className="bg-white py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">Featured Projects</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { title: "My Portfolio Website", description: "My portfolio website to connect and make people know more about me.", image: "/project1.jpg" },
//               { title: "Family Chatting Platform", description: "A chatting platform for family communication with notice board and reminders for the marked members.", image: "/project2.jpg" },
//             ].map((project, index) => (
//               <div key={index} className="bg-slate-50 rounded-lg overflow-hidden shadow-md">
//                 <Image src={project.image} alt={project.title} width={600} height={300} className="w-full h-48 object-cover" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                   <p className="text-slate-600 mb-4">{project.description}</p>
//                   <Link href={`/projects/${index + 1}`} className="text-emerald-500 hover:underline">
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link href="/projects" className="text-emerald-500 hover:underline">
//               View All Projects
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">Skills & Technologies</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {['React', 'Next.js', 'Go', 'Python', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
//               <span key={skill} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm">
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-emerald-50 py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-4 text-slate-800">Let's Work Together</h2>
//           <p className="mb-8 text-slate-600">
//             I'm always interested in new projects and collaborations.
//             Feel free to reach out to discuss your innovative ideas.
//           </p>
//           <Link href="/contact" className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 transition duration-300">
//             Get In Touch
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }





// page.js
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-2/5 mb-10 md:mb-0 md:pr-10">
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/profile.jpg"
              alt="Melody Huang"
              fill
              className="rounded-full object-cover shadow-xl border-4 border-emerald-200"
            />
          </div>
        </div>
        <div className="md:w-3/5">
          <h1 className="text-4xl font-bold mb-4 text-slate-800">Melody Chunhua Huang</h1>
          <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Fullstack Developer</h2>
          <p className="text-lg mb-6 text-slate-600 leading-relaxed">
            Specializing in React, Next.js, Python and Go, I create efficient, scalable, and user-friendly web applications.
            Welcome all connections for innovative ideas and sincere collaboration.
          </p>
          <Link href="/projects" className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition duration-300 inline-block">
            View My Work
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "My Portfolio Website", description: "My portfolio website to connect and make people know more about me.", image: "/project1.jpg full-featured online store built with Next.js and Stripe", image: "/project1.jpg" },
              { title: "Family Chatting Platform", description: "A chatting platform for family communication with notice board and reminders for the marked members.", image: "/project2.jpg" },
              { title: "Japanese Learning App", description: "My personal Japanese learning app providing daily example sentences tailored for personal learning pace.", image: "/project3.jpg" },
            ].map((project, index) => (
              <div key={index} className="bg-slate-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                <Image src={project.image} alt={project.title} width={600} height={300} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <Link href={`/projects/${index + 1}`} className="text-emerald-500 hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projects" className="text-emerald-500 hover:underline text-lg">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'Go', 'Python', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
              <span key={skill} className="bg-white text-slate-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm transition-all duration-300 hover:shadow-md hover:bg-emerald-50">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">Let's Work Together</h2>
          <p className="mb-8 text-slate-600 max-w-2xl mx-auto">
            I'm always interested in new projects and collaborations.
            Feel free to reach out to discuss your innovative ideas.
          </p>
          <Link href="/contact" className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition duration-300 inline-block">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}