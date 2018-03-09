import React, {Component} from 'react';
import './style.css';

class Input extends Component {

	render() {
		const {placeholder, type, children, onChange, onAdd, checked, name} = this.props;
		switch (type) {
			case 'add':
				return (
					<div className="input-wrap">
						<input className="input" type="text" placeholder={placeholder || "Placeholder..."} onChange={onChange}/>
						<button className="button" onClick={onAdd}>Add</button>
					</div>
				);

			case 'search':
				return (
					<div className="input-wrap">
						<input className="input" type="text" placeholder={placeholder || "Placeholder..."}/>
					</div>
				);

			case 'checkbox':
				return (
					<div className="input-wrap">
						<label>
							<input className="input" type="checkbox" checked={checked} onChange={onChange} name={name}/>
							{children ? children : ''}
						</label>
					</div>
				);

			case 'submit':
				return (
					<div className="input-wrap">
						<input className="input" type="submit" defaultValue={this.props.children}/>
					</div>
				);

			default:
				return (
					<div className="input-wrap">
						<input className="input" type="text" defaultValue={this.props.children} name={name}/>
					</div>
				);
		}
	}
}

export default Input;
