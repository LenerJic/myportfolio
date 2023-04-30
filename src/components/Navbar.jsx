import React from 'react';
import { Link } from 'react-scroll';
import { useState } from "react";

export function Navbar() {
  const Menus = [
    { link:'home', icon: "home-outline" },
    { link:'about', icon: "person-outline" },
    { link:'skills', icon: "code-working-outline" },
    { link:'projects', icon: "desktop-outline" },
    { link:'contact', icon: "chatbubble-outline" },
  ]
  const [active, setActive] = useState(0);
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-20 backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 py-2 flex justify-between text-2xl text-white/50">
        {Menus.map((menu, i) => (
            <Link key={i} to={menu.link} activeClass='active'
             spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center rounded-full hover:text-white">
              <ion-icon name={menu.icon}></ion-icon>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
