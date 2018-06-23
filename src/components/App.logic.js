import uuid from 'uuid/v1'
import M from 'materialize-css'
import moment from 'moment'

export const eventFieldsEmpty = {
  id: '',
  title: '',
  organizer: '',
  localization: '',
  cathegory: '',
  startDate: '',
  startHour: '',
  endDate: '',
  endHour: '',
  picture: '',
  description: '',
  startInt: null,
  endInt: null
}

export function openAddEvent(addEvent) {
  addEvent.id = uuid()
  addEvent.startHour = '9:00'
  addEvent.endHour = '18:00'
  this.setState({
    addEvent,
    render: 'ADD_EDIT',
    formName: 'Dodaj nowe wydarzenie'
  })
}

export function handleChange(e) {
  const addEvent = this.state.addEvent
  const name = e.target.name
  const value = e.target.value
  if (name === 'startDate') {
    addEvent['startInt'] = value
    addEvent[name] = moment(value).format('LL')
  } else if (name === 'endDate') {
    addEvent['endInt'] = value
    addEvent[name] = new moment(value).format('LL')
  } else {
    addEvent[name] = value
  }
  this.setState({ addEvent: addEvent })
}

function hourToMiliseconds(h) {
  const hSplit = h.split(':')
  const milis = (hSplit[0] * 60 * 60000) + (hSplit[1] * 60000)
  return milis
}

function isStartBeforEnd(addEv) {
  return (addEv.startInt + hourToMiliseconds(addEv.startHour)) < (addEv.endInt + hourToMiliseconds(addEv.endHour))
}

export function formAddEditValidation(addEvent) {
  if (Object.values(addEvent).includes('')) {
    M.toast({ html: 'Proszę wypełnić wszystkie pola', classes: 'red darken-1' }, 3000)
  } else if (!isStartBeforEnd(addEvent)) {
    M.toast({ html: 'Koniec nie może być wcześniejszy niż początek', classes: 'red darken-1' }, 3000)
  } else {
    return true
  }
}

export function saveEvent(events, newEvent, e) {
  e.preventDefault()
  if (formAddEditValidation(this.state.addEvent)) {
    const events2 = events.filter((event) => {
      return event.id !== newEvent.id
    })
    events2.push(newEvent)
    this.setState({
      events: events2,
      addEvent: Object.assign({}, eventFieldsEmpty),
      render: 'CARDS',
      eventsSearched: events2
    })
    M.toast({ html: 'Wydarzenie zapisano', classes: 'green darken-2' }, 3000)
  }
}

export function daysToEvent(thisEvent) {
  const d = moment(thisEvent.startInt
    + hourToMiliseconds(thisEvent.startHour) - (12 * 60 * 60000))
    .locale('pl').endOf('hour').fromNow()
  return d
}

export function editEvent(event) {
  this.setState({
    addEvent: Object.assign({}, event),
    render: 'ADD_EDIT',
    formName: 'Edytujesz wydarzenie: ',
  })
}

export function clickEvent(event) {
  this.setState({
    chosenEvent: event,
    render: 'THIS_EVENT'
  })
}

export function clickGoBack() {
  this.setState({ render: 'CARDS' })
}

export function toggleModal() {
  this.setState({ modalShow: !this.state.modalShow })
}

export function cancelAddEdit() {
  this.setState({
    addEvent: Object.assign({}, eventFieldsEmpty),
    render: 'CARDS'
  })
}

export function deleteEvent(id) {
  let tmpEvents = this.state.events
  tmpEvents = tmpEvents.filter((event) => {
    return event.id !== id
  })
  this.setState({
    events: tmpEvents,
    render: 'CARDS',
    eventsSearched: tmpEvents,
    modalShow: false
  })
  M.toast({ html: 'Wydarzenie zostało usunięte.', classes: 'amber darken-2' }, 3000)
}

export function searchEvents(e) {
  this.setState({ eventsSearched: this.state.events })
  const searchInput = e.target.value.toLowerCase()
  const tmpEvents = this.state.events
  // eslint-disable-next-line
  const searchedEvents = tmpEvents.filter((event) => {
    if ((
      event.title.toLowerCase().indexOf(searchInput) > -1)
      || (event.localization.toLowerCase().indexOf(searchInput) > -1)
      || (event.organizer.toLowerCase().indexOf(searchInput) > -1))
      return true
  })
  this.setState({ eventsSearched: searchedEvents })
}

export function sortEvents(e) {
  const keyToSortBy = e.target.value
  const tmpEvents = this.state.eventsSearched
  const sortedEvents = tmpEvents.sort((a, b) => {
    if (a[keyToSortBy] < b[keyToSortBy]) return -1
    if (a[keyToSortBy] > b[keyToSortBy]) return 1
    return 0
  })
  this.setState({ eventsSearched: sortedEvents })
}