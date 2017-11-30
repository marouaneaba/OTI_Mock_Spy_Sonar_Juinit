package fr.ulille1.fil.odeva;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;


import org.junit.*;
import org.junit.rules.ExpectedException;
import org.mockito.InOrder;
import org.mockito.internal.matchers.Equals;

 

public class MoneyAddTestCaseFactory 
{
	private Money f12EUR,  f14EUR;
    private MoneyFactory mf;
    
    @Before
    public void init() throws UnexistingCurrencyException
    {
      mf=spy(MoneyFactory.getDefaultFactory());
      MoneyOps.setMoneyFactory(mf);
      f12EUR=mf.createMoney(12, "EUR");
      f14EUR=mf.createMoney(14, "EUR");
    }
    
    @Test
    public void MoneyOpsVerify() throws InferieurZeroException, UnexistingCurrencyException{

    	MoneyOps.simpleAdd(f12EUR,f14EUR);
    	verify(mf).createMoney(26,"EUR");
    	
    }
    
    @Test
    public void CreateMoney() throws InferieurZeroException, UnexistingCurrencyException{
    	
    	Money mn = mf.createMoney(20, "CHF");
    	assertNotNull(mn);
    	assertEquals(mn, new Money(20,"CHF"));
    }
    
    @Test
    public void SimpleMoneyOps() throws InferieurZeroException, UnexistingCurrencyException{
    	
    	Money mn = MoneyOps.simpleAdd(f12EUR,f14EUR);
    	assertNotNull(mn);
    	assertEquals(mn, new Money(26,"EUR"));
    }
    
    @Test(expected = IncompatibleCurrencyException.class)
    public void MoneyOpsIncopatibleCurrency() throws IncompatibleCurrencyException, UnexistingCurrencyException{
    	Money m14CHF = mf.createMoney(14,"CHF");
    	MoneyOps.simpleAdd(f12EUR,m14CHF);
    }
    
    @Test(expected = NullPointerException.class)
    public void MoneyOpsNullMoney() throws NullPointerException, IncompatibleCurrencyException, UnexistingCurrencyException{
    	Money m14CHF = null;
    	MoneyOps.simpleAdd(f12EUR,m14CHF);
    }
    
    @Test(expected = InferieurZeroException.class)
    public void MoneyOpsInferieurZeroException() throws InferieurZeroException, UnexistingCurrencyException{
    	Money result = null;
    	result = mf.createMoney(-20, "CHF");
    }
    
}
