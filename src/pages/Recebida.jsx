export function Recebida() {
  return (
    <div className="bg-[#9E9E9ECC]">
      <div className="h-screen flex justify-center items-center px-8">
        <div className="bg-white rounded-md">
          <div className="flex justify-end px-2 pt-2">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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

          <div className="px-8">
            <div className="h-2"></div>
            <h1 className="text-2xl">Mensagem recebida:</h1>
            <div className="h-4"></div>
            <p className="text-sm leading-6">
              Olá, eu sempre gostei muito de você. Você é uma pessoa incrível
              !!! Saiba que eu te admiro demais, talvez um dia a gente fique
              juntos, e curta muitos momentos legais, mas por enquanto, você
              ainda não sabe ao certo quem te enviou esse email haha
            </p>
            <div className="h-4"></div>

            <div className="flex justify-end">
              <button className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                  />
                </svg>
                <p className="text-base">Responder</p>
              </button>
            </div>
            <div className="h-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
