import { useEffect, useState } from "react";
import { AddButton } from "../MyDay-Component";

function LeadsInfo() {
  const [arrayOfLeads, setArrayofLeads] = useState([{ name: "david", id: 1 }]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const url = "Localhost:4000/leads-records";

  useEffect(() => {
    fetch(url, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setArrayofLeads(response[0]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A Network error was encountered</p>;

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        People <AddButton />
      </div>
      <div>New Leads </div>
      <ul>
        {arrayOfLeads.map((lead) => (
          <li key={lead.id}>{lead.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LeadsInfo;
