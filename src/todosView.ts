import TodoCollection from '../src/todoCollection';
import todoView from '../src/todoView';

const todosView = ($el, ...titleArr: string[]) => {

    const todoCollection = TodoCollection(...titleArr);

    const action = (type: string, ...params: any[]): void => {
        todoCollection[type](...params);
        render();
    };

    const render = (): void => {
        const $list = todoCollection.get().map((todoModel) => {
            return todoView(todoModel).render();
        }).join('');

        $el.innerHTML = `<ul>${$list}</ul>`;

        attachEvents();
    };


    const attachEvents = (): void => {

        const $todos = $el.querySelectorAll('.list-group-item');

        $todos.forEach(($todo) => {
            const id = parseInt($todo.getAttribute('data-id'));

            const $checkbox = $todo.querySelector('.toggleCompleted');

            const $remove = $todo.querySelector('.remove');

           

            $checkbox.addEventListener('click', () => {
                action('toggleCompleted', id);
            });



            $remove.addEventListener('click', () => {
                action('remove', id);
            });



        });
    };


    return {
        render,
        action
    };
};
export default todosView;