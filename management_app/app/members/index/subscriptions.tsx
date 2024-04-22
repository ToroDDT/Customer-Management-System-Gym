"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
interface Props {
  buttonName: string;
  hasCounter: boolean;
  link: string;
  address: string;
}

export default function MemberMenuOptions(records) {
  return (
    <div className="flex mx-44 bg-white p-6">
      <Subscriptions />
      <div>
        <div className="flex justify-center bg-slate-200 py-5 text-2xl">
          Members
        </div>
        <div className="flex justify-center bg-slate-200 mt-2 p-2">
          Manage all aspects of your member recorder here!! Click on a member to
          view or edit thier personal plans, information, billing, or
          information
        </div>
        <MemberButtonOptions
          buttonName={"Add New Member"}
          hasCounter={true}
          link="/hello"
          address="http://localhost:8080/subscriptions/amount"
        />
        <MemberButtonOptions
          buttonName={"Email All Members"}
          hasCounter={false}
          link="/"
          address="/communicate/email"
        />
        <MemberButtonOptions
          buttonName={"Active Subscriptions"}
          hasCounter={true}
          link="/members/index"
          address=""
        />
        <MemberButtonOptions
          buttonName={"Active Memberships"}
          hasCounter={true}
          link="/members/active"
          address="http://localhost:8080/members/active"
        />
        <MemberButtonOptions
          buttonName={"Cancelled Subscriptions"}
          hasCounter={true}
          link="/members/cancelsubs"
          address="http://localhost:8080/members/terminated"
        />
        <MemberButtonOptions
          buttonName={"Ex-Members"}
          hasCounter={true}
          link="/members/ex-members"
          address="http://localhost:8080/members/ex-members"
        />
      </div>
    </div>
  );
}

function Subscriptions() {
  return (
    <div className="">
      <div>Active</div>
      <div className=" flex space-x-40 text-white bg-blue-500 mr-4 p-1 text-sm ">
        <div>name</div>
        <div>Plan</div>
        <div>last-billing</div>
        <div>Next-billing</div>
        <div>Status</div>
      </div>
      <ul></ul>
    </div>
  );
}

function MemberButtonOptions(props: Props) {
  return (
    <div className=" flex py-3 justify-center text-blue-800 border-b-2 border-slate-300 hover:bg-sky-100">
      <Link href={props.link}>
        {props.buttonName}
        <Counter counter={props.hasCounter} address={props.address} />
      </Link>
    </div>
  );
}

function Counter({ counter, address }: { counter: boolean; address: string }) {
  const [amount, setAmount] = useState<boolean>(false);
  return <div>{amount}</div>;
}
