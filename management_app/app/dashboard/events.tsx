import { useState } from "react";
import Calendar from "./date";

export default function MyDay() {
  return (
    <div>
      <div className="bg-blue-600 text-white p-5">My Day</div>
      <Calendar />
      <GoogleCalendar />
    </div>
  );
}

function GoogleCalendar() {
  return <div></div>;
}
