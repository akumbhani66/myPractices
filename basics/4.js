
function getValueOne(){
    return new Promise (function(resolve, reject) {
        setTimeout(function () {
            resolve(5);
        },1);
    })

}

function getValueTwo(valueOne) {
    return new Promise (function(resolve, reject) {
        setTimeout(function () {
            resolve(valueOne * valueOne);
        },1);
    })

}

function main(){
    getValueOne().then(function(resultOne){
        getValueTwo(resultOne).then(function (resultFinal) {
            console.log(resultFinal);
        });
    });
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
}

main()