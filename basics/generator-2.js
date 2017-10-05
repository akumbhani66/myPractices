function fabonaci() {
	var a = yield 1;
	yield a * 2;
}

	var it = fabonaci();
	console.log(it.next());
