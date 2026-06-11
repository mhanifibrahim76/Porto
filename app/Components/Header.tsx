import React from "react";
import {
  House,
  User,
  FolderGit2,
  Mail,
} from "lucide-react";

const Header = () => {
  const menus = [
    {
      name: "Home",
      icon: <House size={25} />,
    },
    {
      name: "About",
      icon: <User size={25} />,
    },
    {
      name: "Projects",
      icon: <FolderGit2 size={25} />,
    },
    {
      name: "Contact",
      icon: <Mail size={25} />,
    },
  ];

  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-50">
      <div className="group h-[500px] justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-4xl p-2 transition-all duration-300 hover:w-48 w-16 overflow-hidden">
        
        <nav className="flex flex-col justify-around h-full">
          {menus.map((menu, index) => (
            <a
              key={index}
              href={`#${menu.name.toLowerCase()}`}
              className="flex items-center gap-4 text-white hover:bg-white/10 p-3 rounded-xl transition-all"
            >
              <div>{menu.icon}</div>

              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
                {menu.name}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;