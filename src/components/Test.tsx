import React from 'react';

const MonolithLanding: React.FC = () => {
  return (
    <div className="bg-background text-on-surface selection:bg-secondary-fixed-dim selection:text-on-secondary-fixed font-['Manrope']">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 rounded-none bg-white/80 dark:bg-[#000C1E]/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(0,12,30,0.06)] flex justify-between items-center px-12 py-6 mx-auto">
        <div className="text-2xl font-serif tracking-tighter text-[#000C1E] dark:text-white uppercase font-bold">
          MONOLITH
        </div>
        <div className="hidden md:flex items-center gap-12">
          <a className="font-serif tracking-tight font-bold uppercase text-sm transition-colors duration-300 text-[#775A19] dark:text-[#E9C176] border-b-2 border-[#775A19] pb-1 translate-y-[-2px]" href="#">Home</a>
          <a className="font-serif tracking-tight font-bold uppercase text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400 hover:text-[#775A19] dark:hover:text-[#E9C176]" href="#">Projects</a>
          <a className="font-serif tracking-tight font-bold uppercase text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400 hover:text-[#775A19] dark:hover:text-[#E9C176]" href="#">Gallery</a>
          <a className="font-serif tracking-tight font-bold uppercase text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400 hover:text-[#775A19] dark:hover:text-[#E9C176]" href="#">About</a>
          <a className="font-serif tracking-tight font-bold uppercase text-sm transition-colors duration-300 text-slate-600 dark:text-slate-400 hover:text-[#775A19] dark:hover:text-[#E9C176]" href="#">Contact</a>
        </div>
        <button className="bg-primary text-on-primary px-8 py-3 font-label text-xs tracking-widest uppercase hover:translate-y-[-2px] transition-transform duration-200">
          Get a Quote
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
            alt="Ultra-modern brutalist concrete villa"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ULcHk6RoRqDCJ9X9si07BgCtLpze5y1GwK9LgLORQC67a9SAoOtQctU7bQF-G8ilxREvpyzbJ4ufBTWAfqY8RoPL6PEvyu8wcCN3gvLUVU_9_38QDeEPe1jXUf3a4dthhZ_Uj66_zxm8R0OiNkutBhYzkFCxGsgYg-tLZ3lkNrPRH_LmGFPWdCX3LiID-x6W_d6zmFgmgOhuKEOPHEDkcTEbrvEfbOMFJP7NTY1EBbSSz6JdvfSkmPhy72WH5XcL3rVHK6GO7CM"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000C1E] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 px-12 md:px-24 max-w-6xl">
          <p className="text-secondary-fixed-dim uppercase tracking-[0.4em] text-xs mb-6 font-semibold">Architectural Excellence</p>
          <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12 max-w-4xl font-serif">
            Sculpting the Future of Architecture
          </h1>
          <div className="flex flex-col md:flex-row gap-6">
            <button className="bg-[linear-gradient(135deg,#775A19_0%,#E9C176_100%)] text-on-secondary px-10 py-5 font-bold tracking-widest uppercase text-sm hover:translate-y-[-2px] transition-transform shadow-xl">
              Explore Projects
            </button>
            <button className="border border-white/20 text-white backdrop-blur-md px-10 py-5 font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-primary transition-all">
              Our Philosophy
            </button>
          </div>
        </div>
        <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-2 text-white/40">
          <span className="text-[10px] tracking-[0.5em] uppercase [writing-mode:vertical-rl] rotate-180">Scroll to Explore</span>
          <div className="w-[1px] h-24 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 w-full h-1/2 bg-secondary-fixed-dim"></div>
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className="py-32 px-12 md:px-24 bg-surface-container-low">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold tracking-tight text-on-surface mb-8 font-serif">The Showroom</h2>
            <p className="text-on-surface-variant font-body leading-relaxed text-lg">
              A curated exhibition of our structural DNA. Witness the tactile precision of raw materials fused with pioneering digital visualization.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-4xl text-secondary-fixed-dim">texture</span>
            <span className="material-symbols-outlined text-4xl text-outline-variant">architecture</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Material Cards */}
          {[
            { id: "01", title: "Italian Marble", tag: "Textures", src: "1", desc: "Sourced from the heart of Carrara, our marble selections provide timeless structural weight." },
            { id: "02", title: "Cold-Pressed Steel", tag: "Engineering", src: "2", desc: "Uncompromising strength meets industrial elegance in our bespoke structural frameworks." },
            { id: "03", title: "Digital Twin Renders", tag: "Visualization", src: "3", desc: "Experience the unseen through hyper-realistic 3D projections of tomorrow's spaces." }
          ].map((item) => (
            <div key={item.id} className="group relative aspect-[3/4] bg-primary overflow-hidden">
              <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src={`http://googleusercontent.com/profile/picture/${item.src}`} alt={item.title} />
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-secondary-fixed-dim text-xs tracking-widest uppercase mb-2">{item.id}. {item.tag}</span>
                <h3 className="text-white text-3xl font-bold mb-4 font-serif">{item.title}</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed max-h-0 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrated Disciplines Section */}
      <section className="bg-[#000C1E] text-white py-32 px-12 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-5xl font-bold tracking-tighter leading-none mb-12 font-serif">Integrated Disciplines</h2>
            <div className="space-y-12">
              <div className="border-l-2 border-secondary-fixed-dim pl-8">
                <h4 className="text-secondary-fixed-dim text-xl font-bold uppercase tracking-widest mb-4 font-serif">Architecture</h4>
                <p className="text-slate-400 font-light leading-relaxed">Defining the skyline through monolithic forms and intentional voids. Our architecture is a dialogue between site and structure.</p>
              </div>
              <div className="border-l-2 border-white/10 pl-8 opacity-40 hover:opacity-100 transition-opacity">
                <h4 className="text-white text-xl font-bold uppercase tracking-widest mb-4 font-serif">Engineering</h4>
                <p className="text-slate-400 font-light leading-relaxed">Precision as an art form. We solve complex structural puzzles with invisible sophistication and technical mastery.</p>
              </div>
              <div className="border-l-2 border-white/10 pl-8 opacity-40 hover:opacity-100 transition-opacity">
                <h4 className="text-white text-xl font-bold uppercase tracking-widest mb-4 font-serif">Interior Design</h4>
                <p className="text-slate-400 font-light leading-relaxed">Curation of the sensory experience. We sculpt environments that balance intimacy with architectural grandeur.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-1">
              <img className="w-full aspect-video object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAG6lti2r5OqC1n3AhllQmG-pSOELhTP1NTl7-GWEUF9yWsS0V_GxnuEGbBaEzwerecxHeUkbulkLjT64Z1gDS9XXgwiBlxodcMd_YmCEjsqnfz-LmH9DQtInp5ujVQeHfwBoQYkIsvglErpTUahtBOKSBBzPHxLDTfOIICa3ht7dQbpWotd7OMh3weBUYF6G18ZRabCj1DGfm_fz3_xhwCBsXL4DokQoC4J_dznk4J-esPM-Fo2SI4rbjhnG5rpzBDR0rn1wGDh4" alt="Architecture" />
              <div className="grid grid-cols-2 gap-1">
                <img className="w-full aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMHmvLpvJ905b3G07Z6s6ZovAANdYdHqmKIixsCmpZux-x9kRkDExwcPlgp8wo5H-pYbDmzVzpEhgiAeQF9Go-JaBsWZAZUXd_bn4ow0NHASAo9Ui57bSQxaM6o7RkNBZw7LCAK_YAma-lClTVTNCDeCJcFPFhl8Ri0FZEJ1MRqFt3qcisv9cS4vyhSd4VKioUYrSvOSKd4rQ9QxsArHc2LGOztCN9e8icNLuCuoM6IPwZvZL_NdT-Wf7iB1yCXqyCMVEBDi6Qqlc" alt="Detail" />
                <img className="w-full aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs0_8VUpge3TPjZAzokXFHuqI3tc0PLwrFJrOXd4-C0Omu6gMatyZfAqAg0B8cO8PT3OHHfdlECzgkx-gGAAMc6ElCU1DuMjd33OEkQWiVFSQTreJ7Xi1uy55f0nz8Bg2y0lYnzRySg4Y8bSVhEKH0b2pqP5UaMLcYZ6xtHXBKQ2h_6qDUZ0vwxag3V6slQmvmoNxX_xz8Ozks3KtBCkxSy0bczjL_KcI8oDEpTsshW9luSsW3Fe3SKqJukaejJH_-q_KKqjsM7y4" alt="Interior" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000C1E] text-white w-full grid grid-cols-1 md:grid-cols-4 gap-16 px-12 py-20">
        <div className="md:col-span-1">
          <div className="text-lg font-serif italic text-[#E9C176] mb-8 uppercase font-bold tracking-tighter">MONOLITH</div>
          <p className="text-slate-400 text-sm tracking-wide font-light leading-relaxed mb-8">
            Building icons of permanence. We fuse the weight of traditional craftsmanship with the light of future innovation.
          </p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-white hover:text-[#E9C176] cursor-pointer transition-colors">public</span>
            <span className="material-symbols-outlined text-white hover:text-[#E9C176] cursor-pointer transition-colors">camera</span>
            <span className="material-symbols-outlined text-white hover:text-[#E9C176] cursor-pointer transition-colors">share</span>
          </div>
        </div>
        <div>
          <h5 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-[#E9C176]">Explore</h5>
          <ul className="space-y-4 text-slate-400 text-sm font-light">
            {['Architecture', 'Materials', 'Sustainability', 'Safety', 'Legal'].map(item => (
              <li key={item} className="hover:text-[#E9C176] hover:translate-x-1 transition-transform cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-[#E9C176]">Offices</h5>
          <div className="space-y-6">
            <div>
              <p className="text-white text-sm font-bold mb-1">Zurich</p>
              <p className="text-slate-400 text-xs font-light">Bahnhofstrasse 45, 8001</p>
            </div>
            <div>
              <p className="text-white text-sm font-bold mb-1">New York</p>
              <p className="text-slate-400 text-xs font-light">725 Fifth Avenue, NY 10022</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h5 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-[#E9C176]">Newsletter</h5>
            <div className="relative">
              <input className="w-full bg-white/5 border-none border-b border-white/20 px-0 py-4 text-xs tracking-widest focus:ring-0 focus:border-secondary-fixed-dim transition-colors placeholder:text-white/20" placeholder="YOUR EMAIL" type="email" />
              <button className="absolute right-0 bottom-4">
                <span className="material-symbols-outlined text-secondary-fixed-dim">arrow_forward</span>
              </button>
            </div>
          </div>
          <p className="text-slate-400 text-[10px] tracking-widest mt-12 md:mt-0 uppercase">
            © 2024 Monolith Construction. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MonolithLanding;