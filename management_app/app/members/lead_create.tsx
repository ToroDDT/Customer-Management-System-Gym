import { TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SelectInput from "@mui/material/Select/SelectInput";
import Textarea from "@mui/joy/Textarea";

function LeadsForm() {
  return (
    <div className="m-10 bg-white p-5">
      <div>
        <div>
          <span>Home /</span>
          <span> Leads /</span>
          <span> Create New lead</span>
        </div>
        <div>Create New Lead</div>
        <div>Lead Information</div>
      </div>
      <form className="flex flex-col" action="">
        <div className="space-y-3">
          <div>
            <label>Status</label>
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
            <TextField id="PostalCode" variant="outlined" label="PostalCode" />
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
              <option value="Athletic Performance">Athletic Peformance</option>
              <option value="Health Reasons"> Health Reasons</option>
              <option value="Other">Other</option>
            </Select>
          </div>
          <div>
            <label htmlFor="Referred-by">Referred By</label>
            <select name="Referred-by" id="Referred-by">
              <option value="Google">Google</option>
              <option value="Friend"> Friend</option>
              <option value="Website">Website</option>
            </select>
          </div>
          <div className="flex gap-x-11">
            <Textarea name="Outlined" placeholder="Notes" variant="outlined" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LeadsForm;
