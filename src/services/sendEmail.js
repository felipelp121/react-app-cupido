import { Auth } from "aws-amplify";
export async function sendEmail(email, subject, text) {
  const user = await Auth.currentUserInfo();
  // console.log("USER:", user.username);
  const response = await fetch(
    "https://z7x57qrr32.execute-api.us-east-1.amazonaws.com/dev/send",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: subject,
        email: email,
        text: text,
        userEmail: user.attributes.email,
        userName: user.attributes.username,
      }),
    }
  ).then((response) => {
    if (response.ok) {
      return "sucessed";
    }
    return "failed";
  });

  return response;
}
