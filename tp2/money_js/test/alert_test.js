QUnit.module("alert", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

QUnit.test("test_computeresults", function(assert)
{
        var fixture="";
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='-2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='5'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        spy(window,"alert");
        assert.ok(window.alert.calledOne);

}
);
