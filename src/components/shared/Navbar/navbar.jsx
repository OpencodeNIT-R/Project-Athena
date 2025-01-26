'use client';
import React from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigationItems = [
    { href: '/coming-soon', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/coming-soon', label: 'Projects' },
    { href: '/coming-soon', label: 'Team' },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <header className="fixed top-0 w-full flex justify-center p-4 md:p-8 z-50 ">
        <nav className="relative w-full lg:w-6/12 md:w-full max-w-7xl flex items-center justify-between px-4 md:px-8 py-2 md:py-4 rounded-full bg-black/30 backdrop-blur-md transition-all duration-300">
          <div className="absolute -inset-[3px] rounded-full border-2 border-[#221F49] shadow-[0_0_15px_rgba(139,92,246,0.1)]" />
          <div className="absolute inset-[1px] md:inset-[3px] rounded-full border-2 border-[#3A0070] shadow-inner-white" />

          <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.1)] pointer-events-none" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-10"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'absolute rotate-45' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'absolute -rotate-45' : ''
              }`}
            />
          </button>

          <div className="z-10 flex items-center justify-between  h-full md:w-auto">
            <a href="/" className="cursor-pointer">
              <img
                src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734800561/oc_logo_yig1u4.png"
                alt=""
                className="h-8 mr-2"
              />
            </a>
          </div>
          <div className="hidden lg:flex font-robotoMono text-[#989898] items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#989898] hover:text-[rgb(165,70,255)] transition-colors duration-200 text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="https://chat.whatsapp.com/GMNyUn47aEh0DE7krtd1Kx"
            className="hidden md:block"
          >
            <button className="bg-transparent border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-colors shadow-inner-white backdrop-blur-sm text-xs md:text-sm z-10 px-4 py-2 rounded-[10px]">
              Join us
            </button>
          </a>

          <div
            className={`absolute top-full left-0 w-full lg:hidden mt-2 md:mt-4 py-4 md:py-6 px-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5 transition-all duration-300 ease-in-out ${
              isOpen
                ? 'opacity-100 translate-y-0 visible'
                : 'opacity-0 -translate-y-4 invisible'
            }`}
          >
            <div className="flex flex-col gap-3">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block w-full px-4 py-2 text-[#989898] hover:text-[rgb(165,70,255)] hover:bg-white/5 rounded-lg transition-colors duration-200 text-sm md:text-base"
                >
                  {item.label}
                </a>
              ))}
              <a href="https://chat.whatsapp.com/F16DrLFyG4aJbpXhOKzrFk">
                <button className="mt-4 w-full bg-transparent border shadow-inner-white border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-colors backdrop-blur-sm text-sm px-4 py-2 rounded-[10px]">
                  Join us
                </button>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
