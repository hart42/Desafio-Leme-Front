import React from "react";
import useGlobal from "../../hooks/useGlobal";
import './modalFeedbackClientes.css';
import iconFechar from '../../assetes/icon-fechar.svg';
import iconSucesso from '../../assetes/icon-sucesso.svg';

export default function ModalFeedbackClients(props) {
  const { setAbrirModalFeedbackAddCliente } = useGlobal();

  return (
      <div className={props.class}>
          <div className='modal-feedback-clientes'>
              <img src={iconSucesso} alt="Sucesso" className='icon-sucesso-feedback-clientes' />
              <p>
                  {props.texto}
              </p>
              <img src={iconFechar} alt="Fechar" className='icon-fechar-feedback-clientes' onClick={() => setAbrirModalFeedbackAddCliente(false)} />
          </div>
      </div>
  )

}
