export interface user {
    name:string
}
export type Action = {
    type:""
}

export const users: user[]=[
    {
        name:'guyyu'
    }
]
export const globalReducer = (state:user[], action:Action)=>{
switch (action.type) {
    case "":
        
        return state;

    default:
        return state;
}
}