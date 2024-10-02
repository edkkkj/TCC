import React from 'react';
import '../layout/ConfirmacaoSair.modules.css';

function ConfirmacaoSair({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Tem certeza que deseja sair?</h2>
        <div className="button-group">
          <button className="confirm-button" onClick={onConfirm}>Sim</button>
          <button onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmacaoSair;
