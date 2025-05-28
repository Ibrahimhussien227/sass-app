import React from "react";
import Image from "next/image";
import Link from "next/link";

import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <div className="flex item-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={46}
            height={44}
          />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavbarItems />
        <p>Sign In</p>
      </div>
    </div>
  );
};

export default Navbar;
