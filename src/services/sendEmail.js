export async function sendEmail(email, subject, text) {
  const response = await fetch(
    "https://daa83dobnc.execute-api.us-east-1.amazonaws.com/dev",
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
