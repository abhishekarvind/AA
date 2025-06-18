import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

function NavLink() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center justify-center text-center p-10">
  <nav className="p-3 fixed top-0 text-white bg-[#D4C9BE]/50 backdrop-blur-md border border-white/10 shadow-lg rounded-full w-1/2 sm:w-3/4 md:w-1/2 mt-5">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-Aquire text-center ml-0 sm:ml-4">
      aa
    </h2>
  </nav>
</div>



  );
}

export default NavLink;
