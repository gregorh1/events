import React from 'react';
import Input from 'react-materialize/lib/Input';

const AddModal = (props) => {
  let hours = [];
  for (let i = 0; i <= 23; i++) {
    hours.push(<option value={i + ':00'} key={i}>{i}:00</option>)
    hours.push(<option value={i + ':30'} key={i + 0.5}>{i}:30</option>)
  }

  const datapickerOptionsStart = {
    monthsFull: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
    monthsShort: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
    weekdaysFull: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
    weekdaysShort: ['niedz.', 'pn.', 'wt.', 'śr.', 'cz.', 'pt.', 'sob.'],
    weekdaysLetter: ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
    today: 'Dzisiaj',
    clear: 'Usuń',
    close: 'Zamknij',
    firstDay: 1,
    format: 'dd-mm-yyyy',
    formatSubmit: 'yyyy/mm/dd',
    hiddenPrefix: 'prefix_',
    onSet: function (context, ooo) {
      props.handleChange({
        target: {
          name: 'startDate',
          value: context.select
        }
      })
    },
  }

  const datapickerOptionsEnd = {
    monthsFull: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
    monthsShort: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
    weekdaysFull: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
    weekdaysShort: ['niedz.', 'pn.', 'wt.', 'śr.', 'cz.', 'pt.', 'sob.'],
    weekdaysLetter: ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
    today: 'Dzisiaj',
    clear: 'Usuń',
    close: 'Zamknij',
    firstDay: 1,
    format: 'dd-mm-yyyy',
    formatSubmit: 'yyyy/mm/dd',
    hiddenPrefix: 'prefix_',
    onSet: function (context, ooo) {
      props.handleChange({
        target: {
          name: 'endDate',
          value: context.select
        }
      })
    },
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

            <Input name='startDate' id='startDate' s={4} label='Początek' placeholder='Wybierz datę' type='date' className='datepicker'
              value={props.addEvent.startDate}
              options={datapickerOptionsStart} />

            <Input name='startHour' s={2} label='' placeholder=' ' type='select' className=''
              onChange={props.handleChange} value={props.addEvent.startHour} >
              {hours}
            </Input>
            <Input name='endDate' id='endDate' s={4} label='Koniec' placeholder='Wybierz datę' type='date' className='datepicker'
              value={props.addEvent.endDate}
              options={datapickerOptionsEnd} />
            <Input name='endHour' s={2} label='' placeholder=' ' type='select' className=''
              onChange={props.handleChange} value={props.addEvent.endHour} >
              {hours}
            </Input>
            <div className="col row s12" style={{ padding: '0', marginBottom: '0' }}>
              <div className='card col s3' style={{
                height: '75px',
                padding: '0'
              }} >
                <img src={props.addEvent.picture} alt=''
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%'
                  }} />
              </div>
              <Input name='picture' s={9} list='links' label='Zdjęcie wydarzenia (link)' placeholder='Wklej link do zdjęcia lub wybierz jeden z listy... ' onChange={props.handleChange} value={props.addEvent.picture} />
            </div>

            <datalist id='links'>
              {/* Links from: https://www.google.pl/search?q=event&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiTioOJ19DbAhVhYJoKHarlC30Q_AUICigB&biw=1600&bih=769 */}
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