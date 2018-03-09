import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleDone, saveTask} from '../../actions';
import Modal from '../../components/Modal'
import Input from "../Input/index";

import './style.css';

class Task extends Component {
	state = {
		isModalOpened: false
	};

	handleToggleDone = () => {
		const {id, handleDone} = this.props;
		handleDone(id);
	};

	handleOpenModal = () => {
		this.setState({isModalOpened: true});
	};

	handleCloseModal = () => {
		this.setState({isModalOpened: false});
	};

	handleSaveTask = (event) => {
		event.preventDefault();
		const { form } = this.refs;
		const {id, handleSaveTask} = this.props;

		const task = {
			id,
			content: form.elements['content'].value,
			isDone: form.elements['isDone'].value,
			category: form.elements['category'].value || ''
		};

		handleSaveTask(task);
	};

	render() {
		const {isDone, content} = this.props;
		const {isModalOpened} = this.state;
		return (
			<div className="task">
				<Input type="checkbox" checked={isDone} onChange={this.handleToggleDone}/>
				<p>{content}</p>
				<button type="button" onClick={this.handleOpenModal}>Edit</button>
				{isModalOpened ?
					<Modal>
						<form ref="form" onSubmit={this.handleSaveTask}>
							<button onClick={this.handleCloseModal}>close</button>
							<Input name="content">{content}</Input>
							<Input name="isDone" type="checkbox" defaultChecked={isDone}/>
							<select name="category">
								<option>1</option>
								<option>2</option>
							</select>
							<Input type="submit">Save</Input>
						</form>
					</Modal> : null
				}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleDone(id) {
			dispatch(toggleDone(id));
		},

		handleSaveTask(task) {
			dispatch(saveTask(task));
		}
	}
}

export default connect(null, mapDispatchToProps)(Task);
