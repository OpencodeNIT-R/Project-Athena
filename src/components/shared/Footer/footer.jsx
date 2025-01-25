import { Instagram, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070614] text-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-28">
          <div className="text-center relative">
            <h2 className="text-3xl font-montserrat font-medium text-[#A546FF]  inline-block">
              Let&apos;s discuss and make something
              <span className="text-[#A546FF] "> cool </span>
              together
            </h2>
            <div className="absolute -bottom-8 right-0">
              <a
                href="https://chat.whatsapp.com/F16DrLFyG4aJbpXhOKzrFk"
                className="inline-flex font-robotoMono text-[#989898] items-center text-lg hover:text-[#bfbfbf] transition-colors relative group"
              >
                Join us ↗
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#A546FF] group-hover:w-full group-hover:left-0 transition-all ease-in  duration-300 delay-100"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex flex-col md:flex-row justify-between items-start font-montserrat md:items-center mb-5">
            <a
              href="/"
              className="text-5xl font-bold text-shaaa mb-6 md:mb-0 flex items-center gap-2"
            >
              OPENCODE
            </a>
            <nav className="flex flex-wrap gap-4 font-robotoMono text-[#989898] md:gap-8 mb-0">
              <a
                href="/coming-soon"
                className="hover:text-[#A546FF] transition-colors"
              >
                About
              </a>
              <a
                href="/coming-soon"
                className="hover:text-[#A546FF] transition-colors"
              >
                Events
              </a>
              <a
                href="/coming-soon"
                className="hover:text-[#A546FF] transition-colors"
              >
                Projects
              </a>
              <a
                href="/coming-soon"
                className="hover:text-[#A546FF] transition-colors"
              >
                Team
              </a>
            </nav>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 ">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-[#989898]">
              Architected with ❤️ by OpenCode Team
            </p>
            <div className="flex gap-4">
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
      </div>
    </footer>
  );
}
