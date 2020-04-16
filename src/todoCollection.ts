import TodoModel from '../src/todoModel';
const TodoCollection = (...titleArr: string[]) => {

    let collection: object[] = titleArr.map((title, index) => {
        return TodoModel(index, title);
    });

    const get = (): object[] => {
        return collection;
    };


    const add = (title: string): void => {
        const id = collection.length;
        collection = [...collection, TodoModel(id, title)];

    };

    const remove = (id: number): void => {
        collection = collection.filter((todoModel) => {
            return todoModel['id'] !== id;
        });

    };

    const toggleCompleted = (id: number): void => {
        // collection = collection.filter((todoModel) => {
        //     if (todoModel['id'] === id) {    
        //         return {
        //             id: todoModel['id'],
        //             title: TodoModel['title'],
        //             completed: !todoModel['completed']
        //         };
        //     }
        //     else return todoModel;
            
        // });

        

        // collection.forEach((todoModel) => {
        //     console.log("new res",todoModel['completed']);
        //     console.log("newid ",todoModel['id']);
        //     if(id == TodoModel['id']){
        //         collection[id]['completed'] = true;
        //     }
        // });

        collection[id]['completed'] = !collection[id]['completed'];

        collection.forEach((todoModel) => {
            console.log("new res",todoModel['completed']);
            console.log("newid ",todoModel['id']);
        });
    };

    return {
        get,
        add,
        remove,
        toggleCompleted
    };
}

export default TodoCollection;