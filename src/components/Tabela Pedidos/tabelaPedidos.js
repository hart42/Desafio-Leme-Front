import listaPedidos from "../mockado/listaDePedidos";
import iconEditar from '../../assetes/icon-editar.svg';
import useGlobal from '../../hooks/useGlobal';
import './tabelaPedidos.css';
import ModalEditPedido from "../ModalEditPedido/modalEditPedido";

function TabelaPedidos(){
  const dados = listaPedidos;
  const { abrirModalEditPedido, setAbrirModalEditPedido, setPedidoSelecionado } = useGlobal();
  
  return (
    <section className="tabela-pedidos">
    <div className="cabecalho-tabela-pedidos">
      <p>Produto</p>
      <p>Valor</p>
      <p>Data</p>
      <p>Cliente ID</p>
      <p>Status</p>
      <p>Descrição</p>
      <p>Editar</p>
    </div>

    {dados.map((pedido) => {
      return (
        <div className="linhas-tabela-pedidos" key={pedido.id}>
          <p>{pedido.produto}</p>
          <p>{pedido.valor}</p>
          <p>{pedido.data}</p>
          <p>{pedido.cliente_id}</p>
          <p><span className={pedido.ativo === 1 ? "pedido-ativo" : "pedido-desativado"}>{pedido.ativo === 1 ? "Ativo" : "Desativado"}</span></p>
          <p>{pedido.descricao}</p>
          <p><img src={iconEditar} alt="Editar" onClick={() => {
            setPedidoSelecionado({
              id: pedido.id,
              produto: pedido.produto,
              valor: pedido.valor,
              data: pedido.data,
              cliente_id: pedido.cliente_id,
              ativo: pedido.ativo,
              descricao: pedido.descricao
            });
            setAbrirModalEditPedido(true);
          }} /></p>
        </div>
      )
    })}

    {abrirModalEditPedido && <ModalEditPedido />}
  </section> 
  );
};

export default TabelaPedidos;