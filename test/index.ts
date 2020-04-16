import { expect } from 'chai';
import TodoModel from '../src/todoModel';
import TodoCollection from '../src/todoCollection';


describe('Todo Model', () => {
    it('this should result : id, title , completed', () => {
            const newTodo =  TodoModel(0, 'create app');

            expect(newTodo).to.equal({
                id : 0,
                title : 'create app',
                completed : false
            })
    })
});


describe('Todo Collection', () => {
    it('this should return list of 3 items', () => {
        const newTodoCollection = TodoCollection('create app','react','gym');
            expect(newTodoCollection.get().length).to.equal(3);
    });

    it('this should return a object todo', () => {
        const newTodoCollection = TodoCollection('create app','react','gym');
            expect(newTodoCollection.get()[1]).to.eql({
                id:1,
                title:'react',
                completed : false
            });
    })
});