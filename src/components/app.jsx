import React from 'react';

import localDb from '../../node_modules/localDb/localDb.js';

import TodoHeader from './TodoHeader.jsx';
import TodoMain from './TodoMain.jsx';
import TodoFooter from './TodoFooter.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.db = new localDb('React-Todos');
		this.state = {
			todos: this.db.get('todos') || [],
			isAllChecked: false
		};
	}

	// 判断是否所有任务的状态都完成，以便同步底部的全选按钮
	allChecked() {
		let isAllChecked = false;
		if (this.state.todos.every((todo) => todo.isDone)) {
			isAllChecked = true;
		}
		this.setState({
			todos: this.state.todos,
			// ES6允许在对象之中，只写属性名，不写属性值。这时，属性值等于属性名所代表的变量,下面的写法等同于 isAllChecked：isAllChecked
			isAllChecked
		});
	}

	// 添加任务项，传递给Header组件的方法
	addTodo(todoItem) {
		this.state.todos.push(todoItem);
		this.allChecked();
		this.db.set('todos', this.state.todos);
	}

	// 改变任务项的状态，传递给TodoItem和Footer组件的方法
	changeTodoState(index, isDone, isChangeAll = false) {
		if (isChangeAll) {
			this.setState({
				todos: this.state.todos.map((todo => {
					todo.isDone = isDone;
					return todo;
				})),
				isAllChecked: isDone
			});
		} else {
			// 因为allChecked函数中会调用setState所以此处只要通过this.state修改对应属性的状态就好，在allChecked函数中会通过setState将此处的修改更行
			// 否则直接使用this.state去修改状态是不提倡的，也不会触发 willUpdate，render等流程
			this.state.todos[index].isDone = isDone;
			this.allChecked();
		}
		this.db.set('todos', this.state.todos);
	}

	changeTodoText(index, text) {
		this.state.todos[index].isDone = false;
		this.state.todos[index].content = text;
		this.allChecked();
		this.db.set('todos', this.state.todos);
	}

	// 清除已完成的任务，传递给Footer组件
	clearDone() {
		let todos = this.state.todos.filter(todo => !todo.isDone);
		this.state.todos = todos;
		this.allChecked();
	}

	// 删除当前的任务， 传递给TodoItem的方法
	deleteTodo(index) {
		this.state.todos.splice(index, 1);
		this.setState({
			todos: this.state.todos
		});
		this.db.set('todos', this.state.todos);
	}

	render() {
		
		let props = {
			todoCount: this.state.todos.length || 0,
			todoDoneCount: (this.state.todos && this.state.todos.filter((todo) => {return todo.isDone;}).length) || 0
		};

		// 注意：TodoFoter里面的{...props}
		// <TodoFooter {...props} />等效于
		// <TodoFooter todoCount={props.todoCount} todoDoneCount={props.todoDoneCount} />
		return (
			<div className='panel'>
			<TodoHeader addTodo={this.addTodo.bind(this)} />
			<TodoMain changeTodoText={this.changeTodoText.bind(this)} deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)} todos={this.state.todos} />
			<TodoFooter isAllChecked={this.state.isAllChecked} clearDone={this.clearDone.bind(this)} {...props} changeTodoState={this.changeTodoState.bind(this)} />
		</div>);
	}
}

React.render(<App/>, document.getElementById('app'));