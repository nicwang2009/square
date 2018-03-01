function $$(selector,context){
	context = context || document;
	var elements = context.querySelectorAll(seletor);
	return Array.prototype.slice.call(elements);
}
