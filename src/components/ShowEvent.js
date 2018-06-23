import React, { Component } from 'react'
import ConfirmModal from './ConfirmModal'
import ModalByPortal from './ModalByPortal'
import injectSheet from 'react-jss'
import styles from './IndexStyles'


class ShowEvent extends Component {

  render() {
    const { classes } = this.props
    const modal = this.props.modalShow && (
      <ModalByPortal>
        <ConfirmModal deleteCancel={this.props.deleteCancel}
          deleteEvent={this.props.deleteEvent.bind(this, this.props.event.id)} />
      </ModalByPortal>
    )
    return (
      <div className='container'>
        {modal}
        <div className='card'>
          <article className='card-content'>
            <div className='row'>
              <header className='col s12 m7 l7 flow-text'>
                <h4>{this.props.event.title}</h4>
                <h5>{this.props.event.organizer}</h5>
                <time><h6>{this.props.event.startDate} {this.props.event.startHour} - {this.props.event.endDate}
                  {this.props.event.endHour}</h6></time>
                <h5>{this.props.event.localization}</h5>
              </header>
              <section className='col s12 m5 l5 center-align'>
                <img className={classes.showEventImg}
                  src={this.props.event.picture} alt={this.props.event.title} />
              </section>
            </div>
            <p className='flow-text'>{this.props.event.description}</p>
          </article>
          <footer className='card-action center-align'>
            <button className='btn waves-effect waves-light red m-r-1em' onClick={this.props.deleteConfirmOpen}>Usuń</button>
            <button className='btn waves-effect waves-light m-r-1em' onClick={this.props.editEvent.bind(this, this.props.event)}>Edytuj</button>
            <button className='btn waves-effect waves-light' onClick={this.props.clickGoBack}>Wróć</button>
          </footer>
        </div>
      </div>
    )
  }


}

export default injectSheet(styles)(ShowEvent)