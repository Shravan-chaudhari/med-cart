"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";
import "../../styles/navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import Avatar from "@mui/material/Avatar";

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
  console.log(user);
  return (
    <div className="Navbar">
      <ul className="Navigation">
        <li>
          <div className="tittle">
            <p>MEd CArt</p>
          </div>
        </li>
        <li>
          <div className="search">
            <input
              type="text"
              placeholder="Search for medicines and health care products"
            />
            <div className="searchbtn">
              <SearchIcon className="searchIcon" />
              <p>Search</p>
            </div>
          </div>
        </li>
        {!user ? (
          <li onClick={handleSignIn}>
            <div className="login">
              <p>Login/Signup</p>
            </div>
          </li>
        ) : (
          <li onClick={handleSignOut}>
            <div className="login">
              <Avatar
                sx={{ width: 24, height: 24 }}
                className="avatar"
                src={user.photoURL}
              />
              <p>Welcome, {user.displayName}</p>
            </div>
          </li>
        )}

        <li>
          <div className="cart">
            <ShoppingCartIcon className="cartIcon" />
            <p>Cart</p>
          </div>
        </li>
      </ul>

      <ul>
        <li>
          <div className="tagline">
            <WatchLaterIcon />
            <p>24 hrs available solution for all your medical needs</p>
          </div>
          <p></p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
