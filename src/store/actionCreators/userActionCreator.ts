import { Dispatch } from "redux"
import { UserAuthEnum } from "../enums/enum";
import { IUserAuthAction } from '../types/types';

export function logination  (login : string) : IUserAuthAction {
    return {
        type : UserAuthEnum.Login,
        login : login
    }
}
export function unlogination () : IUserAuthAction {
    return {
        type : UserAuthEnum.Unlogin,
        login : ''
    }
}