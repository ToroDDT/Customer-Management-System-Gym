import { Button, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SelectInput from "@mui/material/Select/SelectInput";
import Textarea from "@mui/joy/Textarea";
import Link from "next/link";

function LeadsForm() {
  return (
    <div className="flex m-10 bg-white p-5">
      <div className="mr-8">
        <div className="">
          <div className="bg-slate-100 p-1 mb-3 pr-72 mr-6">
            <span>
              <Link className="hover:text-blue-400" href="/dashboard">
                Home /
              </Link>
            </span>
            <span className="hover:text-blue-400 ml-1">
              <Link href="/leads"> Leads /</Link>
            </span>
            <span className="ml-1"> Create New lead</span>
          </div>
          <div className="text-2xl text-slate-500 mb-1">Create New Lead</div>
          <div className="text-xl border-solid border-0 border-b border-black mb-4">
            Lead Information
          </div>
        </div>
        <form className="" action="">
          <div className="space-y-3 ">
            <div>
              <Select sx={{ width: 248 }}>
                <option value="Converted">Converted</option>
                <option value="Contacted">Contacted</option>
                <option value="Disqualified"> Disqualified</option>
                <option value="In-Discussion">In Discussion</option>
              </Select>
            </div>
            <div className="flex gap-x-9">
              <TextField id="FirstName" variant="outlined" label="FirstName" />
            </div>
            <div className="flex gap-x-9">
              <TextField id="LastName" variant="outlined" label="LastName" />
            </div>
            <div className="flex gap-x-12">
              <TextField id="Birthday" variant="outlined" label="Birthday" />
            </div>
            <div className="flex gap-x-7">
              <TextField
                id="PostalCode"
                variant="outlined"
                label="PostalCode"
              />
            </div>
            <div className="flex gap-x-3">
              <TextField
                id="MobilePhoneNumber"
                variant="outlined"
                label="MobilePhoneNumber"
              />
            </div>
            <div className="flex gap-x-10">
              <Select
                defaultValue="Objectives"
                placeholder="Objectives"
                sx={{ width: 248 }}
              >
                <option value="weight-loss"> Weight Loss</option>
                <option value="Athletic Performance">
                  Athletic Peformance
                </option>
                <option value="Health Reasons"> Health Reasons</option>
                <option value="Other">Other</option>
              </Select>
            </div>
            <div>
              <Select sx={{ width: 248 }}>
                <option value="Website"> Website</option>
                <option value="Forum">Athletic Peformance</option>
                <option value="Friends"> Health Reasons</option>
                <option value="Other">Other</option>
              </Select>
            </div>
            <div className="flex gap-x-11">
              <Textarea
                sx={{ width: 300 }}
                name="Outlined"
                placeholder="Notes"
                variant="outlined"
              />
            </div>
          </div>
        </form>
      </div>
      <LeadsToolOptions />
    </div>
  );
}

function LeadsToolOptions() {
  return (
    <div>
      <div className="flex justify-center bg-slate-200 p-1 py-7 text-2xl mb-1">
        Leads
      </div>
      <div className="bg-slate-200 p-2 mb-1">
        Start tracking your leads with these different leads tools
      </div>
      <div className="bg-slate-200 flex justify-center ">
        <Button className="w-full" variant="text">
          Expand
        </Button>
      </div>
      <div className="text-sky-400 hover:bg-sky-200 flex justify-center p-2">
        <Link className="w-full flex justify-center" href="/members/leads">
          View Leads
        </Link>
      </div>
      <div className="text-sky-400 hover:bg-sky-200 flex justify-center p-2">
        <Link className="w-full flex justify-center" href="/members/interest">
          View Lead Capture Form
        </Link>
      </div>
      <div className=" text-sky-400 hover:bg-sky-200 flex justify-center p-2">
        <Link className="w-full flex justify-center" href="/members/form">
          Edit Lead Capture Form
        </Link>
      </div>
    </div>
  );
}
export default LeadsForm;
