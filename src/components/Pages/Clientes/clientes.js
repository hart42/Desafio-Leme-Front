import './cliente.css';
import Navbar from '../../Navbar';
import TabelaClientes from '../../TabelaClientes/tabelaClientes';
import { Button } from '@mui/material';
import useGlobal from '../../../hooks/useGlobal';
import ModalAddCliente from '../../ModalAddCliente/modalAddCliente';
import ModalFeedbackClients from '../../ModalFeedbackClients/modalFeedbackClientes';

function Clientes() {
  const { abrirModalAddCliente, setAbrirModalAddCliente, abrirModalFeedbackAddCliente } = useGlobal();

  return (
    <main>
      <Navbar />
      <div className='conteudo'>
        <Button className='botao-adicionar-cliente'
          onClick={() => setAbrirModalAddCliente(true)}        
        > + Adicionar Cliente</Button>
        <TabelaClientes />

        {abrirModalAddCliente && <ModalAddCliente />}
        {abrirModalFeedbackAddCliente === true && <ModalFeedbackClients class='visible-modal-feedback-addclientes' texto='Operação concluída com sucesso' />}
      </div> 
    </main>
  );
};

export default Clientes;