"use client";
import Button from "@mui/material/Button";
import { useState } from "react";

function Page() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <form
        className="flex flex-col mt-40 box-border pr-32 pl-10 pb-32 bg-white rounded-lg mr-10"
        action=""
        method="post"
      >
        <div className="pt-10 pb-10 text-3xl">Create Account</div>
        <label htmlFor="username">
          <input
            className="pr-20 pt-3 pb-3 bg-slate-200 rounded-lg mb-3"
            type="text"
            placeholder="UserName"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <input
            className="pr-20 pt-3 pb-3 bg-slate-200 rounded-lg mb-3"
            type="text"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            className="pr-20 pt-3 pb-3 bg-slate-200 rounded-lg mb-3"
            type="text"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="confirm-password">
          <input
            className="pr-20 pt-3 pb-3 bg-slate-200 rounded-lg"
            type="text"
            placeholder="confirm password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <div>
          <Button
            variant="contained"
            type="submit"
            className="bg-blue-800 mr-5"
          >
            SIGN UP
          </Button>
          <Button variant="contained" className="bg-blue-800">
            Sign IN
          </Button>
        </div>
      </form>
    </>
  );
}

export default Page;
