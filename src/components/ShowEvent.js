import React from 'react';
import { Icon } from 'react-materialize'

const ShowEvent = (props) => {
  return (
    <div style={{ margin: '11px' }}>
      <div
        id='delete-confirm-modal'
        className='modal'>
        <div className='modal-content'>
          <h5>Czy na pewno chcesz usunąć to wydarzenie?</h5>
          <div className='divider'></div>
          <div className='section'></div>
          <div className='center-align'>
            <button style={{ marginRight: '1em' }} className='btn waves-effect waves-light' onClick={props.deleteCancel}>Anuluj</button>
            <button className='btn waves-effect waves-light red' onClick={props.deleteEvent.bind(this, props.event.id)}>Usuń</button>
          </div>
        </div>
      </div>

      <div className='card'>
        <div className='card-action left-align'>
          <button className='btn waves-effect waves-light' onClick={props.clickGoBack}><Icon>arrow_back</Icon></button>
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
                src={props.event.picture} alt='' />
            </div>
          </div>
          <p className='flow-text'>{props.event.description}</p>
        </div>
        <div className='card-action'>
          <div className='center-align'>
            <button style={{ marginRight: '1em' }} className='btn waves-effect waves-light' onClick={props.editEvent.bind(this, props.event)}>Edytuj</button>
            <button className='btn waves-effect waves-light' onClick={props.deleteConfirm}>Usuń</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowEvent;