// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const age_2 = 18
const age_3 = 60
const checkAge = function(age){
    if (typeof age == 'number'){
// 29. Создать if в котором будите проверять значение переменной age_1
//  30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//  31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
//  32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//  33. Иначе выводите “Technical work”.

if (age < age_2){
console.log("You don’t have access cause your age is " + age +" It’s less then");
}else if(age>=age_2 && age < age_3){
    console.log("Welcome  !");
}
else if (age > age_3){
    console.log("Keep calm and look Culture channel");
}else {console.log("Technical work");
}
} else console.log("Not integer value")
}
checkAge(17) 
checkAge(60)
checkAge(18)
checkAge(61)
checkAge("aaa")
