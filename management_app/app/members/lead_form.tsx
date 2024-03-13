"use client";
import { useEffect, useMemo, useState } from "react";

const useArrayofLeads = () => {
  const [arrayOfLeads, setArrayofLeads] = useState([{ name: "Dvid", id: 1 }]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const url = "http://localhost:8080/user";
  useEffect(() => {
    fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: "Basic " + btoa("namhm:codejava"),
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => setArrayofLeads([data]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { arrayOfLeads, error, loading };
};
function LeadsInfo() {
  const { arrayOfLeads, error, loading } = useArrayofLeads();

  if (error) {
    return (
      <div className="mx-2 text-zinc-400">
        <div>New Leads </div>
        <p>A Network error was encountered</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="mx-2 text-zinc-400">
        <div>New Leads </div>
        <div>Loading...</div>;
      </div>
    );
  }
  return (
    <div className="mx-2">
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
