import my_portfolio from "../assets/images/projects/my_portfolio.png";
import reactLogo from "../assets/logos/react.svg";
import tailwindLogo from "../assets/logos/tailwind_css.svg";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-y-6 2xl:gap-y-9 text-gray-100 text-center">
          <h3 className="text-4xl font-semibold">
            Mis <span className="text-gradient">Proyectos</span>
          </h3>
          <p className="text-gray-400 text-xl 2xl:text-2xl">Mis Ultimos trabajos</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div></div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img className="group-hover:scale-125 transition-all duration-500" src={my_portfolio} loading="lazy"/>
              <div className="work-title">
                <span className="text-3xl text-gradient">Mi portafolio</span>
              </div>
              <div className="work-icons">
                <div className="flex items-center justify-around text-white">
                  <div className="flex max-h-12 w-12 gap-x-3">
                    <img src={reactLogo} alt="" />
                    <img src={tailwindLogo} alt="" />
                  </div>
                  <div className="flex text-4xl">
                    <a href="https://github.com/LenerJic/myportfolio" target="_blank">
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}