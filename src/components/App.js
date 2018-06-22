import React, { Component } from 'react';
import M from 'materialize-css';
import Header from './Header'
import AddEvent from './AddEvent'
import EventCard from './EventCard'
import ShowEvent from './ShowEvent'
import SearchBar from './SearchBar'
import db from './db'
import {
  openAddEvent, handleChange, saveEvent, editEvent, clickEvent,
  clickGoBack, toggleModal, deleteEvent, searchEvents, sortEvents,
  eventFieldsEmpty, cancelAddEdit, daysToEvent
} from './App.logic';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idForDb: 1,
      events: [],
      eventsSearched: [],
      addEvent: Object.assign({}, eventFieldsEmpty),
      chosenEvent: {},
      render: 'CARDS', // 'CARDS' 'ADD_EDIT' 'THIS_EVENT', 
      formName: '',
      modalShow: false
    }
  }

  componentDidMount() {
    db.table('events').get(1, (state) => {
      if (state) { this.setState(state) }
    })
    const select = document.querySelectorAll('select');
    M.FormSelect.init(select);
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.events !== prevState.events) {
      db.table('events').put(this.state)
    }
    if (this.state.render !== prevState.render) {
      const elems = document.querySelectorAll('select');
      M.FormSelect.init(elems);
    }
  }

  render() {
    console.log(this.state);
    let render;
    const eventCards = this.state.eventsSearched.map((event, i) => {
      return <EventCard event={event} key={i} clickEvent={clickEvent.bind(this, event)} 
      daysToEvent={daysToEvent(event)}
      />
    })

    if (this.state.render === 'CARDS') {
      render = <div>
        <SearchBar onChangeSearch={searchEvents.bind(this)} onChangeSort={sortEvents.bind(this)} />
        <div className='row'>{eventCards}</div>
      </div>;
    } else if (this.state.render === 'THIS_EVENT') {
      render = <ShowEvent event={this.state.chosenEvent} clickGoBack={clickGoBack.bind(this)}
        deleteEvent={deleteEvent.bind(this)} deleteConfirmOpen={toggleModal.bind(this)}
        deleteCancel={toggleModal.bind(this)} editEvent={editEvent.bind(this)}
        modalShow={this.state.modalShow} />
    } else if (this.state.render === 'ADD_EDIT') {
      render = <AddEvent
        handleChange={handleChange.bind(this)} addEvent={this.state.addEvent}
        saveEvent={saveEvent.bind(this, this.state.events, this.state.addEvent)}
        cancel={cancelAddEdit.bind(this)} formName={this.state.formName} />
    }

    return (
      <div>
        <Header openAddEvent={openAddEvent.bind(this, this.state.addEvent)} />

        {render}

      </div>
    );
  }
}

export default App;
