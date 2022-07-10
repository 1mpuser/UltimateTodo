export interface ITodo {
    text : string;
    completed : boolean
    time : string
    memo? : string
}
export interface IAccount {
    login : string
    password : string
    arrWithTodos : ITodo[]
}
export interface IToDoCallback {
    callback : (arg: ITodo)=>void
}

export interface ISortOption {
    name : string
    value : string
}
export interface IEmptyObject {

}

export interface IVisualFC {
    children ? : any
}
