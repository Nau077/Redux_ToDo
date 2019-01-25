import {ADD_TASK, ADD_TASK_BY_CLICK,  REMOVE_TASK, COMPLETE_TASK } from '../../constants'
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) { // подтягиваем нужный нам nameSpace, проверяем, есть ли в нём таски, передаем в стор
  TASKS = {
    tasks: [],
  }
}

// const TASKS = [
//     {
//         id: 1,
//         text: 'Walk to the Russian Museem with lapki',
//         isCompleted: false,
//     },

//     {
//         id: 2,
//         text: 'Walk to the SpaceShip with lapki',
//         isCompleted: false,
//     },

//     {
//         id: 3,
//         text: 'Pass the first exam',
//         isCompleted: true,
//     }

// ];

const tasks = (state = TASKS.tasks, { id, text, isCompleted, type }) => {
    switch (type) {
      case ADD_TASK :
        return [
          ...state, {
            id,
            text,
            isCompleted,
          }
        ];

    case ADD_TASK_BY_CLICK :
              return [
                ...state, {
                  id,
                  text,
                  isCompleted,
                }
              ];
      case REMOVE_TASK:
          return [...state].filter(task => task.id !== id);
        case COMPLETE_TASK:
            return [...state].map(task => {
              if(task.id === id) {
                task.isCompleted = !task.isCompleted;
              }
              return task;
            });
      default:
        return state;
    }
}  

 
export default tasks