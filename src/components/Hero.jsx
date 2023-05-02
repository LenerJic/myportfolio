import { TypeAnimation } from "react-type-animation";
import my_profile from "../assets/images/my_profile.png";

export function Hero() {
  const Contacts = [
    { icon:'logo-facebook', route: 'https://www.facebook.com/profile.php?id=100011450841906'},
    { icon:'logo-whatsapp', route: 'https://wa.pe/51922309422?text=Hola'},
    { icon:'mail', route: 'mailto:jhostinchamorro_10@outlook.com'},
  ];
  return (
    <section id="home" className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:px-4 xl:px-6 gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center lg:text-left mx-2 lg:mx-0 xl:pr-40">
            <h1 className="text-5xl font-bold leading-[0.8] lg:text-8xl text-gradient">
              JHOSTIN LENER
            </h1>
            <div className="mb-6 text-3xl lg:text-5xl font-semibold uppercase">
              <span className="text-white">Soy un Desarrollador</span><br />
              <TypeAnimation sequence={['Web', 2000, 'Frontend', 2000,]}
                speed={50} className='text-emerald-500' wrapper='span' repeat={Infinity}/>
            </div>
            <p className="text-justify xl:text-lg">
              Soy programador FullStack con mayor conocimiento en el lado de Frontend, trabajando generalmente 
              con el FrameWork Angular.
            </p>
            <div className="flex items-center justify-center lg:justify-start mt-8 gap-4">
              <a href="../assets/my_cv.pdf" download>
                <button className="btn-primary transition-all duration-500">Descargar CV</button>
              </a>
              <div className="text-gray-100 pt-2 flex gap-x-3 md:gap-x-5 text-2xl md:text-4xl items-center justify-between md:justify-start">
              {Contacts.map((contact, i) => (
                <a key={i} href={contact.route} target="_blank" className="text-white hover:text-teal-200 transition-colors">
                  <ion-icon name={contact.icon}></ion-icon>
                </a>
              ))}
              </div>
            </div>
          </div>
          <div className="hidden relative lg:flex flex-1 max-w-xs lg:max-w-[482px]">
            <div className="absolute inset-x-1/4 bottom-10 animate-pulse blur-lg flex-1 -space-x-14 z-[-1]">
              <div className="mix-blend-lighten h-56 w-56 rounded-full bg-blue-500"></div>
              <div className="mix-blend-lighten h-56 w-56 rounded-full bg-emerald-400"></div>
            </div>
            <img src={my_profile} alt="I'm" className="md:w-11/12 h-full object-cover rounded-3xl"/>
          </div>
        </div>
      </div>
    </section>
  );
}
