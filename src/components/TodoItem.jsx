import React from 'react';

class TodoItem extends React.Component {
	constructor() {
		super();
		this.state = {
			showInput: false
		}
	}
	// 切换任务项的完成状态
	handleClick() {
		let isDone = !this.props.isDone;
		this.props.changeTodoState(this.props.index, isDone);
	}

	handleChange() {
		this.setState({
			showInput: true
		});

		setTimeout(function() {
			React.findDOMNode(this.refs.input).focus();
		}.bind(this), 500);
	}

	changeText(event) {
		if(event.keyCode === 13) {
			let text = event.target.value;
			if(!text) {
				return false;
			}
			this.props.changeTodoText(this.props.index, text);
			this.setState({
				showInput: false
			});
		}
		
	}

	handleMouseOver() {
		// 找到真正的dom节点，注意0.14版本后refs引用的也是真正的dom
		React.findDOMNode(this.refs.deleteBtn).style.display = 'inline';
	}

	handleMouseOut() {
		React.findDOMNode(this.refs.deleteBtn).style.display = 'none';
	}

	// 删除当前任务
	handleDelete() {
		this.props.deleteTodo(this.props.index);
	}

	render() {
		let style = this.props.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
		let checkBtnClassName = this.props.isDone ? 'check_btn done' : 'check_btn';
		let inputStyle = this.state.showInput ? {display: 'block'} : {display: 'none'};
		return (
			<li onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
				<span className={checkBtnClassName} onClick={this.handleClick.bind(this)}></span>
				<span style={style} onDoubleClick={this.handleChange.bind(this)} >{this.props.content}</span>
				<input type="text" ref="input" onKeyUp={this.changeText.bind(this)} className="input_box" style={inputStyle} />
				<button style={{'display': 'none'}} ref="deleteBtn" onClick={this.handleDelete.bind(this)} className="fr">删除</button>
			</li>);
	}
}

export default TodoItem;