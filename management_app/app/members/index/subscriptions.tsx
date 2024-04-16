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

export default function MemberMenuOptions() {
  return (
    <div className="flex mx-44 bg-white p-6">
      <Subscriptions />
      <div>
        <div className="bg-slate-200">Members</div>
        <div>
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
      <div className=" flex space-x-44  bg-blue-500 ">
        <div>name</div>
        <div>Plan</div>
        <div>Pre/Next</div>
        <div>Bill</div>
        <div>Status</div>
      </div>
      <ul></ul>
    </div>
  );
}

function MemberButtonOptions(props: Props) {
  return (
    <Link href={props.link}>
      {props.buttonName}{" "}
      <Counter counter={props.hasCounter} address={props.address} />
    </Link>
  );
}

function Counter({ counter, address }: { counter: boolean; address: string }) {
  const [amount, setAmount] = useState<boolean>(false);
  return <div>{amount}</div>;
}
