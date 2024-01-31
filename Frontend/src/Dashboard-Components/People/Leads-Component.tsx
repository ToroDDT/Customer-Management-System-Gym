import { useEffect, useState } from "react";
import { AddButton } from "../MyDay-Component";
import "../../Stylesheets/Dashboard.css";
import { array } from "prop-types";

const useArrayofLeads = () => {
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
  return { arrayOfLeads, error, loading };
};

function LeadsInfo() {
  const { arrayOfLeads, error, loading } = useArrayofLeads();

  if (error) {
    return (
      <div className="Dashboard-Componenet">
        <div className="Title-Dash-Board-Component">
          People <AddButton />
        </div>
        <div>New Leads </div>
        <p>A Network error was encountered</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="Dashboard-Componenet">
        <div className="Title-Dash-Board-Component">
          People <AddButton />
        </div>
        <div>New Leads </div>
        <div>Loading...</div>;
      </div>
    );
  }
  return (
    <div className="Dashboard-Componenet">
      <div className="Title-Dash-Board-Component">
        People <AddButton />
      </div>
      <div>New Leads </div>
      <ul>
        {arrayOfLeads.map((lead) => (
          <li key={lead.id}>{lead.name}</li>
        ))}
      </ul>
      ;
    </div>
  );
}
export default LeadsInfo;
