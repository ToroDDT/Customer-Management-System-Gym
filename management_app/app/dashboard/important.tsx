export default function Attention() {
  return (
    <div className="bg-white rounded-md mx-5">
      <div className="bg-blue-600 text-white p-5 rounded-md">Attention</div>
      <div className="pb-2 pt-10 border-b-2 border-blue-600 mx-2">
        At Risk Members <span></span>
      </div>
      <div className="flex justify-center pt-10 pb-15 mt-5">
        Members that have not been to class recently show up here
      </div>
      <div className="pb-2 pt-10 border-b-2 border-blue-600 mx-2">
        Overdue Invoices <span></span>
      </div>
      <div className="flex justify-center pt-10 pb-15 mt-5">
        Delinquent payment alerts show up here.
      </div>
      <div className="pb-2 pt-10 border-b-2 border-blue-600 mx-2">
        Expiring Members
      </div>
      <div className="flex justify-center pt-10 pb-15 mt-5">
        Memberships set to expire in the next week
      </div>
      <div className="pb-2 pt-10 border-b-2 border-blue-600 mx-2">
        Unverified Bank Accounts <span></span>
      </div>
      <div className="flex justify-center pt-10 pb-15 mt-5">
        Members who need reminding to verify thier micro-deposits
      </div>
    </div>
  );
}
