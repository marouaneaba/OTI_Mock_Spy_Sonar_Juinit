function calc() {
        this.message="";
        this.erreur = false;
}

calc.prototype.displayResult=function (resultDiv) {
        if(this.erreur){
          resultDiv.innerHTML="Result : "+this.message;
          resultDiv.setAttribute("style","color:red");
        }else{
          resultDiv.innerHTML="Result : "+this.message;
          resultDiv.setAttribute("style","color:#000000");
        }
};

calc.prototype.computeResult=function (form) {
          
        try{  
          var  m1=new money(parseInt(form.elements['v1'].value),
                            form.elements['c1'].value);
          var  m2=new money(parseInt(form.elements['v2'].value),
                            form.elements['c2'].value);


          console.log(m1);
          var  ops=form.elements['ops'].value;
          var res;
            try{
                if (ops==="ADD") {
                    res=MoneyOps.add(m1,m2);
                    this.message="Result : "+(res.toString())+"";

                } else if(ops==="SUB"){

                   res=MoneyOps.sus(m1,m2);
                    this.message="Result : "+(res.toString())+"";
                }
            }catch (e) {
                this.message=e.toString();
                this.erreur = true;
                window.alert(e.toString());
            }
        }catch (e) {
                this.message=e.toString();
                this.erreur = true;
                window.alert(e.toString());
        }
            
	};

function doComputation(form,resDiv) {
  var  c=new calc();
    c.computeResult(form);
    c.displayResult(resDiv);
}

function iSnumeric(variable)
{
   var number = new RegExp("^[0-9]+$","g");
   return number.test(variable);
}


function isCurrency(variable)
{
   var currency = new RegExp("[A-Z]{2}");
   return currency.test(variable);
}