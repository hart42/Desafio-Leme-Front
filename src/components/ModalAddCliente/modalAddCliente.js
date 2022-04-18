import { useState } from 'react';
import './modalAddCliente.css';
import listaClientes from '../mockado/listaDeClientes';
import useGlobal from '../../hooks/useGlobal';
import iconFechar from '../../assetes/icon-fechar.svg';

const defaultValuesForm = { nome: '', cpf: '', data_nasc: '', telefone: '', ativo: 1}

function ModalAddCliente() {
  const { setAbrirModalAddCliente, setAbrirModalFeedbackAddCliente } = useGlobal();
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
      nome: form.nome,
      cpf: form.cpf,
      data_nasc: form.data_nasc,
      telefone: form.telefone,
      ativo: form.ativo
    };

    listaClientes.push(body);

    setAbrirModalAddCliente(false);
    setAbrirModalFeedbackAddCliente(true);
    setTimeout(() => setAbrirModalFeedbackAddCliente(false), 5000);
  };

  function validarFormulario(values) {
    if (!values.nome) {
      objErrors.nome = 'Este campo deve ser preenchido';
    }

    if (!values.cpf) {
      objErrors.cpf = 'Este campo deve ser preenchido';
    }

    if (values.cpf.length !== 11 && values.cpf.length > 0) {
      objErrors.cpfValido = 'CPF inválido';
    }

    if (!values.data_nasc) {
      objErrors.data_nasc = 'Este campo deve ser preenchido';
    }

    if (values.telefone.length <= 10 && values.telefone.length > 0) {
      objErrors.telefone = 'Telefone inválido';
    }

    return objErrors;
  };

  return (
    <main className='backdrop-modalAddCliente'>
      <div className="container-modalAddCliente">
        <div className="titulo-modalAddCliente">
          <p>Cadastrar Cliente</p>
          <img src={iconFechar}alt="Fechar"
            className='btn-fechar-modalAddCliente'
            onClick={() => setAbrirModalAddCliente(false)}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="label-modalAddCliente">
            <label htmlFor="nome">Nome</label>
            <input type="text" name='nome' placeholder='Digite o nome'
              value={form.nome}
              onChange={(e) => handleChange(e.target)}
              onBlur={(e) => !e.target.value ? setErrors({ ...errors, nome: 'Este campo deve ser preenchido' }) 
                : setErrors({ ...errors, nome: false})}
            />
            {errors.nome && <span className='erro-form'>{errors.nome}</span>}
          </div>

          <div className="label-modalAddCliente">
            <label htmlFor="cpf">CPF</label>
            <input type="text" name='cpf' placeholder='Digite o CPF'
              value={form.cpf}
              onChange={(e) => handleChange(e.target)}
              onBlur={(e) => !e.target.value ? setErrors({ ...errors, cpf: 'Este campo deve ser preenchido' }) 
                : setErrors({ ...errors, cpf: false})}
            />
            {errors.cpf && <span className='erro-form'>{errors.cpf}</span>}
          </div>

          <div className="label-modalAddCliente">
            <label htmlFor="telefone">Telefone</label>
            <input type="text" name='telefone' placeholder='Digite o telefone'
              value={form.telefone}
              onChange={(e) => handleChange(e.target)}
            />
            {errors.telefone && <span className='erro-form'>{errors.telefone}</span>}
          </div>

          <div className="label-modalAddCliente">
            <label htmlFor="data_nasc">Data de Nacimento</label>
            <input type="text" name='data_nasc' placeholder='Digite a data de nascimento'
              value={form.data_nasc}
              onChange={(e) => handleChange(e.target)}
              onBlur={(e) => !e.target.value ? setErrors({ ...errors, data_nasc: 'Este campo deve ser preenchido' }) 
                : setErrors({ ...errors, data_nasc: false})}
            />
            {errors.data_nasc && <span className='erro-form'>{errors.data_nasc}</span>}
          </div>

          <div>
            <button onClick={() => setAbrirModalAddCliente(false)}
              className='btn-cancelar-modalAddCliente'
            >Cancelar</button>
            <button 
              disabled={errors.nome || errors.data_nasc || errors.cpf || errors.telefone} className='btn-aplicar-modalAddCliente'
            >Aplicar</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ModalAddCliente;