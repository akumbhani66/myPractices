const co = require('co')

function getValueOne(){
    return new Promise (function(resolve, reject) {
        setTimeout(function () {
            if(true) {
                resolve(5);
            } else {
                reject("error");
            }
        },1);
    })
}

function getValueTwo(valueOne) {
    return new Promise (function(resolve, reject) {

        setTimeout(function () {
            if(valueOne) {
                resolve(valueOne * valueOne);
            } else
            {
                reject("error");
            }
        },1);
    })

}

function main(){
    co(function*(){

        try{
            var a = yield getValueOne()
        } catch(err){
            console.log(err)
        }

        try{
            var result = yield getValueTwo(a)
        } catch (e2){
            console.log(e2)
        }

        console.log("result: "+result)
        console.log("hello world");
        console.log("hello world");
        console.log("hello world");
        console.log("hello world");
    })


}

main()