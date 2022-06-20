//3** Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
const age_2 = 18
const age_3 = 60
const checkAge = function(age){
    // age = Number(age)
    // console.log(age)
    // if (typeof age == 'number')
    if(age && !isNaN(age))
    // Проверяем, что тут не Folse !isNaN(age)
    {
// 29. Создать if в котором будите проверять значение переменной age_1
//  30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//  31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
//  32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//  33. Иначе выводите “Technical work”.

if (age < age_2){
alert("You don’t have access cause your age is " + age +" It’s less then");
}else if(age>=age_2 && age < age_3){
    alert("Welcome  !");
}
else if (age > age_3){
    alert("Keep calm and look Culture channel");
}else {alert("Technical work");
}
} else alert("Not integer value")
}
let a = prompt('Enter yor age')
checkAge(a)
