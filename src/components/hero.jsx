export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/src/assets/hero.png')] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="absolute inset-0 bg-[#070614] bg-opacity-10"></div>
      <div className="relative z-10 text-center max-w-4xl mt-20 mx-auto">
        <div className="inline-block shadow-inner-white font-robotoMono tracking-wide px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#3A0070] bg-gradient-to-b from-[#DADADA] to-[#744E99] bg-clip-text text-transparent text-xs sm:text-sm mb-2 sm:mb-4">
          Opensource your imagination
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-montserrat font-bold bg-gradient-to-b from-white to-[#222121] bg-clip-text text-transparent mb-6 sm:mb-8">
          OPENCODE
        </h1>
        <p className="text-white/60 font-robotoMono text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10">
          The{' '}
          <span className="bg-gradient-to-b from-[#DADADA] to-[#744E99] bg-clip-text text-transparent">
            Opensource
          </span>{' '}
          and{' '}
          <span className="bg-gradient-to-b from-[#DADADA] to-[#744E99] bg-clip-text text-transparent">
            Cybersecurity
          </span>{' '}
          community of NIT Rourkela
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="px-4 py-2 shadow-inner-white rounded-[10px] font-medium duration-200 w-[200px] sm:w-auto bg-transparent border border-purple-500/30 text-[#A546FF] hover:bg-[rgb(165,70,255)] hover:text-[#070614] hover:border-[#C3C3C3] transition-colors backdrop-blur-sm text-sm sm:text-base">
            <div className="flex flex-row items-center justify-center space-x-2 sm:space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
              >
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z" />
              </svg>
              <span>GitHub</span>
            </div>
          </button>
          <button className="px-4 py-2 shadow-inner-white rounded-[10px] font-medium duration-200 w-[200px] sm:w-auto bg-[rgb(165,70,255)] border border-[#C3C3C3] hover:bg-transparent hover:text-[#A546FF] hover:shadow-inner-white text-sm sm:text-base hover:border-purple-500/30 transition-colors">
            Resources
          </button>
        </div>
      </div>
    </main>
  );
}
