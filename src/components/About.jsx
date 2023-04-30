export function About() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <div className="h-64 lg:h-1/2 px-6 lg:w-1/2 lg:px-4">
            <div className="flex-1 bg-about bg-contain bg-no-repeat h-full mix-blend-lighten bg-top"></div>
          </div>
          <div className="flex-1 text-center lg:text-left p-4">
            <h2 className="text-4xl mb-2 font-semibold">
              Acerca <span className="text-gradient">De Mí</span>
            </h2>
            <h3 className="text-2xl text-gray-400 mb-4">Soy un Desarrolador Web</h3>
            <p className="text-justify 2xl:text-lg leading-6">
              Soy apasionado a la programación con un gran interés en crear experiencias web modernas, interactivas 
              y atractivas. Estoy comprometido a mejorar continuamente mis habilidades y conocimientos 
              para proporcionar soluciones innovadoras y creativas a los problemas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
