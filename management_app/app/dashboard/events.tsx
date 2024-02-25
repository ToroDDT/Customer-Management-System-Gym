import { useState } from "react";
import Button from "@mui/material/Button";
import Calendar from "./date";

export default function MyDay() {
  return (
    <div className="bg-white rounded-md mx-5 mb-5">
      <div className="bg-blue-600 text-white p-5 rounded-md">My Day</div>
      <Calendar />
      <GoogleCalendar />
    </div>
  );
}

function GoogleCalendar() {
  return (
    <div className="flex flex-col justify-center">
      <div className="mb-2 mx-10 text-zinc-400 flex justify-center pt-10 pb-15 mt-5">
        Connect your Google Calendar account to get a complete snapshot of your
        day.
      </div>
      <Button
        className=" mx-20 mt-5 text-white bg-slate-300 mb-10"
        variant="contained"
      >
        Connect to Google
      </Button>
    </div>
  );
}
