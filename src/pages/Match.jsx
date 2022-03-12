export function Match() {
  return (
    <div class="bg-red-200 h-screen">
      <div class="bg-[#DE310B] px-4 h-16 text-white">
        <div class="flex justify-between items-center h-full">
          <button>Cupido Online</button>
          <div class="flex gap-3 text-sm items-center">
            <button>Mensagem</button>
            <button>Histórico</button>
            <button>Logout</button>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center px-10">
        <div class="h-8"></div>
        <h1 class="text-xl text-center">É um match!</h1>
        <div class="h-6"></div>
        <div class="bg-white p-8 rounded-xl">
          <label for="">Sua resposta</label>
          <textarea
            name=""
            id=""
            class="bg-gray-200 px-3 mt-2 h-32 block outline-none border w-full rounded-xl"
          ></textarea>
          <div class="h-6"></div>
          <div class="flex justify-center">
            <button class="bg-[#DE310B] py-1 px-6 rounded-lg text-white">
              Enviar
            </button>
          </div>
        </div>
      </div>

      <div class="fixed bottom-0 bg-[#DE310B] h-16 w-full"></div>
    </div>
  );
}
