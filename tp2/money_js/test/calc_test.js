QUnit.module("calc", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

QUnit.test("test_computeresults", function(assert)
{
        var fixture="";
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EU'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;


        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Result : 4 (EU)");
}
);


QUnit.test("test_SUB", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='4'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='1'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EU'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));

        assert.equal(c.message,"Result : 3 (EU)");
}
);

QUnit.test("test_displayResult", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");

        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.message="4 (EU)";
        c.displayResult(document.getElementById('res'));
        assert.equal(document.getElementById('res').innerHTML,"Result : 4 (EU)");
}
);

QUnit.test("test_computeresults_incompatible", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='CH'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        window.alert=function(){
             document.getElementById('res').innerHTML = c.message;  
        }
        c.computeResult(document.getElementById('form0'));
        
        assert.equal(c.message,"Devises incompatibles : 2 (EU) vs 2 (CH)");
}
);
QUnit.test("test_computeresults_incompatible", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='0'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='0'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EU'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        window.alert=function(){
             document.getElementById('res').innerHTML = c.message;  
        }
        assert.equal(c.message,"ValueEqualZero : m1 == 0 OU m2 == 0 OU les Deux");
}
);

QUnit.test("test device null", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value=''/>");
        fixture+=("<input type='text' id='c1' name='c1' value=''/>");
        fixture+=("<input type='text' id='v2' name='v2' value='0'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='CHF'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"ValueEqualZero : m1 == 0 OU m2 == 0 OU les Deux");
}
);
QUnit.test("test currency > 3 ", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='0'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EURt'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='0'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='CHF'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Currency et supérieur à Trois");
}
);
QUnit.test("test Exception coleur rouge", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='-5'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='0'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        c.displayResult(document.getElementById('res'));

        var color = document.getElementById('res');


        assert.equal(color.style.color,"red");
        assert.equal(c.message,"Money inférieur de Zéro  ");
}
);
QUnit.test("test not Exception coleur noire ", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='3'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='1'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        c.displayResult(document.getElementById('res'));


        var color = document.getElementById('res');
        assert.equal(color.style.color,"rgb(0, 0, 0)");
        assert.equal(c.message,"Result : 2 (EUR)");
}
);


QUnit.test("test money1 < money2 ", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='1'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='5'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"ErrorValue : m1 < m2");
}
);
QUnit.test("test 0 - 0 incompatible ", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='0'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='0'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"ValueEqualZero : m1 == 0 OU m2 == 0 OU les Deux");
}
);


QUnit.test("Verify si une valeur numeric", function(assert)
{
        assert.equal(iSnumeric(1), true);
         //assert.equal(isCurrency("A"), false);
         //assert.ok(true,"3e = 1e+2e");
        assert.deepEqual(true,true,"3e = 1e+2e deepEqual");
}
);



QUnit.test("verify currency",  function(assert)
{
         assert.equal(isCurrency("EU"), true);
         assert.equal(isCurrency("E"), false);
}
);
