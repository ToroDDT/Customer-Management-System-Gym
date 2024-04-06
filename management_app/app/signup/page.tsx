"use client";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import Link from "next/link";

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
    } else {
      return true;
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
  const [error, setError] = useState("");
  const [submitForm, setSubmitForm] = useState(false);
  const { checkPassword, checkUserNameLength } = validateFields(
    password,
    confirmPassword,
    userName
  );
  const formSubmit = (event) => {
    event.preventDefault();
    if (checkPassword() == false && checkUserNameLength() == true) {
      setSubmit(true);
    }
  };
  useEffect(() => {
    if (submit) {
      console.log("Form Submited");
      const formData = new FormData();
      formData.append("username", userName);
      formData.append("email", email);
      formData.append("password", password);
      fetch("http:localhost:8080/create/account", {
        body: formData,
        method: "post",
      })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .catch((error) => setError(error))
        .finally(() => {
          if (error == "") {
            return redirect("/login");
          }
        });
    }
  }, [userName, email, password, error, submit]);
  return (
    <>
      <form
        className="flex flex-col mt-40 box-border pr-7 pl-7 pb-32 bg-white rounded-lg mr-10 items-center"
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
        <div>
          <label htmlFor="email">
            <input
              className="pr-52 pt-3 pb-3 bg-slate-200 rounded-lg pl-3"
              type="text"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className="mb-2 text-xs pl-1">
            Email must be in this format(for example: john@yahoo.com)
          </div>
        </div>
        <div>
          <label htmlFor="password">
            <input
              className="pr-52 pt-3 pb-3 bg-slate-200 rounded-lg pl-3"
              type="text"
              placeholder="Password"
              pattern=".{8,}"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="mb-2 text-xs pl-1">
            Password must be 8 characters long
          </div>
        </div>
        <div>
          <label htmlFor="confirm-password">
            <input
              className="pr-52 pt-3 pb-3 pl-3 bg-slate-200 rounded-lg"
              type="text"
              placeholder="Confirm password"
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
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </form>
    </>
  );
}

export default Page;
