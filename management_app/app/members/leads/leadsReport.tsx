import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect, useCallback } from "react";
import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";

function LeadsTable() {
  const [selectedAmount, setSelectedAmount] = useState("10");
  const [content, setContent] = useState("");
  const { leadsInfo, error, loading } = useLeadsInfo(selectedAmount, content);
  return (
    <div>
      <div>
        <span>
          <select
            value={selectedAmount}
            onChange={(e) => setSelectedAmount(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </span>
        <div>
          <SearchEditable setText={setContent} />
        </div>
      </div>
      <DataTable rows={leadsInfo} />
    </div>
  );
}
const useLeadsInfo = (a, b) => {
  const [leadsInfo, setLeadsInfo] = useState([
    {
      id: 1,
      name: "david",
      dateAssigned: "January, 10",
      assignedTo: "unassigned",
      Photo: "stockPic",
    },
  ]);
  const [entries, setEntries] = useState(null);
  const [search, setSearch] = useState(null);
  const [error, setError] = useState<null | boolean>(null);
  const [loading, setLoading] = useState<boolean>(true);

  setEntries(a);
  setSearch(b);

  const url: string = "http://localhost:8080/leads";

  useEffect(() => {
    let httpHeaders: RequestInit = {
      method: "get",
      headers: new Headers({
        Authorization: "Basic " + btoa("namhm:codejava"),
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    };
    fetch(url + new URLSearchParams({}), httpHeaders)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => setLeadsInfo([data]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [entries, search]);

  return { leadsInfo, error, loading };
};

function DataTable({ rows }) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  );
}

function SearchEditable({ setText }) {
  const [content, setContent] = useState("");
  const onContentChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: [],
      allowedAttributes: { a: ["href"] },
    };

    setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);
  return (
    <ContentEditable
      onChange={() => {
        onContentChange;
        setText(content);
      }}
      onBlur={onContentChange}
      html={content}
    />
  );
}
