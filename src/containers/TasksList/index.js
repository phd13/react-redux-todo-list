import React, {Component} from 'react';
import {List} from 'react-virtualized';
import {connect} from 'react-redux';

import 'react-virtualized/styles.css'
import './style.css';
import Input from '../../components/Input';
import Task from '../../components/Task';
import {addTask} from '../../actions';

class TasksList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			addingTask: ''
		};
	}

	handleChangeAddingTask = ({target}) => {
		const {value} = target;
		this.setState({
			addingTask: value
		});
	};

	handleAddTask = () => {
		const { addingTask: content } = this.state;
		this.props.handleAddTask(content);
	};

	render() {
		const {tasks} = this.props;

		return (
			<div className="tasks-list-container">
				<div className="controls">
					<Input type="checkbox">Show done</Input>
					<Input type="search"/>
					<Input type="add" onChange={this.handleChangeAddingTask} onAdd={this.handleAddTask}/>
				</div>
				<div className="tasks">
					{tasks.map(({id, isDone, content, category}) => (
						<Task
							key={id}
							id={id}
							isDone={isDone}
							content={content}
							category={category}
						/>
					))}
				</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleAddTask(content) {
			dispatch(addTask(content));
		}
	};
}

const mapStateToProps = ({tasks}) => ({
	tasks
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
