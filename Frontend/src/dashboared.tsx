import AttentionNeeded from "./Dashboard-Components/Attention-Needed";
import { MyDay } from "./Dashboard-Components/MyDay-Component";
import LeadsInfo from "./Dashboard-Components/People/leads-Component";

function DashBoard() {
  return (
    <div>
      <MyDay />
      <AttentionNeeded />
      <LeadsInfo />
    </div>
  );
}

export default DashBoard;
