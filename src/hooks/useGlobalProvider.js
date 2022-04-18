import { useState } from 'react';

function useGlobalProvider() {
  const [abrirModalAddCliente, setAbrirModalAddCliente] = useState(false);
  const [abrirModalFeedbackAddCliente, setAbrirModalFeedbackAddCliente] = useState(false);
  const [abrirModalEditCliente, setAbrirModalEditCliente] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState();
  const [abrirModalAddPedido, setAbrirModalAddPedido] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] = useState();
  const [abrirModalEditPedido, setAbrirModalEditPedido] = useState(false);


  return {
    abrirModalAddCliente, 
    setAbrirModalAddCliente,
    abrirModalFeedbackAddCliente,
    setAbrirModalFeedbackAddCliente,
    abrirModalEditCliente,
    setAbrirModalEditCliente,
    clienteSelecionado,
    setClienteSelecionado,
    abrirModalAddPedido, 
    setAbrirModalAddPedido,
    pedidoSelecionado, 
    setPedidoSelecionado,
    abrirModalEditPedido, 
    setAbrirModalEditPedido
  };
}

export default useGlobalProvider;