import * as userAction from './user.actions';
import { IUser } from '../../interfaces/user.interface';

export interface IUserState {
    authUser: IUser|null;
    users: IUser[]|null;
}

export const initialUserState: IUserState = {
    authUser: null,
    users: null
};

export function userReducer(state = initialUserState, action: userAction.UserActions): IUserState {
    switch (action.type) {
        case userAction.REGISTER_USER_ERROR:
        case userAction.REGISTER_USER: {
            return {
                ...state,
            };
        }
        case userAction.REGISTER_USER_SUCCESS: {
            return {
                ...state,
                authUser: action.payload
            };
        }
        default:
            return state;
    }
}