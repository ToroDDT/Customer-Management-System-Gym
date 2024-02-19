export default function MyDay() {
  return (
    <div>
      <div className="bg-blue-600 text-white p-5">My Day</div>
      <Calendar />
      <GoogleCalendar />
    </div>
  );
}

function Calendar() {
  return (
    <div>
      <div>Date</div>
      <div className="mb-5 flex justify-center font-bold pt-5">
        No Classes, Events or Appointments scheduled for you today.
      </div>
    </div>
  );
}

function GoogleCalendar() {
  return <div></div>;
}
