function LeadsForm() {
  return (
    <div>
      <div>
        <div>Create New Lead</div>
        <div>Lead Information</div>
      </div>
      <form action="">
        <label htmlFor="email">Status</label>
        <input name="email" type="text" />
        <label htmlFor="firsName">First Name</label>
        <input name="firstname" type="text" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />
        <label htmlFor="birthday"></label>
        <input name="birthday" type="text" />
        <label htmlFor="postalcode"></label>
        <label htmlFor="Mobile-Phone"></label>
        <input type="text" />
        <label htmlFor="objectives"></label>
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
