import React from 'react';
import ConfirmModal from './ConfirmModal'
import ModalByPortal from './ModalByPortal'


const ShowEvent = (props) => {
  const modal = props.modalShow ? (
    <ModalByPortal>
      <ConfirmModal deleteCancel={props.deleteCancel} deleteEvent={props.deleteEvent.bind(this, props.event.id)} />
    </ModalByPortal>
  ) : null
  return (
    <div id='show-event' style={{ margin: '11px' }}>
      {modal}
      <div className='card'>
        <div className='card-action left-align'>
          <button className='btn waves-effect waves-light' onClick={props.clickGoBack}><span style={{lineHeight: 'unset'}} className='material-icons'>arrow_back</span></button>
        </div>
        <div className='card-content'>
          <div className='row'>
            <div className='col s12 m7 l7'>
              <h4>{props.event.title}</h4>
              <h5>{props.event.organizer}</h5>
              <h6>{props.event.startDate} {props.event.startHour} - {props.event.endDate} {props.event.endHour}</h6>
              <h5>{props.event.localization}</h5>
            </div>
            <div className='col s12 m5 l5 center-align'>
              <img style={{ maxWidth: '100%', width: 'auto' }}
                src={props.event.picture} alt={props.event.title} />
            </div>
          </div>
          <p className='flow-text'>{props.event.description}</p>
        </div>
        <div className='card-action'>
          <div className='center-align'>
            <button style={{ marginRight: '1em' }} className='btn waves-effect waves-light' onClick={props.editEvent.bind(this, props.event)}>Edytuj</button>
            <button className='btn waves-effect waves-light' onClick={props.deleteConfirmOpen}>Usuń</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowEvent;