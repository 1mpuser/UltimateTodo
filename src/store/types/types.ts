import { UserAuthEnum } from "../enums/enum"
export interface IAuthUser {
    isAuth : boolean
    login : string
}

export interface IUserAuthAction{
    type : UserAuthEnum.Login | UserAuthEnum.Unlogin
    login : string
}
