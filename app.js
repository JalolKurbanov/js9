let amo = +prompt('Сколько задач');

function op(){
    return Math.floor(Math.random()*(4-1+1)+1);
}
function r(){
    return Math.floor(Math.random()*(20-1+1)+1);
}
for(let i =1;i<=amo;i++){
    let one = r();
    let two = r();
    switch(op()){
        case 1:
            let que1 = +prompt(one +'+'+ two);
            let answ1 = que1==(one + two) ? ('Ваш ответ верный - '+que1) : "Ваш ответ не верный - "+que1+". Правильный ответ - "+(one + two);
            console.log(answ1);break;
        case 2:
            let que2 = +prompt(one +'+'+ two);
            let answ2 = que2==(one + two) ? ('Ваш ответ верный - '+que2) : "Ваш ответ не верный - "+que2+". Правильный ответ - "+(one + two);
            console.log(answ2);break;
        case 3:
            let que3 = +prompt(one +'+'+ two);
            let answ3 = que3==(one + two) ? ('Ваш ответ верный - '+que3) : "Ваш ответ не верный - "+que3+". Правильный ответ - "+(one + two);
            console.log(answ3); break;  
        case 4:
            let que4 = +prompt(one +'+'+ two);
            let answ4 = que4==(one + two) ? ('Ваш ответ верный - '+que4) : "Ваш ответ не верный - "+que4+". Правильный ответ - "+(one + two);
            console.log(answ4);break;
    }
}