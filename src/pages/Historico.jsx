import { HeaderComponent } from "../Components/HeaderComponent";

export function Historico() {
  return (
    <div className="bg-red-200 h-screen">
      <HeaderComponent />
      <div className="h-8"></div>
      <h1 className="text-xl text-center">Histórico</h1>
      <div className="h-6"></div>
      <div className="flex justify-center gap-6">
        <h1 className="border-b-2 border-b-red-500 pb-2">Recebidas</h1>
        <h1 className="border-b border-b-gray-500 pb-2 text-gray-600">
          Enviadas
        </h1>
      </div>
      <div className="h-6"></div>
      <div className="flex justify-center gap-2 px-8">
        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
          <p className="w-10 text-center">1</p>
        </div>
        <div className="bg-white w-full truncate rounded-xl p-2">
          <p className="text-sm">
            Olá, eu sempre gostei muito de você. Você é uma pessoa incrível !!!
            Saiba que eu te admiro demais, talvez um dia a gente fique juntos, e
            curta muitos momentos legais, mas por enquanto, você ainda não sabe
            ao certo quem te enviou esse email haha
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 bg-[#DE310B] h-16 w-full"></div>
    </div>
  );
}
