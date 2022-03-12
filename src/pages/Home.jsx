export function Home() {
  return (
    <div class="bg-red-200 h-screen">
      <div class="bg-[#DE310B] px-4 h-16 text-white">
        <div class="flex justify-between items-center h-full">
          <button>Cupido Online</button>
          <button>Login</button>
        </div>
      </div>

      <div class="bg-cover bg-[url('https://ichi.pro/assets/images/max/724/0*08iHaB3cwOzLdglY')]">
        <div class="flex items-center h-60 px-4">
          <h1 class="text-white text-2xl leading-7 w-56">
            Envie mensagens anônimas para aquela pessoa especial
          </h1>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="h-8"></div>
        <h1 class="text-2xl">Cadastre-se agora mesmo</h1>
        <div class="h-6"></div>
        <button class="bg-[#DE310B] py-1 px-6 rounded-lg text-white">
          Cadastrar
        </button>
        <div class="h-6"></div>
        <h1 class="text-2xl text-center w-72">
          Não perca mais tempo e conquiste logo o seu grande amor
        </h1>
      </div>

      <div class="fixed bottom-0 bg-[#DE310B] h-16 w-full"></div>
    </div>
  );
}
