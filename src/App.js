import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { getTasks } from './actions';

import './App.css';
import CategoriesTree from './containers/CategoriesTree/index';
import TasksList from './containers/TasksList/index';

class App extends Component {

	componentDidMount() {
		const { handleGetTasks } = this.props;
		handleGetTasks();
	}

	render() {
		const { fetching } = this.props;
		if (!fetching) {
			return (
				<Router>
					<div className="container">
						<CategoriesTree/>
						<TasksList/>
					</div>
				</Router>
			);
		} else {
			return <div>Загрузка...</div>;
		}
	}
}

function mapStateToProps({ fetching }) {
	return { fetching	};
}

function mapDispatchToProps(dispatch) {
	return {
		handleGetTasks() {
			dispatch(getTasks());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
