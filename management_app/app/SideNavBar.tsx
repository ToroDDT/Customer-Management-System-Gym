"use client";
import Button from "@mui/material/Button";
import { title } from "process";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { FaDumbbell } from "react-icons/fa";

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
      <MenuOptions open={open} />
    </div>
  );
}

export function SearchBar() {
  return (
    <div className="flex items-center rounded-md bg-slate-300 ml-5 mt-1 mb-5 p-4">
      <BsSearch className="text-white text-lg block float-left cursor-pointer" />
      <input
        type={"search"}
        placeholder="Search"
        className="text-base bg-transparent w-full text-white focus:outline-none"
      />
    </div>
  );
}

function MenuOptions({ open }) {
  const [subMenuOpen, SetSubMenuOpen] = useState(false);
  const [peopleMenu, setPeopleMenu] = useState(false);
  const [communicationMenus, setCommnunicationMeunus] = useState(false);
  const [appointmentsMenu, setAppointementsMenu] = useState(false);
  const [paymentMenu, setPaymentMenu] = useState(false);
  const [plansMenu, setPlansMenu] = useState(false);
  const [reportsMenu, setReportsMenu] = useState(false);
  const menus = [
    {
      title: "People",
      subMenu: true,
      setToggle: () => {
        setPeopleMenu(!peopleMenu);
      },
      isToggle: peopleMenu,
      index: uuidv4(),
      subMenuOptions: [
        { subMenuTitle: "Members", href: "/members/index" },
        { subMenuTitle: "Leads", href: "/members/leads" },
        { subMenuTitle: "users", href: "/users/index" },
      ],
    },
    {
      title: "Communicate",
      subMenu: true,
      setToggle: () => {
        setCommnunicationMeunus(!communicationMenus);
      },
      isToggle: communicationMenus,
      index: uuidv4,
      subMenuOptions: [
        { subMenuTitle: "Automatic", href: "/communications/automatic" },
        { subMenuTitle: "Email", href: "/communications/email" },
        { subMenuTitle: "Message", href: "/communications/email" },
      ],
    },
    {
      title: "Appointments",
      subMenu: true,
      setToggle: () => {
        setAppointementsMenu(!appointmentsMenu);
      },
      isToggle: appointmentsMenu,
      index: uuidv4(),
      subMenuOptions: [{ subMenuTitle: "Appointments", href: "/appointments" }],
    },
    {
      title: "Plans",
      subMenu: true,
      setToggle: () => {
        setPlansMenu(!plansMenu);
      },
      isToggle: plansMenu,
      index: uuidv4(),
      subMenuOptions: [
        { subMenuTitle: "Plans", href: "/plans/index" },
        { subMenuTitle: "Plan Categories", href: "/plans/categories" },
        { subMenuTitle: "Discounts", href: "plans/discounts" },
      ],
    },
    {
      title: "Payments",
      subMenu: true,
      setToggle: () => {
        setPaymentMenu(!paymentMenu);
      },
      isToggle: paymentMenu,
      index: uuidv4(),
      subMenuOptions: [{ subMenuTitle: "Invoices", href: "/invoices", key: 5 }],
    },
    {
      title: "Reports",
      subMenu: true,
      setToggle: () => {
        setReportsMenu(!reportsMenu);
      },
      isToggle: reportsMenu,
      index: uuidv4(),
      subMenuOptions: [
        { subMenuTitle: "Metrics", href: "/reports/metrics", key: 6 },
      ],
    },
  ];
  return (
    <>
      <div className="inline-flex">
        <FaDumbbell className="bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 p-1" />
        <h1
          className={`text-white origin-left front-medium text-3xl text-bold-800 ${
            !open && "scale-0"
          }`}
        >
          Gym Press
        </h1>
      </div>
      <ul className="">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="text-gray-300 text-sm flex-col items-center gap-x-4 cursor-pointer p-2  rounded-md mt-2 "
          >
            <div className="hover:bg-blue-800 p-2  rounded-md mt-2 flex flex-row">
              <span
                className={`text-base hover:bg-blue-800 font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
              {menu.subMenu && (
                <BsChevronDown
                  className={`${subMenuOpen && "rotate-180"} ${
                    !open && "hidden"
                  }`}
                  onClick={() => {
                    SetSubMenuOpen(!subMenuOpen);
                    console.log(menu.setToggle());
                  }}
                />
              )}
            </div>
            {open && (
              <SubMenuTitles
                menu={menu.isToggle}
                titles={menu.subMenuOptions}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

function SubMenuTitles({ titles, menu }) {
  return (
    <ul>
      {titles.map((title, index) => (
        <li
          className={` ${
            menu
              ? "hidden"
              : "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-blue-800 rounded-md"
          }`}
          key={index}
        >
          <Link href={title.href}>{title.subMenuTitle}</Link>
        </li>
      ))}
    </ul>
  );
}
