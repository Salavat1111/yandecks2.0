


const List = () => {
    return (
<div className="Container">
            <ul className="tree" id="tree">
                <ul>Пользователям
                    <li></li>
                    <li>Информация</li>
                    <li>Войти</li>
                </ul>
                <ul>Партнерам
                    <li>Информация</li>
                    <li>Войти</li>
                    <li></li>
                </ul>
                <ul>О нас
                    <li>Информация</li>
                    <li>Что предлогаем</li>
                </ul>
            </ul>
</div>

    )
}


for (let li of tree.querySelectorAll('li')){
    let span = document.createElement('span');
    span.classList.add('show');
    li.prepend(span);
    span.append(span.nextSibling)

    tree.onClick = function(event){
        if (event.target.tagName != 'SPAN') return;
    
        let childrenContainer = event.target.parentNode.querySelector('ul');
    
        if (!childrenContainer) return; 
    
        childrenContainer.hidden = !childrenContainer.hidden;
    
        if (childrenContainer.hidden){
            event.terget.classList.add('hide');
            event.target.classList.remove('show');
        }
        else{
            event.target.classList.add('show');
            event.target.classList.remove('hide');
        }
    
    }
}






