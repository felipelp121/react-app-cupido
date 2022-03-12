export function EnviarMensagem() {


  async function sendEmail(name, email, text) {
    const response = await fetch('https://jxd51ggb23.execute-api.us-east-1.amazonaws.com/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject: name, email: email, text: text })
    });
    const json = await response.json();
    console.log("JSON: ", json);
    console.log("RESPONSE: ", response);
  }

  function sendForm(event) {
    event.preventDefault();
    sendEmail(event.target.name.value, event.target.email.value, event.target.text.value);
    console.log("event.target", event.target.name.value ,event.target.email.value, event.target.text.value);
  }



  return (

    <div className="bg-red-200 h-screen">
      <div className="bg-[#DE310B] px-4 h-16 text-white">
        <div className="flex justify-between items-center h-full">
          <button>Cupido Online</button>
          <div className="flex gap-3 text-sm items-center">
            <button>Mensagem</button>
            <button>Histórico</button>
            <button>Logout</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center px-10">

        <div className="h-8"></div>
        <h1 className="text-xl text-center">Envie mensagens anonimamente</h1>
        <div className="h-6"></div>

        <form className="bg-white p-8 rounded-xl" onSubmit={sendForm} method="post">

          <label htmlFor ="name">Nome</label>
          <input
            type="text"
            className="bg-gray-200 px-3 my-2 h-8 block outline-none border w-full rounded-xl" name="name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="bg-gray-200 px-3 my-2 h-8 block outline-none border w-full rounded-xl" name="email"
          />

          <label htmlFor="text">Texto</label>
          <textarea
            name="text"
            className="bg-gray-200 px-3 mt-2 h-32 block outline-none border w-full rounded-xl"
          ></textarea>

          <div className="h-6"></div>
          <div className="flex justify-center">
            <button className="bg-[#DE310B] py-1 px-6 rounded-lg text-white" type="submit">
              Enviar
            </button>
          </div>
        </form>

      </div>

      <div className="fixed bottom-0 bg-[#DE310B] h-16 w-full"></div>
    </div>
  );
}
