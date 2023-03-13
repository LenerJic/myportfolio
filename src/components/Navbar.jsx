import { useState } from "react";

export function Navbar() {
  const Menus = [
    { name: "Home", link:'#home', icon: "home-outline", dis: "translate-x-0" },
    { name: "Profile", link:'#home', icon: "person-outline", dis: "translate-x-16" },
    { name: "Message", link:'#about', icon: "chatbubble-outline", dis: "translate-x-32" },
    { name: "Photos", link:'#home', icon: "camera-outline", dis: "translate-x-48" },
    { name: "Settings", link:'#contact', icon: "settings-outline", dis: "translate-x-64" },
  ]
  const [active, setActive] = useState(0);
  return (
    <div className="bg-zinc-800/40 shadow-lg max-h-[4.4rem] px-6 rounded-t-xl lg:rounded-full">
      <ul className="flex relative">
        <span className={`bg-gradient-to-t from-green-400 to-blue-500 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute -top-5 rounded-full`}></span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16 text-white ">
            <a className="flex flex-col text-center pt-6" href={menu?.link} onClick={() => setActive(i)}>
              <span className={`text-xl cursor-pointer duration-500 ${ i === active && "-mt-6"}`}>
                <ion-icon name={menu?.icon}></ion-icon>
              </span>
              <span className={`${ active === i 
                ? 'translate-y-4 duration-700 opacity-100'
                : 'opacity-0 translate-y-10'
              }`}>{menu?.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
