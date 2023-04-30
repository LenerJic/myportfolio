import logo_html from '../assets/logos/html.png';
import logo_css from '../assets/logos/css.png';
import logo_js from '../assets/logos/js.png';
import logo_tailwind from '../assets/logos/tailwind.png';
import logo_angular from '../assets/logos/angular.png';
import logo_asp from '../assets/logos/asp_net.png';

export function Skills() {
  const Skills = [
    { logo: logo_html, name: "HTML", hover: "hover:shadow-orange-500/50 hover:border-orange-500" },
    { logo: logo_css, name: "CSS", hover: "hover:shadow-sky-400/50 hover:border-sky-400" },
    { logo: logo_js, name: "JAVASCRIPT", hover: "hover:shadow-yellow-400/50 hover:border-yellow-300" },
    { logo: logo_tailwind, name: "TAILWIND", hover: "hover:shadow-cyan-600/50 hover:border-cyan-500" },
    { logo: logo_angular, name: "ANGULAR", hover: "hover:shadow-red-600/50 hover:border-red-600" },
    { logo: logo_asp, name: "ASP.NET CORE", hover: "hover:shadow-indigo-600/50 hover:border-indigo-600" },
  ]
  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 2xl:gap-y-9 text-gray-100 text-center">
          <h3 className="text-4xl font-semibold">
            Mis <span className="text-gradient">Habilidades</span>
          </h3>
          <p className="text-gray-400 text-xl 2xl:text-2xl">Mis Conocimientos</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center p-4 gap-7 lg:gap-10">
            {Skills.map((skill, i) => (
              <div key={i} className={`border-4 border-cyan-600 relative flex flex-col gap-y-3 items-center min-w-[5rem] lg:min-w-[10rem] max-w-[16rem] bg-gray-900 p-4 lg:p-10 rounded-xl hover:shadow-lg transition-all duration-300 ${skill.hover}`}>
                <div className="w-28 lg:w-32 h-28 lg:h-32 flex items-center">
                  <img src={skill.logo} alt={skill.name} loading='lazy' />
                </div>
                <p className="text-xl">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}