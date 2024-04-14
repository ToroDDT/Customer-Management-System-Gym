import { useState } from "react";
import Link from "next/link";
import React from "react";
interface Props {
  buttonName: string;
  hasCounter: boolean;
  link: string;
}

function Subscriptions() {}

function MemberMenuOptions() {
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
      />
    </div>
  );
}

function MemberButtonOptions(props: Props) {
  return <Link href={props.link}>{props.buttonName}</Link>;
}
