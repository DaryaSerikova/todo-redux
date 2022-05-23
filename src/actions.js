//actions

let nextTodoId = 0;

//типы Action'ов
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

//другие константы
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//Action Creators
export const addTodo = (text) => ({
  type: ADD_TODO, 
  id: nextTodoId++,
  text 
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER, 
  filter 
});

export const toggleTodo =(id) => ({
  type: TOGGLE_TODO, 
  id
});