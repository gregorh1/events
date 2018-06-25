import React, { Component } from 'react'
import injectSheet from 'react-jss'
import styles from './IndexStyles'

class EventCard extends Component {
  render() {
    const { classes } = this.props 
    return (
      <div className='col s12 m6 l4' onClick={this.props.clickEvent}>
        <div className={classes.eventCard}>
          <div className={classes.eventCardImgContainer}>
            <img className={classes.eventCardImg}
              src={this.props.event.picture} alt={this.props.event.title} />
            <span className={classes.eventCardTitle}>
              <div className='chip left'>
                {this.props.daysToEvent}
              </div>
              <div className='chip right'>
                {this.props.event.cathegory}
              </div>
            </span>
          </div>
          <section className='card-content'>
            <header><h5 className='center'>{this.props.event.title}</h5></header>
            <p><time>{this.props.event.startDate}, {this.props.event.startHour}</time></p>
            <p><b>{this.props.event.localization}</b></p>
            <p><b>{this.props.event.organizer}</b></p>
          </section>
        </div>
      </div>
    )
  }

}

export default injectSheet(styles)(EventCard)