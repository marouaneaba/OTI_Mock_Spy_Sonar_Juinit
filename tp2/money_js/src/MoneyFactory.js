function MoneyFactory(){}


MoneyFactory.getDefaultInstance = function(){
	return new MoneyFactory();
}

MoneyFactory.prototype.createMoney = function(value,currency){

		return new money(value,currency);


}
/*MoneyFactory.getDefaultInstance = function(){
	return new MoneyFactory();
}
*/