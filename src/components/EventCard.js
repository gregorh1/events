import React from 'react';

const EventCard = (props) => {
  return (
    <div className='col s12 m6 l4' onClick={props.clickEvent}>
      <div className='card hoverable'
        style={{
          minHeight: '350px'
        }}>
        <div className='card-image' style={{
          background: 'url(https://cdn.evbstatic.com/s3-build/perm_001/ba7ef6/django/images/discovery/default_logos/2.png)',
          backgroundSize: 'contain',
          height: '162px'
        }}>
          <img src={props.event.picture} alt={props.event.title}
            style={{
              objectFit: 'cover',
              height: '100%',
              width: '100%'
            }} />
          <span className='card-title'>
            <div className='chip'>
              {props.event.cathegory}
            </div>
          </span>
        </div>
        <div className='card-content'>
          <h5>{props.event.title}</h5>
          <p>{props.event.startDate}, {props.event.startHour}</p>
          <p><b>{props.event.localization}</b></p>
          <p><b>{props.event.organizer}</b></p>
        </div>
      </div>
    </div>
  )
}

export default EventCard;