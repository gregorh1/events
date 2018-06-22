import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, { formatDate, parseDate, } from 'react-day-picker/moment';
import 'moment/locale/pl';


const AddEvent = (props) => {
  const hours = [];
  for (let i = 0; i <= 23; i++) {
    hours.push(<option value={i + ':00'} key={i}>{i}:00</option>)
    hours.push(<option value={i + ':30'} key={i + 0.5}>{i}:30</option>)
  }

  return (
    <div className='container '>
      <div className='card-panel'>
        <div className=''>
          <h5 id='modal-add-edit-title' className='center-align'>{props.formName}</h5>
          <form onSubmit={props.saveEvent} className='row' >
            <div className="input-field col s6">
              <input name='title' placeholder='' id="title-f" onChange={props.handleChange} value={props.addEvent.title} />
              <label htmlFor="title-f" className='active'>Tytuł</label>
            </div>
            <div className="input-field col s6">
              <input name='organizer' placeholder='' id="organizer-f" onChange={props.handleChange} value={props.addEvent.organizer} />
              <label htmlFor="organizer-f" className='active'>Organizator</label>
            </div>
            <div className="input-field col s6">
              <input name='localization' placeholder='' id="localization-f" onChange={props.handleChange} value={props.addEvent.localization} />
              <label htmlFor="localization-f" className='active'>Miejsce</label>
            </div>
            <div className="input-field col s6">
              <select name='cathegory' id="cathegory-f" defaultValue='d' onChange={props.handleChange} value={props.addEvent.cathegory}>
                <option value='d' disabled >Wybierz Kategorie</option>
                <option value='Impreza'>Impreza</option>
                <option value='Konferencja'>Konferencja</option>
                <option value='Wernisaż'>Wernisaż</option>
                <option value='Koncert'>Koncert</option>
                <option value='Gra'>Gra</option>
              </select>
              <label htmlFor="cathegory-f" className=''>Kategoria</label>
            </div>
            <div className="input-field col s4">
              <DayPickerInput name='startDate' id="startDate-f" placeholder='Wybierz datę' value={props.addEvent.startDate}
                formatDate={formatDate} parseDate={parseDate} format='LL'
                dayPickerProps={{ localeUtils: MomentLocaleUtils, locale: 'pl', disabledDays:[{ before: new Date() }] }}
                onDayChange={day => props.handleChange({ target: { name: 'startDate', value: Date.parse(day) } })} />
              <label htmlFor="startDate-f" className='active'>Początek</label>
            </div>
            <div className="input-field col s2">
              <select name='startHour' id="startHour-f" onChange={props.handleChange} value={props.addEvent.startHour}>
                {hours}
              </select>
              <label htmlFor="startHour-f" className=''></label>
            </div>
            <div className="input-field col s4">
              <DayPickerInput name='endDate' id="endDate-f" placeholder='Wybierz datę' style={{ zIndex: '20' }} value={props.addEvent.endDate}
                formatDate={formatDate} parseDate={parseDate} format='LL'
                dayPickerProps={{ localeUtils: MomentLocaleUtils, locale: 'pl', disabledDays:[{ before: new Date() }, {before: new Date(props.addEvent.startInt)}] }}
                onDayChange={day => props.handleChange({ target: { name: 'endDate', value: Date.parse(day) } })} />
              <label htmlFor="endDate-f" className='active'>Koniec</label>
            </div>
            <div className="input-field col s2">
              <select name='endHour' id="endHour-f" onChange={props.handleChange} value={props.addEvent.endHour}>
                {hours}
              </select>
              <label htmlFor="endHour-f" className=''></label>
            </div>
            <div className="col row s12" style={{ padding: '0', marginBottom: '0' }}>
              <div className='card col s3' style={{
                height: '75px',
                padding: '0'
              }} >
                {/* alt  below is empty becouse in the beginning (befor entering data) the field has no image and it snows ugly mock there */}
                <img src={props.addEvent.picture} alt=''
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%'
                  }} />
              </div>
              <div className="input-field col s9">
                <input name='picture' list='links' placeholder='' id="picture-f" onChange={props.handleChange} value={props.addEvent.picture} />
                <label htmlFor="picture-f" className='active'>Zdjęcie wydarzenia (link)</label>
              </div>
            </div>
            <datalist id='links'>
              {/* Links from: https://www.google.pl/search?q=event&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiTioOJ19DbAhVhYJoKHarlC30Q_AUICigB&biw=1600&bih=769 */}
              <option>http://wp.sypcom.es/wp-content/uploads/2016/04/photodune-8522811-speaker-at-business-conference-and-presentation-m.jpg</option>
              <option>http://aqualandmarina.com/wp-content/uploads/sites/34/2018/05/event.jpg</option>
              <option>https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=yjC-dXXH</option>
              <option>http://ourpolitics.net/wp-content/uploads/2017/12/events.jpg</option>
              <option>http://www.amandaeventz.com/wp-content/uploads/2016/12/special-events-milano-cover.jpg</option>
            </datalist>
            <div className="input-field col s12">
              <textarea name='description' placeholder='' className='materialize-textarea' id="description-f" onChange={props.handleChange} value={props.addEvent.description}></textarea>
              <label htmlFor="description-f" className='active'>Opis</label>
            </div>
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

export default AddEvent;