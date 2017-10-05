function* test(){
	yield 1;
}

	var a = test();
	console.log(a);
	console.log(a.next());
