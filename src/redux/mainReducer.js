import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth26194Reducer from '../features/EmailAuth26194/redux/reducers';
import CalendarView26192Reducer from '../features/CalendarView26192/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth26194: EmailAuth26194Reducer,
CalendarView26192: CalendarView26192Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});