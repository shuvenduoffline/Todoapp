import todosView from '../src/todosView';
namespace app{
    export const init = () =>{
        const $todos = document.getElementById("todos");

        const $input = document.getElementById("input-todo");
        const $addButton  = document.getElementById("add-todo");


            const views = todosView($todos, "create app","learns new technology");
            views.render();

            $addButton.addEventListener('keypress', (event) =>{
                if(event['keyCode'] == 13){
                    views.action('add',$input['value']);
                    $input['value'] = "";
                }
            });

            
            $addButton.addEventListener('click', () =>{
                    views.action('add',$input['value']);
                    $input['value'] = "";
            });

    } 
}

app.init();