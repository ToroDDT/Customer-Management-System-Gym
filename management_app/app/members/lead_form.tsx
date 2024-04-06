"use client";
import { useEffect, useMemo, useState } from "react";

interface LeadInformation {
  id: number;
  name: string;
  dateAssigned: string;
  assignedTo: string;
  Photo: string;
}

const useArrayofLeads = () => {
  const [arrayOfLeads, setArrayofLeads] = useState<LeadInformation[]>([
    {
      id: 1,
      name: "david",
      dateAssigned: "January, 10",
      assignedTo: "unassigned",
      Photo: "stockPic",
    },
  ]);
  const [error, setError] = useState<null | boolean>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const url: string = "http://localhost:8080/user";

  useEffect(() => {
    let httpHeaders: RequestInit = {
      method: "get",
      headers: new Headers({
        Authorization: "Basic " + btoa("namhm:codejava"),
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    };
    fetch(url, httpHeaders)
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
function LeadsInfo(): JSX.Element {
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
