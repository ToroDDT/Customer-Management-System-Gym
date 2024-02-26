function LeadsForm() {
  return (
    <div className="m-10">
      <div>
        <div>Create New Lead</div>
        <div>Lead Information</div>
      </div>
      <form action="">
        <div className="flex space-x-10 mt-5 ">
          <label htmlFor="Email">Status</label>
          <input name="Email" type="text" />
        </div>
        <div className="flex space-x-10 mt-5">
          <label htmlFor="First_Name">First Name</label>
          <input name="First_Name" type="text" className="ml-10" />
        </div>
        <div className="flex space-x-10 mt-5">
          <label htmlFor="Last_Name">Last Name</label>
          <input type="text" name="Last_Name" className="ml-10" />
        </div>
        <div className="flex space-x-10 mt-5">
          <label htmlFor="Birthday">Birthday</label>
          <input name="Birthday" type="text" className="ml-10" />
        </div>
        <div className="flex space-x-10 mt-5">
          <label htmlFor="PostalCode">Postal-code</label>
          <input type="text" name="PostalCode" className="ml-10" />
        </div>
        <div className="flex space-x-10 mt-5">
          <label htmlFor="Mobile_Phone">Mobile-Phone</label>
          <input type="text" name="Mobile_Phone" />
        </div>
        <div>
          <label htmlFor="Objectives"></label>
          <select name="Objectives" id="Objectives">
            <option value="weight-loss"> Weight Loss</option>
            <option value="Athletic Performance">Athletic Peformance</option>
            <option value="Health Reasons"> Health Reasons</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="Referred-by">Referred By</label>
          <select name="Referred-by" id="Referred-by">
            <option value="google">google</option>
            <option value=""></option>
          </select>
        </div>
        <div>
          <label htmlFor="Notes"></label>
          <textarea name="Notes" id="Notes" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
}

export default LeadsForm;
