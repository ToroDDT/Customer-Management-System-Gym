import { auth } from "@clerk/nextjs";
async function springAuth() {
  // check if user exists
  const { userId, getToken } = auth();
  let username = userId?.toString();
  let password = getToken();
  let response = await fetch(`http:localhost:8080/account${userId}`);
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  if (response.ok) {
    await fetch("http://localhost:8080/login", {
      body: formData,
      method: "post",
    });
  }
}

