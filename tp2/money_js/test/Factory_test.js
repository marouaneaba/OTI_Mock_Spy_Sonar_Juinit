//tester la fabrication d'objet mone(simple money,money <0)'
//	la som de deux fabrication(diffrent currnecy,sum money<0,null)
QUnit.module("Factory_money", {
//	setup:function(assert){alert("setup moneyOps individual test");},
//	teardown:function(assert){alert("teardown moneyOps individual test");}
});


QUnit.test("test construct money",function(assert)
{
	assert.expect(2);

	var moneyFact = MoneyFactory.getDefaultInstance();
	var m = moneyFact.createMoney(4,"EUR");

	assert.ok(m.v==4,"valeur = 4");
	assert.equal(m.curr,"EUR","currency = EUR");
}
);

QUnit.test("test accesseurs money",function(assert)
{
	assert.expect(2);

	var moneyFact = MoneyFactory.getDefaultInstance();
	var m = moneyFact.createMoney(4,"EUR");

	assert.ok(m.getValue()==4,"valeur = 4");
	assert.equal(m.getCurrency(),"EUR","currency = EUR");
}
);


QUnit.test("test construct money anferieur de Zéro",function(assert)
{
	assert.expect(1);

	var moneyFact = MoneyFactory.getDefaultInstance();

	assert.throws(function(assert) {var m=moneyFact.createMoney(-4,"EUR");}, moneyInfZero, "Money inférieur de Zéro");

}
);

QUnit.test("currency > 3 caractére Exception ", function(assert)
{
	assert.expect(1);
	var moneyFact = MoneyFactory.getDefaultInstance();
	assert.throws(function(assert) {var m=moneyFact.createMoney(4,"EURe");}, CurrencySupTrois, "Currency et supérieur à Trois");

}
);

QUnit.test("currency > 3 caractére ", function(assert)
{
	assert.expect(1);
	var moneyFact = MoneyFactory.getDefaultInstance();
	var m=moneyFact.createMoney(4,"EUR");
	var nbrCaractere = m.getCurrency().length;

	assert.ok(m.getCurrency().length == 3,"currency.length = 3");

}
);
QUnit.test("money Value or Currency is Null ", function(assert)
{
	assert.expect(2);
	var moneyFact = MoneyFactory.getDefaultInstance();
	
	assert.throws(function(assert) {var m=moneyFact.createMoney(null,"EUR");}, MoneyNullValueOrNullCurrency, "Money Null Value");
	assert.throws(function(assert) {var m=moneyFact.createMoney(5,null);}, MoneyNullValueOrNullCurrency, "Money Null Currency");
}
);
QUnit.test("money Verify ", function(assert)
{
	assert.expect(4);
	mf=MoneyFactory.getDefaultInstance();
      a=mf.createMoney(12, "EUR");
      b=mf.createMoney(14, "EUR");
			
	assert.ok(a.getValue() == 12,"a.value == 12");
	assert.ok(a.getCurrency() == "EUR","a.currency == 'EUR'");
	assert.ok(b.getValue() == 14,"b.value == 14");
	assert.ok(b.getCurrency() == "EUR","b.currency == 'EUR'");

}
);

