export function Enviada() {
  return (
    <div class="bg-[#9E9E9ECC]">
      <div class="h-screen flex justify-center items-center px-8">
        <div class="bg-white rounded-md">
          <div class="flex justify-end px-2 pt-2">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="px-8">
            <div class="h-2"></div>
            <h1 class="text-2xl">Mensagem enviada:</h1>
            <div class="h-4"></div>
            <p class="text-sm leading-6">
              Olá, eu sempre gostei muito de você. Você é uma pessoa incrível
              !!! Saiba que eu te admiro demais, talvez um dia a gente fique
              juntos, e curta muitos momentos legais, mas por enquanto, você
              ainda não sabe ao certo quem te enviou esse email haha
            </p>
            <div class="h-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
