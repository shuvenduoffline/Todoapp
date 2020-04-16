const TodoModel = (id: number , title : string, completed : boolean = false) =>{

    return {
        id, title , completed
    }
}

export default TodoModel;