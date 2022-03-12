import { HeaderComponent2 } from "../Components/HeaderComponent2";

export function Cadastro() {
  return (
    <div className="bg-red-200 h-screen">
      <HeaderComponent2 />
      <div className="flex flex-col justify-center px-10">
        <div className="h-8"></div>
        <h1 className="text-2xl text-center">Cadastre-se agora mesmo</h1>
        <div className="h-6"></div>
        <div className="bg-white p-8 rounded-xl">
          <label htmlFor="">Nome Completo</label>
          <input
            type="text"
            className="bg-gray-200 px-3 my-1 h-8 block outline-none border w-full rounded-xl"
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="bg-gray-200 px-3 my-1 h-8 block outline-none border w-full rounded-xl"
          />
          <label htmlFor="">Senha</label>
          <input
            type="text"
            className="bg-gray-200 px-3 my-1 h-8 block outline-none border w-full rounded-xl"
          />
          <label htmlFor="">Confirmar Senha</label>
          <input
            type="text"
            className="bg-gray-200 px-3 mt-2 h-8 block outline-none border w-full rounded-xl"
          />
          <div className="h-6"></div>
          <div className="flex justify-center">
            <button className="bg-[#DE310B] py-1 px-6 rounded-lg text-white">
              Cadastrar
            </button>
          </div>
        </div>
        <div className="h-4"></div>
        <p className="text-center text-base">
          Já possue cadastro? <a href="/src/login.html"> Faça Login</a>
        </p>
      </div>
      <div className="fixed bottom-0 bg-[#DE310B] h-16 w-full"></div>
    </div>
  );
}
