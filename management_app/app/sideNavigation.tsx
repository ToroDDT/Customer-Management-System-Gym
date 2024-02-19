import Button from "@mui/material/Button";

export function SideNav() {
  return (
    <div className="bg-blue-500 flex flex-col">
      <Button variant="contained">Dashboard</Button>
      <Button variant="contained">People</Button>
      <Button variant="contained">Communicate</Button>
      <Button variant="contained">Appointments</Button>
      <Button variant="contained">Plans</Button>
      <Button variant="contained">Products</Button>
    </div>
  );
}
