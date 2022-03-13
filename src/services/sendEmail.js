export async function sendEmail(email, subject, text) {
  const response = await fetch(
    "https://613hrltlv6.execute-api.us-east-1.amazonaws.com/dev/send",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject: subject, email: email, text: text }),
    }
  ).then((response) => {
    if (response.ok) {
      return "sucessed";
    }
    return "failed";
  });

  return response;
}
