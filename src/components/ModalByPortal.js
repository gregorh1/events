import { Component } from 'react';
import ReactDOM from 'react-dom';

// const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');


class ModalByPortal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentDidUpdate() {
    modalRoot.removeChild(this.el);
  }

  render() {

    return ReactDOM.createPortal(
      this.props.children, 
      this.el
    )
  }
}

export default ModalByPortal;
