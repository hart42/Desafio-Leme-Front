import './tabelaClientes.css';
import listaClientes from '../mockado/listaDeClientes';
import iconEditar from '../../assetes/icon-editar.svg';
import useGlobal from '../../hooks/useGlobal';
import ModalEditCliente from '../ModalEditCliente/modalEditCliente';

function TabelaClientes() {
  const dados = listaClientes;
  const { setAbrirModalEditCliente, abrirModalEditCliente, setClienteSelecionado } = useGlobal();

  return (
    <section className="tabela-clientes">
      <div className="cabecalho-tabela-clientes">
        <p>Clientes</p>
        <p>CPF</p>
        <p>Data de Nacimento</p>
        <p>Telefone</p>
        <p>Status</p>
        <p>Editar</p>
      </div>

      {dados.map((cliente) => {
        return (
          <div className="linhas-tabela-clientes" key={cliente.id}>
            <p>{cliente.nome}</p>
            <p>{cliente.cpf}</p>
            <p>{cliente.data_nasc}</p>
            <p>{cliente.telefone}</p>
            <p><span className={cliente.ativo === 1 ? "cliente-ativo" : "cliente-desativado"}>{cliente.ativo === 1 ? "Ativo" : "Desativado"}</span></p>
            <p><img src={iconEditar} alt="Editar" onClick={() => {
              setClienteSelecionado({
                id: cliente.id,
                nome: cliente.nome,
                cpf: cliente.cpf,
                telefone: cliente.telefone,
                data_nasc: cliente.data_nasc,
                ativo: cliente.ativo
              });
              setAbrirModalEditCliente(true);
            }} /></p>
          </div>
        )
      })}

      {abrirModalEditCliente && <ModalEditCliente />}
    </section>
  );
};

export default TabelaClientes;