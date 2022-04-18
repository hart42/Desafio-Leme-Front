import './home.css';
import Navbar from '../../Navbar';

function Home() {
  return (
    <main>
      <Navbar />
      <div className='conteudo'>
        <p>
          Bem vindo ao Leme Servece, aqui voce consegue cadatrar clientes e pedidos e acompanhar e editar seus dados!

          Faça bom proveito!
        </p>
      </div> 
    </main>
  );
};

export default Home;