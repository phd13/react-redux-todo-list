import React, {Component} from 'react';

import 'react-virtualized/styles.css'
import './style.css';
import Input from '../../components/Input';

class CategoriesTree extends Component {
	render() {
		return (
			<div className="categories-tree">
				<Input type="add"/>
			</div>
		)
	}
}

export default CategoriesTree;
