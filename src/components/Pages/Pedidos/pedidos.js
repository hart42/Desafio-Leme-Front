import './pedidos.css';
import useGlobal from '../../../hooks/useGlobal';
import { Button } from '@mui/material';
import ModalFeedbackClients from '../../ModalFeedbackClients/modalFeedbackClientes';
import TabelaPedidos from '../../Tabela Pedidos/tabelaPedidos';
import Navbar from '../../Navbar';
import ModalAddPedido from '../../ModalAddPedido/modalAddPedido';


function Pedidos() {
  const { abrirModalAddPedido, setAbrirModalAddPedido, abrirModalFeedbackAddCliente } = useGlobal();

  return (
    <main>
      <Navbar />
      <div className='conteudo'>
        <Button className='botao-adicionar-cliente'
          onClick={() => setAbrirModalAddPedido(true)}        
        > + Adicionar Pedido</Button>
        <TabelaPedidos />

        {abrirModalAddPedido && <ModalAddPedido />}
        {abrirModalFeedbackAddCliente === true && <ModalFeedbackClients class='visible-modal-feedback-addclientes' texto='Operação concluída com sucesso' />}
      </div> 
    </main>
  );
};

export default Pedidos;