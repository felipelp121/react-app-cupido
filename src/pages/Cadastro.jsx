export function Cadastro() {
  return (
    <div class="bg-red-200 h-screen">
      <div class="bg-[#DE310B] px-4 h-16 text-white">
        <div class="flex justify-between items-center h-full">
          <button>Cupido Online</button>
          <button>Login</button>
        </div>
      </div>

      <div class="flex flex-col justify-center px-10">
        <div class="h-8"></div>
        <h1 class="text-2xl text-center">Cadastre-se agora mesmo</h1>
        <div class="h-6"></div>
        <div class="bg-white p-8 rounded-xl">
          <label for="">Nome Completo</label>
          <input
            type="text"
            class="bg-gray-200 px-3 my-1 h-8 block outline-none border w-full rounded-xl"
          />
          <label for="">Email</label>
          <input
            type="text"
            class="bg-gray-200 px-3 my-1 h-8 block outline-none border w-full rounded-xl"
          />
          <label for="">Senha</label>
          <input
            type="text"
            class="bg-gray-200 px-3 my-1 h-8 block outline-none border w-full rounded-xl"
          />
          <label for="">Confirmar Senha</label>
          <input
            type="text"
            class="bg-gray-200 px-3 mt-2 h-8 block outline-none border w-full rounded-xl"
          />
          <div class="h-6"></div>
          <div class="flex justify-center">
            <button class="bg-[#DE310B] py-1 px-6 rounded-lg text-white">
              Cadastrar
            </button>
          </div>
        </div>
        <div class="h-4"></div>
        <p class="text-center text-base">
          Já possue cadastro? <a href="/src/login.html"> Faça Login</a>
        </p>
      </div>

      <div class="fixed bottom-0 bg-[#DE310B] h-16 w-full"></div>
    </div>
  );
}
