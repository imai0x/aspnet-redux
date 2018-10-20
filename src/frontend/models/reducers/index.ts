/**********************************************************
*                                                         *
*     Combined Reducers for main application              *
*     Generated by ts2redux at 2018-10-20T11:11:58.981Z   *
*                                                         *
**********************************************************/
import * as redux from 'redux';
import { IncModelReducer, IIncModel } from './IncModel';
import { SimpleModelReducer, ISimpleModel } from './SimpleModel';
import { TestModelReducer, ITestModel } from './TestModel';
import { TodoListReducer, ITodoList } from './TodoList';
import { UserStateReducer, IUserState } from './UserState';
export interface State {
  IncModel: IIncModel
  SimpleModel: ISimpleModel
  TestModel: ITestModel
  TodoList: ITodoList
  UserState: IUserState
}
export const reducers = redux.combineReducers<State>({
  IncModel: IncModelReducer,
  SimpleModel: SimpleModelReducer,
  TestModel: TestModelReducer,
  TodoList: TodoListReducer,
  UserState: UserStateReducer,
})
