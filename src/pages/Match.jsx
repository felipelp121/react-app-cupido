export function Match() {
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
        <h1 className="text-xl text-center">É um match!</h1>
        <div className="h-6"></div>
        <div className="bg-white p-8 rounded-xl">
          <label for="">Sua resposta</label>
          <textarea
            name=""
            id=""
            className="bg-gray-200 px-3 mt-2 h-32 block outline-none border w-full rounded-xl"
          ></textarea>
          <div className="h-6"></div>
          <div className="flex justify-center">
            <button className="bg-[#DE310B] py-1 px-6 rounded-lg text-white">
              Enviar
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 bg-[#DE310B] h-16 w-full"></div>
    </div>
  );
}
