import { TbCode } from "react-icons/tb";

function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-slate-800/70 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a
              aria-current="page"
              className="flex items-center text-wxl font-bold text-white animate-fadeSlide glow"
              href="#"
            >
              <TbCode className="h-6 w-6 text-white" />

              <span className="ml-4 mt-[5px] inline-block text-shadow-subtle">
                Ayush&nbsp;Carpenter
              </span>
              <p className="sr-only">Website Title</p>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#Skills"
            >
              Skills
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#Project"
            >
              Project
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#Experience"
            >
              Experience
            </a>
            <a
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#Contact"
            >
              Contact Me
            </a>
          </div>
          <div className="flex items-center justify-end gap-3">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="https://drive.google.com/file/d/1iBz7ua_viD-nJXIqx0h2hS0g-e9K-kkd/view?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
