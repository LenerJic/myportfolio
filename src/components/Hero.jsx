import hero1 from "../assets/images/hero1.jpg";

export function Hero() {
  const social_media = ["logo-facebook", "logo-linkedin", "logo-whatsapp"];
  return (
    <section className="py-2 lg:py-24 px-10 lg:h-full flex lg:flex-row flex-col items-center">
      <div className="flex-1">
        <div className="md:text-left text-center">
            <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                <span className="text-cyan-600 lg:text-6xl text-5xl">
                    Hola!<br/>
                </span>Mi nombre es <span className="bg-clip-text text-transparent bg-gradient-to-l from-indigo-500 to-cyan-500">Jhostin Lener</span>
            </h1>
            <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-500">Frontend Developer</h4>
            <button className="btn-primary mt-8">Contáctame</button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center h-full pt-4">
        <img src={hero1} alt="I'm" className="md:w-11/12 h-full object-cover rounded-lg"/>
      </div>
    </section>
  );
}
