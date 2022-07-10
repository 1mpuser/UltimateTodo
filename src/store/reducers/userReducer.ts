import { IAuthUser } from "../../interfaces/types";
import { UserAuthEnum } from "../enums/enum";
import { IUserAuthAction } from "../../interfaces/types";
const initialState : IAuthUser  = {
    isAuth : false,
    login : ''
}

const userReducer  = (state : IAuthUser = initialState, action : IUserAuthAction) : IAuthUser  => {
    switch (action.type) {
        case UserAuthEnum.Login :
            return {isAuth : true, login : action.login}
        case UserAuthEnum.Unlogin : 
            return {isAuth : false, login : ''}
        default : return state
    }
}

export default userReducer;