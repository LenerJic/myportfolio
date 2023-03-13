export function Header() {
  const Social = [
    { name: 'logo-github', url: 'https://github.com/LenerJic'},
    { name: 'logo-whatsapp', url: 'https://wa.pe/51922309422?text=Hola'},
  ]
  return (
    <header className="py-8 text-5xl font-extrabold flex flex-col lg:flex-row justify-between px-10 text-center">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-sky-500 to-green-500">
        Lener Inga
      </span>
      <div className="flex gap-4 items-center justify-center mt-4 lg:mt-0">
        {Social.map((icon, index) => (
          <a key={index} href={icon?.url} target="_blank" className="hover:animate-bounce">
            <ion-icon name={icon?.name}></ion-icon>
          </a>
        ))}
      </div>
    </header>
  )
}
