import { createContext } from 'react';
interface IAuthContext {
    isAuth : boolean
    login : string
    setAuthStatus?(arg? :any) : any
    setLogin?(arg? :any) : any
}
const login : string = ''
const isAuth : boolean = false
export const AuthContext = createContext<IAuthContext>({isAuth, login})

