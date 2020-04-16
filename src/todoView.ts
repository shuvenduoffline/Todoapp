const todoView = (todoModel)=>{
    const render = () =>{

        const { id , title, completed} = todoModel;

        console.log("id : ",id);
        let $titlehtml = completed ? `<del class="w-7 text-truncate"> ${title} </del>` : `<span class="w-7 text-truncate"> ${title} </span>`;

        console.log($titlehtml);
        console.log("complete ",completed);

        return `<li class="list-group-item" data-id='${id}'>
                <input type="checkbox" class="toggleCompleted mr-2" ${completed ? 'checked' : ''}>
                <button type="button" class="remove close mr-2 text-danger">
                    <span>x</span>
                </button>
                ${$titlehtml}
                </li>`;
    };


    return {
        render
    };
}

export default todoView;