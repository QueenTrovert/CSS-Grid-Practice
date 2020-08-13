function isEven(num){
    if(num%2 == 0)
        return true;
    else
        return false;
}

function factorial(num){
    var answer = 1;
    for(var ctr = num; ctr > 0; ctr--){
        answer = answer * ctr;
    }
    return answer;
}

function kebabToSnake(text){
    return text.replace("-","_");
}