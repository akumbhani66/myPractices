function print(){
    setTimeout(function (){
        console.log("hello world");
    }, 0);
}

function main(){
    print();
    console.log("hi");
}

main()