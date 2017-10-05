function print(){
    setTimeout(function (){
      return 5;
    }, 0);
}

function main(){
    var a = print();
    console.log(a);
}

main()