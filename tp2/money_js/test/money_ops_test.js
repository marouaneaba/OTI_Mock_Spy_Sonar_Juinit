QUnit.module("moneyOps", {
//	setup:function(assert){alert("setup moneyOps individual test");},
//	teardown:function(assert){alert("teardown moneyOps individual test");}
});

QUnit.test("test simple add", function(assert)
{
	assert.expect(2);

	var m1=new money(1,"EUR");
  var m2=new money(2,"EUR");
  var m3=new money(3,"EUR");

	assert.ok(m3.equals(MoneyOps.add(m1,m2)),"3e = 1e+2e");
	assert.deepEqual(m3,MoneyOps.add(m1,m2),"3e = 1e+2e deepEqual");
}
);


QUnit.test("test multi devise add", function(assert)
{
	var m1=new money(1,"EUR");
  var m2=new money(2,"CHF");
	assert.throws(function(assert) {var m3=MoneyOps.add(m1,m2)}, DevisesIncompatibleExc, "Devises Incompatibles");
}
);

QUnit.test("test value sustraction", function(assert)
{
	var m1=new money(1,"EUR");
  var m2=new money(8,"EUR");
	assert.throws(function(assert) {var m3=MoneyOps.sus(m1,m2)}, ErrorValue, "ErrorValue m1 < m2");
}
);

QUnit.test("test value sustraction equal Zéro", function(assert)
{
	var m1=new money(0,"EUR");
  var m2=new money(0,"CHF");
	assert.throws(function(assert) {var m3=MoneyOps.sus(m1,m2)}, ValueEqualZero, "ValueEqualZero m1 ==0 OU m2 == 0 OU les Deux");
}
);

QUnit.test("test simple sus", function(assert)
{
	assert.expect(2);

	var m1=new money(5,"EUR");
  var m2=new money(3,"EUR");
	var m3=new money(2,"EUR");

	assert.ok(m3.equals(MoneyOps.sus(m1,m2)),"2e = 5e-3e");
	assert.deepEqual(m3,MoneyOps.sus(m1,m2),"2e = 5e-3e deepEqual");
}
);

QUnit.test("test multi devise sus", function(assert)
{
	var m1=new money(4,"EUR");
  var m2=new money(2,"CHR");
	assert.throws(function(assert) {var m3=MoneyOps.sus(m1,m2)}, DevisesIncompatibleExc, "Devises Incompatibles");
}
);
// si v1 < v2 and v1-v2
QUnit.test("test multi devise sus 2", function(assert)
{
	var m1=new money(1,"EUR");
  var m2=new money(4,"EUR");
	assert.throws(function(assert) {var m3=MoneyOps.sus(m1,m2)}, ErrorValue, "ErrorValue : m1 < m2");
}
);
//0-0
QUnit.test("test sus Zéro - Zéro", function(assert)
{
	var m1=new money(0,"EUR");
  var m2=new money(0,"EUR");
	assert.throws(function(assert) {var m3=MoneyOps.sus(m1,m2)}, ValueEqualZero, "Devises incompatibles : ");
}
);
//test une sus : 3-2=1 (avec deep and ok)
QUnit.test("test simple Sus", function(assert)
{
	assert.expect(2);

	var m1=new money(3,"EUR");
  var m2=new money(2,"EUR");
  var m3=new money(1,"EUR");

	assert.ok(m3.equals(MoneyOps.sus(m1,m2)),"1e = 3e-2e");
	assert.deepEqual(m3,MoneyOps.sus(m1,m2),"3e = 1e+2e deepEqual");
}
);


