import { Link } from "react-router-dom";
export function HeaderComponent2() {
  return (
    <div className="bg-[#DE310B] px-4 h-16 text-white">
      <div className="flex justify-between items-center h-full">
        <Link to="/">
          <button>Cupido Online</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
