import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Landing Section */}
      {/* Landing Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center p-6 overflow-hidden">
        
        {/* Floating Abstract Glass Shapes (Decorative) */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-white/30 backdrop-blur-xl rounded-full mix-blend-overlay animate-bounce-slow hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-200/20 backdrop-blur-xl rounded-full mix-blend-overlay animate-pulse-slow hidden lg:block"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Main Title - Clean & Open */}
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-gray-900 mb-8 drop-shadow-sm select-none">
              Designed <br className="sm:hidden" /> By Me
            </h1>

            {/* Glass Pill Subtitle */}
            <div className="inline-block mb-12">
              <div className="glass-panel px-8 py-3 rounded-full border-white/50 bg-white/20 shadow-sm backdrop-blur-md">
                <p className="text-lg sm:text-xl font-medium text-gray-700">
                  Liquid designs that breathe.
                </p>
              </div>
            </div>
            
            {/* Minimal Floating Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="#work" className="px-10 py-4 bg-gray-900 text-white rounded-full text-lg font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  See Our Work
              </Link>
              
              <Link href="#follow-us" className="px-10 py-4 glass-btn rounded-full text-lg font-bold text-gray-800 hover:bg-white transition-all duration-300">
                 Get in Touch
              </Link>
            </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 min-h-screen flex flex-col justify-center items-center px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-20 text-center text-gray-900 tracking-tight">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto w-full">
          {/* Project Tiles */}
          {[
            { href: '/logo', img: '/images/Logo/thumbnail.png', title: 'Identity & Logo' },
            { href: '/mobile', img: '/images/Mobile/thumbnail.png', title: 'Mobile Experience' },
            { href: '/desktop', img: '/images/Desktop/thumbnail.png', title: 'Desktop Design' },
          ].map((item) => (
            <Link href={item.href} key={item.title} className="group block h-full">
              <div className="glass-card h-full overflow-hidden flex flex-col">
                <div className="relative overflow-hidden h-64 w-full">
                   <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-8 flex-grow flex items-center justify-center">
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Follow Us Section */}
      <section id="follow-us" className="flex flex-col min-h-screen justify-center items-center px-6 py-24 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-gray-900">Connect With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto w-full">
          {[
            { 
              href: "https://www.instagram.com/r.designedbyme/", 
              img: "https://cdn.logojoy.com/wp-content/uploads/20230511124058/instagram-new-gradient-logo-animation.gif", 
              title: "Instagram", 
              desc: "Follow our latest visual experiments."
            },
            { 
              href: "https://www.reddit.com/r/DesignedByMe", 
              img: "https://assets.designhill.com/design-blog/wp-content/uploads/2023/12/1-1.jpg", 
              title: "Reddit", 
              desc: "Join the community & request designs."
            }
          ].map((social) => (
            <a href={social.href} target="_blank" rel="noopener noreferrer" key={social.title} className="group block">
              <div className="glass-card overflow-hidden text-left h-full hover:shadow-2xl transition-all duration-500">
                <div className="h-56 overflow-hidden">
                   <img src={social.img} alt={social.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">{social.title}</h3>
                  <p className="text-gray-600 text-lg">{social.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center glass-panel mt-12 mx-4 mb-4">
        <p className="text-gray-600 font-medium">&copy; {new Date().getFullYear()} Designed By Me. All rights reserved.</p>
      </footer>
    </div>
  );
}
