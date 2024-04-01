function LeadsForm() {
  return (
    <div className="m-10">
      <div>
        <div>
          <span>Home /</span>
          <span> Leads /</span>
          <span> Create New lead</span>
        </div>
        <div>Create New Lead</div>
        <div>Lead Information</div>
      </div>
      <form className="flex" action="">
        <div className="flex-col space-y-3">
          <div>
            <label htmlFor="Email">Status</label>
          </div>
          <div>
            <label htmlFor="First_Name">First Name</label>
          </div>
          <div>
            <label htmlFor="Last_Name">Last Name</label>
          </div>
          <div>
            <label htmlFor="Birthday">Birthday</label>
          </div>
          <div>
            <label htmlFor="PostalCode">Postal-code</label>
          </div>
          <div>
            <label htmlFor="Mobile_Phone">Mobile-Phone</label>
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
        </div>
        <div className="flex-col space-y-3">
          <input name="Email" type="text" className="block" />
          <input name="First_Name" type="text" className="block" />
          <input type="text" name="Last_Name" className="block" />
          <input name="Birthday" type="text" className="block" />
          <input type="text" name="PostalCode" className="block" />
          <input type="text" name="Mobile_Phone" className="block" />
        </div>
      </form>
    </div>
  );
}

export default LeadsForm;
