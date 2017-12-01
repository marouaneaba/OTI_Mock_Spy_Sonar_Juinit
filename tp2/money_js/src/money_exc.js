


function DevisesIncompatibleExc(_d1,_d2) {
	this.d1=_d1;
	this.d2=_d2;

}

DevisesIncompatibleExc.prototype.toString=function (){
		return "Devises incompatibles : "+this.d1+" vs "+this.d2;
}

function moneyInfZero() {

}

moneyInfZero.prototype.toString=function (){
		return "Money inférieur de Zéro  ";
}

function MoneyNullValueOrNullCurrency(){}

MoneyNullValueOrNullCurrency.prototype.toString=function (){
		return "Money Value is Null : ";
}

function ErrorValue(){}

ErrorValue.prototype.toString=function (){
		return "ErrorValue : m1 < m2";
}

function ValueEqualZero(){}

ValueEqualZero.prototype.toString=function (){
		return "ValueEqualZero : m1 == 0 OU m2 == 0 OU les Deux";
}

function CurrencySupTrois(){}

CurrencySupTrois.prototype.toString=function (){
		return "Currency et supérieur à Trois";
}

