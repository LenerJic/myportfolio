export function Header() {
  const Social = [
    { name: 'logo-github', url: 'https://github.com/LenerJic'},
  ]
  return (
    <header className="px-10 py-6 flex justify-around text-4xl lg:text-5xl font-extrabold text-center">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-sky-500 to-green-500">
        LenerJic
      </span>
      <div className="flex gap-x-4 items-center justify-center">
        {Social.map((icon, index) => (
          <a key={index} href={icon?.url} target="_blank" className="hover:animate-bounce">
            <ion-icon name={icon?.name}></ion-icon>
          </a>
        ))}
      </div>
    </header>
  )
}
