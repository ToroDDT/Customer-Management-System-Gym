"use client";
import Button from "@mui/material/Button";
import { title } from "process";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export function SideNav() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`h-screen p-5 pt-8 bg-blue-600 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`text-3xl bg-white rounded-full absolute -right-3 top-9 border cursor-pointer`}
        onClick={() => setOpen(!open)}
      />
      <SearchBar open={open} />
      <MenuOptions open={open} />
    </div>
  );
}
