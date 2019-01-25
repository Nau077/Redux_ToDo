import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTask, addTaskByClick, removeTask, completeTask, changeFilter} from '../../actions/actionCreator';
import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';
import './todo.css';


class ToDo extends Component {

    state = {
        taskText: '',
    }

    handleInputChange = ( {target:{value}} ) => {
        this.setState({
            taskText: value,
        })
    }

    addTask = ({ key }) => {
        const { taskText } = this.state;
    
        if (taskText.length > 3 && key === 'Enter' && taskText.length < 30) { // валидация
          const { addTask } = this.props; // если enter clicked, то из this.props вытягивается addTask (подключенный в connect)
    
          addTask((new Date()).getTime(), taskText, false);
    
          this.setState({
            taskText: '',
          })
    
        }
    
      }

      addTaskByClick = () => {
        const { taskText } = this.state;

        if (taskText.length > 3 && taskText.length < 30) { // валидация
            const { addTaskByClick } = this.props; // если has been clicked, то из this.props вытягивается addTask (подключенный в connect)

            addTaskByClick((new Date()).getTime(), taskText, false); 

            this.setState({
                taskText: '',
              })
        }
      }

      filterTasks = (tasks, activeFilter) => { // принимает наши задачи и значение активного фильтра
        switch (activeFilter) { // после чего фильтрует задачи по выполненности и возвращает новый масссив
          case 'completed':
            return tasks.filter(task => task.isCompleted); // данный метод применяем в Render
            break;                                         // и пробрасываем туда задачи каждый раз, когда они обновляются в сторе
          case 'active':
            return tasks.filter(task => !task.isCompleted);
            break;
          default:
            return tasks;
        }
      }
    
      getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length; // считаем количество невыполненных задач


    render () {
        const { taskText } = this.state;
        const { tasks, removeTask, completeTask, filters, changeFilter } = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, filters);
        const taskCounter = this.getActiveTasksCounter(tasks);

        return (
            <div className="todo-wrapper">
            <ToDoInput onClickInput={this.addTaskByClick} onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText}/>
            {isTasksExist && <ToDoList completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask}/>}
            {isTasksExist && <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filters}  />}
            </div>
        )
    }
}
export default connect(({ tasks, filters }) => ({
    tasks,
    filters,
  }), { addTask, removeTask, completeTask, changeFilter, addTaskByClick })(ToDo);
  
  // в данной функции мы пробрасываем редакс-стейт и возвращаем
  // объект tasks (теперь таски доступны в виде пропсов)


//  removeTask, completeTask 