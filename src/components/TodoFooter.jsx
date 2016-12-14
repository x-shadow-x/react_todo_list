import React from 'react';

class TodoFooter extends React.Component {

	// 处理全选按钮，勾上代表全部选中并已完成，取消勾选代表全部未完成
	handleAllStatus(event) {
		this.props.changeTodoState(null, event.target.checked, true);
	}

	// 点击事件，将已完成的项清除
	handleClick() {
		this.props.clearDone()
	}

	render() {
		return (
			<div className="footer clearfix">
				<input type="checkbox" className="fl" checked={this.props.isAllChecked} onChange={this.handleAllStatus.bind(this)} />
				<span className="fl">{this.props.todoDoneCount}已完成 / {this.props.todoCount}总数</span>
				<button className="fr" onClick={this.handleClick.bind(this)}>清除已完成</button>
			</div>);
	}
}

export default TodoFooter;