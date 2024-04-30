"use client";
import { Button, TextField } from "@mui/material";
//import SelectInput from "@mui/material/Select/SelectInput";
import Textarea from "@mui/joy/Textarea";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  SelectChangeEvent,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

function LeadsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mobilePhoneNumber, setMobilePhoneNumber] = useState("");
  const [objectives, setObjectives] = useState("");
  const [referredBy, setReferredBy] = useState("");

  const [openObjectives, setOpenObjectives] = useState(false);
  const [openReferredBy, setOpenReferredBy] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);

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
              <BasicSelect
                id={"Status"}
                optionOne={"Contacted"}
                optionTwo={"In Discussion"}
                optionThree={"Disqualified"}
                optionFour={"Attempted"}
              />
            </div>
            <div className="flex gap-x-9">
              <TextField
                id="FirstName"
                variant="outlined"
                label="FirstName"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
            </div>
            <div className="flex gap-x-9">
              <TextField
                id="LastName"
                variant="outlined"
                label="LastName"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>
            <div className="flex gap-x-12">
              <TextField
                id="Birthday"
                variant="outlined"
                label="Birthday"
                value={birthday}
                onChange={(event) => {
                  setBirthday(event.target.value);
                }}
              />
            </div>
            <div className="flex gap-x-7">
              <TextField
                id="PostalCode"
                variant="outlined"
                label="PostalCode"
                value={postalCode}
                onChange={(event) => {
                  setPostalCode(event.target.value);
                }}
              />
            </div>
            <div className="flex gap-x-3">
              <TextField
                id="MobilePhoneNumber"
                variant="outlined"
                label="MobilePhoneNumber"
                value={mobilePhoneNumber}
                onChange={(event) => {
                  setMobilePhoneNumber(event.target.value);
                }}
              />
            </div>
            <div className="flex gap-x-10">
              <BasicSelect
                id={"Objectives"}
                setState={setObjectives}
                optionOne={"Weight loss"}
                optionTwo={"Health Reasons"}
                optionThree={"Athletic Performance"}
                optionFour={"Other"}
              />
            </div>
            <div>
              <BasicSelect
                id={"Referred By"}
                optionOne={"Website"}
                optionThree={"Forum"}
                optionTwo={"Friends"}
                optionFour={"Other"}
              />
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
function BasicSelect(props) {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ width: 248 }}>
      <FormControl fullWidth>
        <InputLabel id={props.id}> {props.id} </InputLabel>
        <Select
          labelId={props.id}
          id={props.id}
          value={value}
          label={props.id}
          onChange={handleChange}
        >
          <MenuItem value={props.optionOne}>{props.optionOne}</MenuItem>
          <MenuItem value={props.optionTwo}>{props.optionTwo}</MenuItem>
          <MenuItem value={props.optionThree}>{props.optionThree}</MenuItem>
          <MenuItem value={props.optionFour}>{props.optionFour}</MenuItem>
        </Select>
      </FormControl>
    </Box>
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
