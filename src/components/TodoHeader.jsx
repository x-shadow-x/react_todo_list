import React from 'react';

class TodoHeader extends React.Component {
	// 监听回车事件，添加新任务项
	handleKeyUp(event) {
		if(event.keyCode === 13) {
			let value = event.target.value;

			if(!value) {
				return false;
			}
			let newItem = {
				content: value,
				isDone: false
			}

			event.target.value = '';
			this.props.addTodo(newItem);
		}
	}

	render() {
		return (
			<div className="header">
				<input type="text" placeholder="Add item" onKeyUp={this.handleKeyUp.bind(this)} />
			</div>);
	}
}

export default TodoHeader;