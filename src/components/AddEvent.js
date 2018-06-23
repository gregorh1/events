import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import MomentLocaleUtils, { formatDate, parseDate, } from 'react-day-picker/moment'
import 'moment/locale/pl'
import injectSheet from 'react-jss'
import styles from './IndexStyles'


class AddEvent extends Component {
  render() {
    const { classes } = this.props
    const hours = []
    for (let i = 0; i <= 23; i++) {
      hours.push(<option value={i + ':00'} key={i}>{i}:00</option>)
      hours.push(<option value={i + ':30'} key={i + 0.5}>{i}:30</option>)
    }

    return (
      <div className='container'>
        <section className='card-panel'>
          <header><h5 id='modal-add-edit-title' className='center-align'>{this.props.formName}</h5></header>
          <form onSubmit={this.props.saveEvent} className='row' >
            <div className='input-field col s6'>
              <input name='title' placeholder='' id='title-f' onChange={this.props.handleChange} value={this.props.addEvent.title} />
              <label htmlFor='title-f' className='active'>Tytuł</label>
            </div>
            <div className='input-field col s6'>
              <input name='organizer' placeholder='' id='organizer-f' onChange={this.props.handleChange} value={this.props.addEvent.organizer} />
              <label htmlFor='organizer-f' className='active'>Organizator</label>
            </div>
            <div className='input-field col s6'>
              <input name='localization' placeholder='' id='localization-f' onChange={this.props.handleChange} value={this.props.addEvent.localization} />
              <label htmlFor='localization-f' className='active'>Miejsce</label>
            </div>
            <div className='input-field col s6'>
              <select name='cathegory' id='cathegory-f' defaultValue='' onChange={this.props.handleChange} value={this.props.addEvent.cathegory}>
                <option value='' disabled >wybierz...</option>
                <option value='Impreza'>Impreza</option>
                <option value='Konferencja'>Konferencja</option>
                <option value='Wernisaż'>Wernisaż</option>
                <option value='Koncert'>Koncert</option>
                <option value='Gra'>Gra</option>
              </select>
              <label htmlFor='cathegory-f' className=''>Kategoria</label>
            </div>
            <div className='input-field col s4'>
              <DayPickerInput name='startDate' id='startDate-f' placeholder='wybierz datę'
                value={this.props.addEvent.startDate}
                formatDate={formatDate} parseDate={parseDate} format='LL'
                dayPickerProps={{ localeUtils: MomentLocaleUtils, locale: 'pl', disabledDays: [{ before: new Date() }] }}
                onDayChange={day => this.props.handleChange({ target: { name: 'startDate', value: Date.parse(day) } })} />
              <label htmlFor='startDate-f' className='active'>Początek</label>
            </div>
            <div className='input-field col s2'>
              <select name='startHour' id='startHour-f' onChange={this.props.handleChange} value={this.props.addEvent.startHour}>
                {hours}
              </select>
              <label htmlFor='startHour-f' className=''></label>
            </div>
            <div className='input-field col s4'>
              <DayPickerInput name='endDate' id='endDate-f' placeholder='wybierz datę'
                value={this.props.addEvent.endDate}
                formatDate={formatDate} parseDate={parseDate} format='LL'
                dayPickerProps={{ localeUtils: MomentLocaleUtils, locale: 'pl', disabledDays: [{ before: new Date() }, { before: new Date(this.props.addEvent.startInt) }] }}
                onDayChange={day => this.props.handleChange({ target: { name: 'endDate', value: Date.parse(day) } })} />
              <label htmlFor='endDate-f' className='active'>Koniec</label>
            </div>
            <div className='input-field col s2'>
              <select name='endHour' id='endHour-f' onChange={this.props.handleChange} value={this.props.addEvent.endHour}>
                {hours}
              </select>
              <label htmlFor='endHour-f' className=''></label>
            </div>
            <div className={classes.addEventImgWrapper0}>
              <div className={classes.addEventImgWrapper1}>
                {/* alt  below is empty becouse in the beginning (befor entering data) the field has no image and it snows ugly mock there */}
                <img src={this.props.addEvent.picture} alt=''
                  className={classes.addEventImg} />
              </div>
              <div className='input-field col s9'>
                <input name='picture' list='links' placeholder='wklej link lub wybierz z listy' id='picture-f' onChange={this.props.handleChange} value={this.props.addEvent.picture} />
                <label htmlFor='picture-f' className='active'>Zdjęcie wydarzenia (link)</label>
              </div>
            </div>
            <datalist id='links'>
              <option>http://wp.sypcom.es/wp-content/uploads/2016/04/photodune-8522811-speaker-at-business-conference-and-presentation-m.jpg</option>
              <option>http://aqualandmarina.com/wp-content/uploads/sites/34/2018/05/event.jpg</option>
              <option>https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=yjC-dXXH</option>
              <option>http://ourpolitics.net/wp-content/uploads/2017/12/events.jpg</option>
              <option>http://www.amandaeventz.com/wp-content/uploads/2016/12/special-events-milano-cover.jpg</option>
            </datalist>
            <div className='input-field col s12'>
              <textarea name='description' placeholder='' className='materialize-textarea' id='description-f' onChange={this.props.handleChange} value={this.props.addEvent.description}></textarea>
              <label htmlFor='description-f' className='active'>Opis</label>
            </div>
            <footer className='card-action center-align' >
              <button type='button' className='btn waves-effect waves-light m-r-1em' onClick={this.props.cancel.bind(this)}>Anuluj</button>
              <button type='submit' className='btn waves-effect waves-light' >Zapisz</button>
            </footer>
          </form>
        </section>
      </div>
    )
  }
}

export default injectSheet(styles)(AddEvent)