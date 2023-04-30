export function About() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <div className="flex-1 mx-4 bg-about bg-contain bg-no-repeat h-1/2 mix-blend-lighten bg-top"></div>
          <div className="flex-1">
            <h2 className="text-4xl mb-2 font-semibold">
              Acerca <span className="text-gradient">De Mí</span>
            </h2>
            <h3 className="text-2xl text-gray-400 mb-4">Soy un Desarrolador Web</h3>
            <p className="text-justify leading-6">
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
