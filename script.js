//Заказ обратного звонка
function callMe() {
var callName = prompt('Введите ваше имя', 'Петя');
    if(callName == null) {
        alert('Работа программы прервана');
        console.log(callName + ' ' + callTel);
        return;
    };
var callTel = prompt('Введите номер телефона', '123456789');

    if(isNaN(callTel)) {
        while((isNaN(callTel)) == true) {
            alert('Неправильно введен номер');
            callTel = prompt('Введите номер телефона', '123456789');    
        };
     }else if(callTel == null) {
         alert('Работа программы прервана');
         console.log(callName + ' ' + callTel);
         return;
     };
    
        console.log(callName + ' ' + callTel);    
};
        
callMe();














































