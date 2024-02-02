import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { Icon } from "@mui/material";
import "../Stylesheets/Dashboard.css";

function MyDay(): JSX.Element {
  return (
    <div className="Dashboard-Component">
      <div className="Title-Dash-Board-Component">My Day</div>
      <AddButton />
      <div className="calender"></div>
      <div className="events-sheduled-today">
        no Classes, Events or Appointments scheduled for you today.
      </div>
      <div>
        <Button variant="contained">Connect to Google Here</Button>
      </div>
    </div>
  );
}

function Calendar() {
  return <div></div>;
}

function GoogleCalendar() {
  return <div></div>;
}

function AddButton(): JSX.Element {
  return <Icon sx={{ color: red[500] }}>add_circle</Icon>;
}

export { MyDay, AddButton };
