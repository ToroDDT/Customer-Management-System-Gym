import LeadsInfo from "../members/lead_form";
export default function People() {
  return (
    <div className=" bg-white mx-5 mb-5">
      <div className="bg-blue-600 text-white p-5 rounded-md">People</div>
      <div className="pb-2 pt-10 border-b-2 border-blue-600 mx-2">
        New Leads <span></span>
      </div>
      <LeadsInfo />
      <div className="pb-2 pt-10 border-b-2 border-blue-600 mx-2">
        My Leads <span></span>
      </div>
      <div className="pb-2 pt-10 border-b-2 border-blue-600 mx-2">
        New Memberships
      </div>
      <div className="flex justify-center pt-10 pb-15 mt-5 text-zinc-400">
        New Members show up here.{" "}
      </div>
      <div className="pb-2 pt-10 border-b-2 border-blue-600 mx-2 pt-10 pb-15 mt-5">
        Birthdays
      </div>
      <div className="flex justify-center pt-10 pb-15 mt-5 text-zinc-400">
        This month's birthdays to celebrate.{" "}
      </div>
      <div className="pb-2 pt-10 border-b-2 border-blue-600 mx-2 pt-10 pb-15 mt-5">
        Anniversaries
      </div>
      <div className="flex justify-center pt-10 pb-10 mt-5 text-zinc-400">
        This months's anniversaries to acknowledge.{" "}
      </div>
    </div>
  );
}
