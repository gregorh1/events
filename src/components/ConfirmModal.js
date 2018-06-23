import React, { Component } from 'react'
import injectSheet from 'react-jss'
import styles from './IndexStyles'

class ConfirmModal extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.modalOverlay}></div>
        <div className={classes.modal}>
          <div className='modal-content center-align'>
            <h5>Czy na pewno chcesz usunąć to wydarzenie?</h5>
            <div className='section'></div>
            <button className='btn waves-effect waves-light m-r-1em' onClick={this.props.deleteCancel}>Anuluj</button>
            <button className='btn waves-effect waves-light red' onClick={this.props.deleteEvent}>Usuń</button>
          </div>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(ConfirmModal)