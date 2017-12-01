var money= (function(){
	function money(v,curr) {
		this.v=v;
		this.curr=curr;
	}

	money.prototype.getCurrency=function () {
		return this.curr;
	}
	money.prototype.getValue=function () {
		return this.curr;
	}
	money.prototype.equals=function (otherM) {
		return (otherM.getValue()==this.getValue()) ;
	}
	money.prototype.toString=function toString() {
		return this.getValue()+" ("+this.getCurrency()+")" ;
	}


return money;
})();
