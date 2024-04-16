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

function Subscriptions() {}

export default function MemberMenuOptions() {
  return (
    <div>
      <div>Members</div>
      <div>
        Manage all aspects of your member recorder here!! Click on a member to
        view or edit thier personal plans, information, billing, or information
      </div>
      <MemberButtonOptions
        buttonName={"Add New Member"}
        hasCounter={true}
        link="/hello"
        address="http:localhost:8080/subscriptions/amount"
      />
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
