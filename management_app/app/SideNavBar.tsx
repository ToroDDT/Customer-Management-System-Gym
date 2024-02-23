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
}
