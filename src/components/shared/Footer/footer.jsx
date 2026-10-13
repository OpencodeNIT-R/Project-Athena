import { Instagram, Linkedin, Github, Twitter, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030208] text-white py-12 md:px-12 px-4 h-[80vh] flex justify-end flex-col">
      <div className="hidden lg:flex flex-col md:flex-row justify-between items-baseline mb-8 h-fit">
        <div className="relative">
          <h2 className="text-xl xl:text-3xl font-silverEditorial font-medium  inline-block text-[#EEDCFF] italic tracking-widest">
            Let&apos;s discuss and make something <br /> cool together
          </h2>
          <span className="absolute bottom-0 right-0 tracking-normal">
            <a
              href="https://chat.whatsapp.com/F16DrLFyG4aJbpXhOKzrFk"
              className="inline-flex font-robotoMono text-[#A546FF] items-center text-lg hover:text-[#bfbfbf] transition-colors relative group"
            >
              Join us ↗
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#A546FF] group-hover:w-full group-hover:left-0 transition-all ease-in  duration-300 delay-100"></span>
            </a>
          </span>
        </div>

        <a
          href="/"
          className="lg:text-7xl xl:text-[7rem] 2xl:text-[10rem] font-extrabold font-montserrat mb-6 md:mb-0 flex items-center gap-2"
        >
          OPENCODE
        </a>
      </div>

      <div className="lg:hidden h-full flex flex-col justify-between">
        <div>
          <p className="text-[#989898] font-robotoMono">
            Architected with ❤️ <br />{' '}
            <span className="text-white font-bold text-xl">
              by OpenCode Team
            </span>
          </p>
          <a
            href="tel:+917205680081"
            className="flex items-center gap-2 text-sm text-[#989898] font-robotoMono hover:text-[#A546FF] transition-colors mt-2"
          >
            <Phone className="h-4 w-4 text-[#A546FF]" />
            <span>Abhijeet Biswal: +91 7205680081</span>
          </a>
        </div>
        <a
          href="/"
          className="w-full text-center font-montserrat font-extrabold text-6xl md:text-9xl block my-6"
        >
          OPENCODE
        </a>
      </div>

      <div className="border-t border-white/20 pt-8 " />

      <div className="flex justify-between lg:hidden">
        <div className="flex flex-col">
          <div className="relative">
            <h2 className="text-xl xl:text-3xl font-silverEditorial font-medium tracking-widest text-[#EEDCFF] italic inline-block">
              Let&apos;s discuss and make something <br /> cool together
            </h2>
            <div className="my-6">
              <a
                href="https://chat.whatsapp.com/F16DrLFyG4aJbpXhOKzrFk"
                className="inline-flex font-robotoMono text-[#A546FF] items-center text-lg hover:text-[#bfbfbf] transition-colors relative group"
              >
                Join us ↗
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#A546FF] group-hover:w-full group-hover:left-0 transition-all ease-in  duration-300 delay-100"></span>
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/opencode.nitr"
              className="text-[#A546FF] hover:text-[#B388FF]"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/opencode-nit-rourkela/"
              className="text-[#A546FF] hover:text-[#B388FF]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/OpencodeNIT-R"
              className="text-[#A546FF] hover:text-[#B388FF]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/Opencode_NITRKL"
              className="text-[#A546FF] hover:text-[#B388FF]"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        <nav className="flex flex-col font-robotoMono text-[#989898] mb-0">
          <a
            href="/coming-soon"
            className="hover:text-[#A546FF] transition-colors w-20"
          >
            About
          </a>
          <a
            href="/coming-soon"
            className="hover:text-[#A546FF] transition-colors w-20"
          >
            Events
          </a>
          <a
            href="/coming-soon"
            className="hover:text-[#A546FF] transition-colors w-20"
          >
            Projects
          </a>
          <a
            href="/coming-soon"
            className="hover:text-[#A546FF] transition-colors w-20"
          >
            Team
          </a>
        </nav>
      </div>

      <div className="hidden lg:flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg text-[#989898] font-robotoMono">
            Architected with ❤️ <br />{' '}
            <span className="text-white font-bold text-2xl">
              by OpenCode Team
            </span>
          </p>
          <a
            href="tel:+917205680081"
            className="flex items-center gap-2 text-sm text-[#989898] font-robotoMono hover:text-[#A546FF] transition-colors mt-1"
          >
            <Phone className="h-4 w-4 text-[#A546FF]" />
            <span>Abhijeet Biswal: +91 7205680081</span>
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <nav className="flex font-robotoMono text-[#989898] mb-0">
            <a
              href="/coming-soon"
              className="hover:text-[#A546FF] transition-colors w-20 text-center"
            >
              About
            </a>
            <a
              href="/coming-soon"
              className="hover:text-[#A546FF] transition-colors w-20 text-center"
            >
              Events
            </a>
            <a
              href="/coming-soon"
              className="hover:text-[#A546FF] transition-colors w-20 text-center"
            >
              Projects
            </a>
            <a
              href="/coming-soon"
              className="hover:text-[#A546FF] transition-colors w-20 text-center"
            >
              Team
            </a>
          </nav>
          <div className="flex justify-around">
            <a
              href="https://www.instagram.com/opencode.nitr"
              className="text-[#A546FF] hover:text-[#B388FF]"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/opencode-nit-rourkela/"
              className="text-[#A546FF] hover:text-[#B388FF]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/OpencodeNIT-R"
              className="text-[#A546FF] hover:text-[#B388FF]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/Opencode_NITRKL"
              className="text-[#A546FF] hover:text-[#B388FF]"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
