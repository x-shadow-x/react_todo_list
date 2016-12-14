import React from 'react';
import TodoItem from './TodoItem.jsx';

class TodoMain extends React.Component {
	// 遍历todos并显示
	render() {
		return (
			<ul className="todo_list">
				{this.props.todos.map((todo, index) => {
					return <TodoItem key={index} index={index} {...todo} {...this.props} />
				})}
			</ul>);
	}
}

export default TodoMain;