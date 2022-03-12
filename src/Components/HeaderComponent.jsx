import { Link } from "react-router-dom";
export function HeaderComponent() {
  return (
    <div className="bg-[#DE310B] px-4 h-16 text-white">
      <div className="flex justify-between items-center h-full">
        <Link to="/">
          <button>Cupido Online</button>
        </Link>
        <div className="flex gap-3 text-sm items-center">
          <Link to="/mensagem">
            <button>Mensagem</button>
          </Link>
          <Link to="/historico">
            <button>Histórico</button>
          </Link>
          <Link to="/login">
            <button>Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
