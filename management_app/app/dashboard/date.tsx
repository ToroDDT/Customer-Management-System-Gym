"use client";
import { useState } from "react";
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  function getMonthToString() {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "Febuary";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 9:
        return "August";
      case 10:
        return "September";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  }
  return `${getMonthToString()}/${date}/${year}`;
}

export default function Calendar() {
  const [date, setDate] = useState(getDate());
  return (
    <div className="mx-2 ">
      <div className="pb-2 pt-10 border-b-2 border-blue-600">{date}</div>
      <div className="pt-5 border-b-2 border-blue-600 m-2"></div>
      <div className="mb-2 flex justify-center  border-b-2 border-blue-600 pt-10 pb-10 text-zinc-400">
        No Classes, Events or Appointments scheduled for you today.
      </div>
    </div>
  );
}
