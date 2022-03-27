import { Auth } from "aws-amplify";
export async function sendEmail(email, subject, text) {
  const user = await Auth.currentUserInfo();
  console.log("USER:", user);
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
        userName: user.username,
      }),
    }
  );
  //   .then((responseFetch) => {
  //   if (responseFetch.ok) {
  //     console.log(responseFetch.body);
  //     return "sucessed";
  //   }
  //   console.log(responseFetch);
  //   return "failed";
  // });
  const responseJson = await response.json();

  await fetch(
    "https://qqqlarfevc.execute-api.us-east-1.amazonaws.com/dev/received",
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
        userName: user.username,
        messageId: responseJson,
      }),
    }
  ).then((response) => {
    if (response.ok) {
      console.log("FETCH OK");
    }
    if (!response.ok) {
      console.log("FETCH FAILED");
    }
  });
  if (responseJson) {
    return "sucessed";
  } else {
    return "failed";
  }
}
