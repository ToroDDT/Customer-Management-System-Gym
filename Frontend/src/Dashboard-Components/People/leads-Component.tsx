import { useEffect, useState } from "react";
import { AddButton } from "../MyDay-Component";

function LeadsInfo() {
  const [arrayOfLeads, setArrayofLeads] = useState([{ name: "david" }]);
  const url = "Localhost:4000/leads-records";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setArrayofLeads(response[0]))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <div>
        People <AddButton />
      </div>
      <div>New Leads </div>
      <ul>
        {arrayOfLeads.map((lead) => (
          <li>{lead.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LeadsInfo;
