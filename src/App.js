import "./App.css";
import {
  Match,
  Cadastro,
  Login,
  Recebida,
  Enviada,
  Home,
  Historico,
  EnviarMensagem,
} from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/mensagem" element={<EnviarMensagem />} />
        <Route path="/match" element={<Match />} />
        <Route path="/logup" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
