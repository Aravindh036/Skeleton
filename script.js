var add = require('./add');
var sub = require('./sub');
var div = require('./div');
var mul = require('./mul');
window.hellofun = function hellofun(){
    var num1 = document.getElementById('num1').value - '0';
    var num2 = document.getElementById('num2').value - '0';
    if(num1==null||num2==null){
        alert("enter the values");
    }else{
        var operation = document.getElementById('select-id').value;
        if(operation=="add"){
            execute(num1,num2,add);
        }
        else if(operation=="sub"){
            execute(num1,num2,sub);
        }
        else if(operation=="div"){
            execute(num1,num2,div);
        }
        else{
            execute(num1,num2,mul);
        }
    }
}

function execute(num1,num2,callback){
    console.log("Result:");
    console.log(callback(num1,num2));
}