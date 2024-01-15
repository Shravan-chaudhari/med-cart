"use client";
import React from "react";

import { UserAuth } from "../context/AuthContext";
import Link from "next/link";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Navbar">
      <ul>
        <Link href="/cart">HI</Link>
        <li>hello</li>
        <li onClick={handleSignOut}>tata</li>
        <li onClick={handleSignIn}>bye</li>
      </ul>
    </div>
  );
};

export default Navbar;
