export interface ITodo {
    text : string;
    completed : boolean
    time : string
    memo : string
}
export interface IUser {
    
}
export interface IToDoCallback {
    callback : (arg: ITodo)=>void
}