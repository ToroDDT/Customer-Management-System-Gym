"use client";
import Button from "@mui/material/Button";
import { useState } from "react";
function submitAccountInfo() {
  fetch;
}

function validateFields(
  password: string,
  confirmPassword: string,
  userName: string
) {
  const checkPassword = () => {
    if (password !== confirmPassword) {
      return true;
    } else {
      return false;
    }
  };
  const checkUserNameLength = () => {
    if (userName.length == 0) {
      return false;
    }
  };
  return { checkPassword, checkUserNameLength };
}

function Page() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const { checkPassword, checkUserNameLength } = validateFields(
    password,
    confirmPassword,
    userName
  );
  const formSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    alert("hi");
  };
  return (
    <>
      <form
        className="flex flex-col mt-40 box-border pr-7 pl-7 pb-32 bg-white rounded-lg mr-10 items-center"
        action=""
        onSubmit={formSubmit}
        method="post"
      >
        <div className="pt-10 pb-10 text-3xl">Create Account</div>
        <label htmlFor="username">
          <input
            className="pr-52 pt-3 pb-3 bg-slate-200 rounded-lg mb-3 pl-3"
            type="text"
            placeholder="UserName"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <input
            className="pr-52 pt-3 pb-3 bg-slate-200 rounded-lg mb-3 pl-3"
            type="text"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            className="pr-52 pt-3 pb-3 bg-slate-200 rounded-lg mb-3 pl-3"
            type="text"
            placeholder="password"
            pattern=".{8,}"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <label htmlFor="confirm-password">
            <input
              className="pr-52 pt-3 pb-3 pl-3 bg-slate-200 rounded-lg"
              type="text"
              placeholder="confirm password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          {submit && checkPassword() ? (
            <div className="flex border-solid text-red-700">
              password does not match
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="mt-5">
          <Button
            variant="contained"
            type="submit"
            className="bg-blue-800 mr-1 rounded-lg p-3 pr-20 pl-20 font-extrabold "
          >
            SIGN UP
          </Button>
          <Button
            variant="contained"
            className="bg-slate-200 text-black rounded-lg p-3 pr-20 pl-20 font-extrabold"
          >
            Sign IN
          </Button>
        </div>
      </form>
    </>
  );
}

export default Page;
