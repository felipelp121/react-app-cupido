export function Historico() {
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

      <div class="h-8"></div>
      <h1 class="text-xl text-center">Histórico</h1>
      <div class="h-6"></div>

      <div class="flex justify-center gap-6">
        <h1 class="border-b-2 border-b-red-500 pb-2">Recebidas</h1>
        <h1 class="border-b border-b-gray-500 pb-2 text-gray-600">Enviadas</h1>
      </div>
      <div class="h-6"></div>

      <div class="flex justify-center gap-2 px-8">
        <div class="h-10 w-10 rounded-full bg-white flex items-center justify-center">
          <p class="w-10 text-center">1</p>
        </div>
        <div class="bg-white w-full truncate rounded-xl p-2">
          <p class="text-sm">
            Olá, eu sempre gostei muito de você. Você é uma pessoa incrível !!!
            Saiba que eu te admiro demais, talvez um dia a gente fique juntos, e
            curta muitos momentos legais, mas por enquanto, você ainda não sabe
            ao certo quem te enviou esse email haha
          </p>
        </div>
      </div>

      <div class="fixed bottom-0 bg-[#DE310B] h-16 w-full"></div>
    </div>
  );
}
