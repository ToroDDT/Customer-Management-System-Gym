function LeadsForm() {
  return (
    <div>
      <div>
        <div>Create New Lead</div>
        <div>Lead Information</div>
      </div>
      <form action="">
        <label htmlFor="Email">Status</label>
        <input name="Email" type="text" />
        <label htmlFor="First_Name">First Name</label>
        <input name="First_Name" type="text" />
        <label htmlFor="Last_Name">Last Name</label>
        <input type="text" name="Last_Name" />
        <label htmlFor="Birthday"></label>
        <input name="Birthday" type="text" />
        <label htmlFor="PostalCode"></label>
        <input type="text" name="PostalCode" />
        <label htmlFor="Mobile_Phone"></label>
        <input type="text" name="Mobile_Phone" />
        <label htmlFor="objectives"></label>
        <select>
          <option value="weight-loss"> Weight Loss</option>
          <option value="Athletic Performance"></option>
          <option value="Health Reasons"></option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="Referred-by">Referred By</label>
        <select name="Referred-by" id="Referred-by">
          <option value="google">google</option>
          <option value=""></option>
        </select>
        <label htmlFor="Notes"></label>
        <textarea name="Notes" id="Notes" cols="30" rows="10"></textarea>
      </form>
    </div>
  );
}

export default LeadsForm;
