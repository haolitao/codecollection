var event = [¡®click¡¯,¡¯focus¡¯,¡¯blur¡¯,...];
	jQuery.each(event,function(i,name){
	jQuery.prototype[name] = function(fn){
	return this.bind(name,fn);
};
});
