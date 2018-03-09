import {Component} from 'react';
import {createPortal} from 'react-dom';

class Modal extends Component {
	constructor(props) {
		super(props);
		this.elem = document.createElement('div');
		this.elem.classList.add('modal');
	}

	componentDidMount() {
		document.body.appendChild(this.elem);
	}

	componentWillUnmount() {
		document.body.removeChild(this.elem);
	}

	render() {
		return createPortal(this.props.children, this.elem);
	};
}

export default Modal;
