
 function print(){
   return new Promise (function(resolve, reject) {
       setTimeout(function () {
           resolve(5);
       },1);
   })

}

function main(){
    print().then(function(response){
        console.log(response);
    });
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
}

main()