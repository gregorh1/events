import React from 'react';

const ConfirmModal = (props) => {
  return (
  <div>
    <div className="modal-overlay" id="materialize-modal-overlay-1"
      style={{
        zIndex: '1002', 
        display: 'block',
        opacity: '0.5'}}>
    </div>
    <div id="delete-confirm-modal" className="modal open"
      style={{
        zIndex: '1003', 
        display: 'block', 
        opacity: '1', 
        transform: 'scaleX(1)', 
        top: '10%'}}>
      <div className="modal-content">
        <h5>Czy na pewno chcesz usunąć to wydarzenie?</h5>
        <div className="divider"></div>
        <div className="section"></div>
        <div className="center-align">
      <button className="btn waves-effect waves-light" onClick={props.deleteCancel} style={{marginRight: '1em'}}>Anuluj</button>
          <button className="btn waves-effect waves-light red" onClick={props.deleteEvent}>Usuń</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ConfirmModal;