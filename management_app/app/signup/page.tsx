import Button from "@mui/material/Button";

function Page() {
  return (
    <>
      <form action="" method="post">
        <label htmlFor="name">
          <input type="text" placeholder="Name" />
        </label>
        <label htmlFor="email">
          <input type="text" placeholder="Email" />
        </label>
        <label htmlFor="password">
          <input type="text" placeholder="password" />
        </label>
        <label htmlFor="confirm-password">
          <input type="text" placeholder="confirm password" />
        </label>
        <Button variant="contained">SIGN UP</Button>
        <Button variant="contained">Sign IN</Button>
      </form>
    </>
  );
}
