import './App.css';
import Home from './components/Pages/Home/home';
import Clientes from './components/Pages/Clientes/clientes';
import { GlobalProvider } from './context/GlobalContext';
import Pedidos from './components/Pages/Pedidos/pedidos';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/pedidos' element={<Pedidos />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
