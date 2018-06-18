import React, { Component } from 'react';
import uuid from 'uuid/v1';
import Header from './Header'
import AddModal from './AddModal'
import EventCard from './EventCard'
import ShowEvent from './ShowEvent'
import SearchBar from './SearchBar'
import db from './db'

const eventFields = {
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idForDb: 1,
      events: [],
      eventsSearched: [],
      addEvent: Object.assign({}, eventFields),
      chosenEvent: {},
      render: 'CARDS', // 'THIS_EVENT' or 'CARDS'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    db.table('events').get(1, (state) => {
      if (state) { this.setState(state) }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.events !== prevState.events) {
      db.table('events').put(this.state)
    }
  }

  openAddModal() {
    window.$('#add-event-modal').modal({ dismissible: false });
    window.$('#add-event-modal').modal('open');
    window.$('#modal-add-edit-title').text('Dodaj Wydarzenie');
    if (this.state.addEvent.id === '') {
      let tmpAddEvent = this.state.addEvent;
      tmpAddEvent.id = uuid();
      this.setState({ addEvent: tmpAddEvent });
    }
  }

  handleChange(event) {
    let tmpAddEvent = this.state.addEvent;
    let name = event.target.name
    let value = event.target.value
    if (name === 'startDate') {
      tmpAddEvent['startInt'] = value;
      tmpAddEvent[name] = new Date(value).toLocaleDateString();
    } else if (name === 'endDate') {
      tmpAddEvent['endInt'] = value;
      tmpAddEvent[name] = new Date(value).toLocaleDateString();
    } else {
      tmpAddEvent[name] = value;
    }
    this.setState({ addEvent: tmpAddEvent })
  }

  isFiledAll() {
    let filedAll = true;
    let splitStart = this.state.addEvent.startHour.split(':')
    let startHourInMilis = (splitStart[0] * 60 * 60000) + (splitStart[1] * 60000)
    let start = this.state.addEvent.startInt + startHourInMilis
    let splitEnd = this.state.addEvent.endHour.split(':')
    let endHourInMilis = (splitEnd[0] * 60 * 60000) + (splitEnd[1] * 60000)
    let end = this.state.addEvent.endInt + endHourInMilis
    for (let val of Object.values(this.state.addEvent)) {
      if (val === '') { filedAll = false }
    }
    if (!filedAll) {
      window.Materialize.toast('Proszę wypełnić wszystkie pola', 3000)
    } else if (start > end) {
      window.Materialize.toast('Koniec nie może być wcześniejszy niż początek', 3000)
    } else {
      return true
    }
  }

  saveEvent(e) {
    e.preventDefault();
    if (this.isFiledAll()) {
      let tmpEvents = this.state.events;
      let tmpAddEvent = this.state.addEvent;
      tmpEvents = tmpEvents.filter((event) => {
        return event.id !== tmpAddEvent.id
      })
      tmpEvents.push(tmpAddEvent);
      this.setState({
        events: tmpEvents,
        addEvent: Object.assign({}, eventFields),
        render: 'CARDS',
        eventsSearched: tmpEvents
      })
      window.$('#add-event-modal').modal('close')
      window.Materialize.toast('Wydarzenie zapisano', 3000)

    }
  }

  editEvent(event) {
    this.setState({ addEvent: Object.assign({}, event) })
    window.$('#add-event-modal').modal({ dismissible: false })
    window.$('#add-event-modal').modal('open')
    window.$('#modal-add-edit-title').text('Edytuj Wydarzenie');
  }

  clickEvent(event) {
    this.setState({
      chosenEvent: event,
      render: 'THIS_EVENT'
    })
  }

  clickGoBack() {
    this.setState({ render: 'CARDS' })
  }

  deleteConfirm() {
    window.$('#delete-confirm-modal').modal();
    window.$('#delete-confirm-modal').modal('open');
  }

  closeModal() {
    window.$('.modal').modal('close');
    this.setState({ addEvent: Object.assign({}, eventFields) })
  }

  deleteEvent(id) {
    window.$('#delete-confirm-modal').modal('close');
    let tmpEvents = this.state.events;
    tmpEvents = tmpEvents.filter((event) => {
      return event.id !== id;
    })
    this.setState({
      events: tmpEvents,
      render: 'CARDS',
      eventsSearched: tmpEvents
    })
    window.Materialize.toast('Wydarzenie zostało usunięte.', 3000)
  }

  searchEvents(e) {
    this.setState({ eventsSearched: this.state.events })
    let searchInput = e.target.value.toLowerCase();
    let tmpEvents = this.state.events;
    // eslint-disable-next-line
    let searchedEvents = tmpEvents.filter((event) => {
      if ((
        event.title.toLowerCase().indexOf(searchInput) > -1)
        || (event.localization.toLowerCase().indexOf(searchInput) > -1)
        || (event.organizer.toLowerCase().indexOf(searchInput) > -1))
        return true
    })
    this.setState({ eventsSearched: searchedEvents })
  }

  sortEvents(e) {
    let keyToSortBy = e.target.value
    let tmpEvents = this.state.eventsSearched;
    let sortedEvents = tmpEvents.sort((a, b) => {
      if (a[keyToSortBy] < b[keyToSortBy]) return -1;
      if (a[keyToSortBy] > b[keyToSortBy]) return 1;
      return 0;
    })
    this.setState({ eventsSearched: sortedEvents })
  }

  render() {
    let render;
    let eventCards = this.state.eventsSearched.map((event, i) => {
      return <EventCard event={event} key={i} clickEvent={this.clickEvent.bind(this, event)} />
    })

    if (this.state.render === 'CARDS') {
      render = <div>
        <SearchBar onChangeSearch={this.searchEvents.bind(this)} onChangeSort={this.sortEvents.bind(this)} />
        <div className='row'>{eventCards}</div>
      </div>;
    } else if (this.state.render === 'THIS_EVENT') {
      render = <ShowEvent event={this.state.chosenEvent} clickGoBack={this.clickGoBack.bind(this)}
        deleteEvent={this.deleteEvent.bind(this)} deleteConfirm={this.deleteConfirm.bind(this)}
        deleteCancel={this.closeModal.bind(this)} editEvent={this.editEvent.bind(this)} />
    }

    return (
      <div>
        <Header openAddModal={this.openAddModal.bind(this)} />

        <AddModal
          handleChange={this.handleChange}
          addEvent={this.state.addEvent}
          saveEvent={this.saveEvent.bind(this)}
          cancel={this.closeModal.bind(this)} />

        {render}

      </div>
    );
  }
}

export default App;
