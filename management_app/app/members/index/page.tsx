import MemberMenuOptions from "./subscriptions";

interface Data {
  memberShipsTotal: number;
  exMembers: number;
  cancelledSubs: number;
}

async function getData() {
  const res: Data | undefined = await fetch(
    "http://localhost:8080/members/data"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error;
    });
  return res;
}

async function Page() {
  //let membersRecords = await getData();
  return <MemberMenuOptions />;
}

export default Page;
