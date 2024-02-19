"use client";
import { useState } from "react";
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

export default function Calendar() {
  const [date, setDate] = useState(getDate());
  return (
    <div>
      <div>{date}</div>
      <div className="mb-5 flex justify-center font-bold pt-5">
        No Classes, Events or Appointments scheduled for you today.
      </div>
    </div>
  );
}
