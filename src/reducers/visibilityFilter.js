// import { VisibilityFilters } from "../actions";

import { 
  SET_VISIBILITY_FILTER,
  VisibilityFilters 
} from "../actions";

// const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => { //state = SHOW_ALL
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}


export default visibilityFilter;