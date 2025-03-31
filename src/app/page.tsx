import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Landing Section */}
      <section className="relative p-5 text-white py-32 text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 font-sans transform transition-all duration-500 ease-in-out hover:scale-110 hover:translate-y-2">
          Designed By Me
        </h1>


        <p className="mb-6 font-sans">Check out my work and projects below!</p>
        <Link href="#work" className="px-6 py-3 bg-yellow-500 text-black rounded-full text-xl font-semibold transition-transform hover:scale-105">
          See Our Work
        </Link>
      </section>


      {/* Work Section */}
      <section id="work" className="py-16 min-h-screen flex flex-col justify-center items-center px-4">
        <h2 className="text-3xl text-center font-bold mb-20">Our Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 max-w-7xl mx-auto">
          {/* Project Tiles */}
          {['Logo', 'Banner(Mobile)', 'Banner(Desktop)'].map((workId) => (
            <Link href={`/works/${workId}`} key={workId}>
              <div className="border-10 border-white shadow-lg overflow-hidden backdrop-blur-lg bg-white/20 hover:bg-white/30 transition-all transform hover:scale-105">


                <img
                  src={`/images/${workId}/thumbnail.png`}
                  alt={workId}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{workId}</h3>
                </div>

              </div>


            </Link>
          ))}
        </div>
      </section>

      {/* Follow Us Section */}
      <section id="follow-us" className="flex flex-col min-h-screen justify-center items-center px-4 text-center py-8 sm:py-16 md:py-24">
        <h2 className="text-3xl text-center text-white font-bold mb-12">CONTACT US</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <a href="https://www.instagram.com/r.designedbyme/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://cdn.logojoy.com/wp-content/uploads/20230511124058/instagram-new-gradient-logo-animation.gif" alt="Instagram" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Instagram</h3>
              <p className="mt-4 text-gray-600">Follow us on Instagram for the work.</p>
            </div>
          </a>
          <a href="https://www.reddit.com/r/DesignedByMe" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://assets.designhill.com/design-blog/wp-content/uploads/2023/12/1-1.jpg" alt="Reddit" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Reddit</h3>
              <p className="mt-4 text-gray-600">Join our Reddit community to request Logo/Banner/Video.</p>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-black text-white">
        <p>&copy; {new Date().getFullYear()} Designed By Me.</p>
      </footer>
    </div>
  );
}
