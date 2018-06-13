import React from 'react';
import Input from 'react-materialize/lib/Input';

const AddModal = (props) => {
  let hours = [];
  for (let i = 0; i <= 23; i++) {
    hours.push(<option value={i + ':00'} key={i}>{i}:00</option>)
    hours.push(<option value={i + ':30'} key={i + 0.5}>{i}:30</option>)
  }

  return (
    <div>
      <div
        id='add-event-modal'
        className='modal'>
        <div className='modal-content'>
          <h5 id='modal-add-edit-title' className='center-align'> </h5>
          <form onSubmit={props.saveEvent} className='row' >
            <Input name='title' s={6} label='Tytuł' placeholder=' ' onChange={props.handleChange} value={props.addEvent.title} />
            <Input name='organizer' s={6} label='Organizator' placeholder=' ' onChange={props.handleChange} value={props.addEvent.organizer} />
            <Input name='localization' s={6} label='Miejsce' placeholder=' ' onChange={props.handleChange} value={props.addEvent.localization} />
            <Input name='cathegory' s={6} type='select' label='Kategoria' placeholder=' ' onChange={props.handleChange} value={props.addEvent.cathegory} >
              <option value='Impreza'>Impreza</option>
              <option value='Konferencja'>Konferencja</option>
              <option value='Wernisaż'>Wernisaż</option>
              <option value='Koncert'>Koncert</option>
              <option value='Gra'>Gra</option>
            </Input>
            <Input name='startDate' s={4} label='Początek' placeholder='Wybierz datę' type='date' className='datepicker'
              onChange={props.handleChange} value={props.addEvent.startDate} />
            <Input name='startHour' s={2} label='' placeholder=' ' type='select' className=''
              onChange={props.handleChange} value={props.addEvent.startHour} >
              {hours}
            </Input>
            <Input name='endDate' s={4} label='Koniec' placeholder='Wybierz datę' type='date' className='datepicker'
              onChange={props.handleChange} value={props.addEvent.endDate} />
            <Input name='endHour' s={2} label='' placeholder=' ' type='select' className=''
              onChange={props.handleChange} value={props.addEvent.endHour} >
              {hours}
            </Input>
            <Input name='picture' s={12} list='links' label='Zdjęcie wydarzenia (link)' placeholder='Wklej link do zdjęcia lub wybierz jeden z listy... ' onChange={props.handleChange} value={props.addEvent.picture} />
            <datalist id='links'>
              <option>http://wp.sypcom.es/wp-content/uploads/2016/04/photodune-8522811-speaker-at-business-conference-and-presentation-m.jpg</option>
              <option>http://aqualandmarina.com/wp-content/uploads/sites/34/2018/05/event.jpg</option>
              <option>https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=yjC-dXXH</option>
              <option>http://ourpolitics.net/wp-content/uploads/2017/12/events.jpg</option>
              <option>http://www.amandaeventz.com/wp-content/uploads/2016/12/special-events-milano-cover.jpg</option>
            </datalist>
            <Input name='description' s={12} label='Opis' placeholder=' ' type='textarea' onChange={props.handleChange} value={props.addEvent.description} />
            <div className='right-align' >
              <button type='button' style={{ marginRight: '1em' }} className='btn waves-effect waves-light' onClick={props.cancel.bind(this)}>Anuluj</button>
              <button type='submit' className='btn waves-effect waves-light' >Zapisz</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddModal;