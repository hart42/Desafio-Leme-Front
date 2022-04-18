import './modalAddPedido.css';
import { useState } from 'react';
import listaPedidos from '../mockado/listaDePedidos';
import useGlobal from '../../hooks/useGlobal';
import iconFechar from '../../assetes/icon-fechar.svg';

const defaultValuesForm = { produto: '', valor: '', data: '', cliente_id: '', ativo: 1, descricao: ''};

function ModalAddPedido() {
  const { setAbrirModalAddPedido, setAbrirModalFeedbackAddCliente } = useGlobal();
  const [form, setForm] = useState(defaultValuesForm);
  const [errors, setErrors] = useState([]);
  const objErrors = {};

  function handleChange(target) {
    setForm({
      ...form,
      [target.name]: target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setErrors(validarFormulario(form));

    if(Object.keys(validarFormulario(form)).length !== 0) {
      return;
    }

    const body = {
      produto: form.produto, 
      valor: form.valor, 
      data: form.data, 
      cliente_id: form.cliente_id, 
      ativo: form.ativo, 
      descricao: form.descricao
    };

    listaPedidos.push(body);

    setAbrirModalAddPedido(false);
    setAbrirModalFeedbackAddCliente(true);
    setTimeout(() => setAbrirModalFeedbackAddCliente(false), 5000);
  };

  function validarFormulario(values) {
    if (!values.produto) {
      objErrors.produto = 'Este campo deve ser preenchido';
    }

    if (!values.valor) {
      objErrors.valor = 'Este campo deve ser preenchido';
    }

    if (!values.data) {
      objErrors.data = 'Este campo deve ser preenchido';
    }

    if (!values.cliente_id) {
      objErrors.cliente_id = 'Este campo deve ser preenchido';
    }

    if (!values.descricao) {
      objErrors.descricao = 'Este campo deve ser preenchido';
    }

    return objErrors;
  };

  return (
    <main className='backdrop-modalAddCliente'>
      <div className="container-modalAddCliente">
        <div className="titulo-modalAddCliente">
          <p>Cadastrar Pedido</p>
          <img src={iconFechar}alt="Fechar"
            className='btn-fechar-modalAddCliente'
            onClick={() => setAbrirModalAddPedido(false)}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="label-modalAddCliente">
            <label htmlFor="produto">Produto</label>
            <input type="text" name='produto' placeholder='Digite o produto'
              value={form.produto}
              onChange={(e) => handleChange(e.target)}
              onBlur={(e) => !e.target.value ? setErrors({ ...errors, produto: 'Este campo deve ser preenchido' }) 
                : setErrors({ ...errors, produto: false})}
            />
            {errors.produto && <span className='erro-form'>{errors.produto}</span>}
          </div>

          <div className="label-modalAddCliente">
            <label htmlFor="valor">valor</label>
            <input type="text" name='valor' placeholder='Digite o valor'
              value={form.valor}
              onChange={(e) => handleChange(e.target)}
              onBlur={(e) => !e.target.value ? setErrors({ ...errors, valor: 'Este campo deve ser preenchido' }) 
                : setErrors({ ...errors, valor: false})}
            />
            {errors.valor && <span className='erro-form'>{errors.valor}</span>}
          </div>

          <div className="label-modalAddCliente">
            <label htmlFor="data">data</label>
            <input type="text" name='data' placeholder='Digite o data'
              value={form.data}
              onChange={(e) => handleChange(e.target)}
            />
            {errors.data && <span className='erro-form'>{errors.data}</span>}
          </div>

          <div className="label-modalAddCliente">
            <label htmlFor="cliente_id">Cliente ID</label>
            <input type="text" name='cliente_id' placeholder='Digite o id do cliente'
              value={form.cliente_id}
              onChange={(e) => handleChange(e.target)}
              onBlur={(e) => !e.target.value ? setErrors({ ...errors, cliente_id: 'Este campo deve ser preenchido' }) 
                : setErrors({ ...errors, cliente_id: false})}
            />
            {errors.cliente_id && <span className='erro-form'>{errors.cliente_id}</span>}
          </div>

          <div className="label-modalAddCliente">
            <label htmlFor="descricao">Descrição</label>
            <input type="text" name='descricao' placeholder='Digite a descrição do produto'
              value={form.descricao}
              onChange={(e) => handleChange(e.target)}
              onBlur={(e) => !e.target.value ? setErrors({ ...errors, descricao: 'Este campo deve ser preenchido' }) 
                : setErrors({ ...errors, descricao: false})}
            />
            {errors.descricao && <span className='erro-form'>{errors.descricao}</span>}
          </div>

          <div>
            <button onClick={() => setAbrirModalAddPedido(false)}
              className='btn-cancelar-modalAddCliente'
            >Cancelar</button>
            <button 
              disabled={errors.nome || errors.cliente_id || errors.valor || errors.descricao || errors.data} className='btn-aplicar-modalAddCliente'
            >Aplicar</button>
          </div>
        </form>
      </div>
  </main>
  );
};

export default ModalAddPedido;