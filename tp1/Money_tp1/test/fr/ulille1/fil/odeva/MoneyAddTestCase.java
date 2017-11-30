package fr.ulille1.fil.odeva;

//import static org.mockito.Mockito.*;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;


import org.junit.*;
import org.junit.internal.Throwables;
import org.mockito.InOrder;
import org.mockito.internal.matchers.Equals;

/*
 * Unit test for simple App.
 */
public class MoneyAddTestCase
{
    private Money f12EUR,  f14EUR;
    private MoneyFactory mf;
    
    @Before
    public void init() throws UnexistingCurrencyException
    {
      mf=MoneyFactory.getDefaultFactory();
      f12EUR=mf.createMoney(12, "EUR");
      f14EUR=mf.createMoney(14, "EUR");
    }

    /**
     * simpleAdd
     */
    @Test
    public void simpleAdd() throws UnexistingCurrencyException
    {
        Money expected=mf.createMoney(26, "EUR");
        Money result=MoneyOps.simpleAdd(f12EUR,f14EUR);
        assertEquals(expected,result);
    }
    
    @Test
    public void simpleAddNotNull() throws UnexistingCurrencyException
    {
        Money expected=mf.createMoney(26, "EUR");
        Money result=MoneyOps.simpleAdd(f12EUR,f14EUR);
        assertNotNull(result);
    }
    
    @Test
    public void simpleAddResultSupOrEqual() throws UnexistingCurrencyException
    {           
        Money mn1=mf.createMoney(10, "EUR");
        Money mn2=mf.createMoney(16, "EUR");
        Money result_mn1_mn2=MoneyOps.simpleAdd(mn1,mn2);
        // toujours les résultat >= la valeurs d'une money Ex : 16Eur+0Eur = 16Eur
        assertTrue((result_mn1_mn2.getValue()>=mn1.getValue()));
        assertTrue((result_mn1_mn2.getValue()>=mn2.getValue()));
        
        Money expected=mf.createMoney(30, "EUR");
        Money result=MoneyOps.simpleAdd(f12EUR,f14EUR);
        assertTrue((expected.getValue()>result.getValue()));
        
    }
    
    @Test(expected = IncompatibleCurrencyException.class)
    public void simpleAddEqualCurrency() throws UnexistingCurrencyException
    {
    	Money f14CHF = mf.createMoney(12, "CHF");
        Money expected=mf.createMoney(30, "EUR");
        Money result=MoneyOps.simpleAdd(f12EUR,f14CHF);
        assertFalse((expected.getCurrency() != f14CHF.getCurrency()));
    }
    
    @Test
    public void simpleAddDiffCurrencyNotEqual() throws UnexistingCurrencyException
    {
        Money m1 = mf.createMoney(26, "EUR");
        Money m2 = mf.createMoney(26, "CHF");
        assertFalse(m1.equals(m2));
    }
    
    @Test
    public void simpleAddDiffValueNotEqual() throws UnexistingCurrencyException
    {
        Money m1 = mf.createMoney(26, "EUR");
        Money m2 = mf.createMoney(20, "EUR");
        assertFalse(m1.equals(m2));
    }
    
    @Test
    public void simpleAddNull() throws UnexistingCurrencyException
    {
    	 
        Money m1 = mf.createMoney(26, "EUR");
        
        try{
        	
        	Money m2 = null;
        	Money result=MoneyOps.simpleAdd(m1,m2);
        	assertNull(m2);
            assertNotNull(m1);
            assertNotNull(result);// declencher exception
            
        }catch(NullPointerException e){
        	
        }
        
    }
    
    @Test
    public void simpleAddEqual() throws UnexistingCurrencyException
    {
        Money m1 = mf.createMoney(26, "EUR");
        Money m2 = mf.createMoney(26, "EUR");
        assertTrue(m1.equals(m2));
    }
    
    @Test
    public void simpleMoneyNull() throws UnexistingCurrencyException
    {
        Money m1 = mf.createMoney(26, "EUR");
        Money m2 = null;
        assertNull(m2);
        assertNotNull(m1);
    }
    
    
    
    @Test
    public void TestMock(){
    	Money f10EUR =  mock(Money.class);
    	when(f10EUR.getValue()).thenReturn(1);
    	when(f10EUR.getCurrency()).thenReturn("EUR");
    	
    	Money f10CHF =  mock(Money.class);
    	when(f10CHF.getValue()).thenReturn(1);
    	when(f10CHF.getCurrency()).thenReturn("EUR");
    	when(f10EUR._equals(f10CHF)).thenCallRealMethod();
    	
    	f10EUR._equals(f10CHF);
    	InOrder inOrder=inOrder(f10EUR,f10CHF);
    	
    	
    	inOrder.verify(f10CHF).getValue();
    	inOrder.verify(f10EUR).getValue();
    	inOrder.verify(f10CHF).getCurrency();
    	inOrder.verify(f10EUR).getCurrency();
    	
    }
    
    @Test
    public void TestVerify(){
    	Money f10EUR =  spy(new Money(1,"EUR"));
    	f10EUR._equals(f10EUR);
    	
    	verify(f10EUR,times(2)).getValue();
    	verify(f10EUR,times(2)).getCurrency();
    	
    	
    	
    }
    
    @Test
    public void simpleAdd_mock() throws IncompatibleCurrencyException, UnexistingCurrencyException{
    	Money a10EURs = mock(Money.class);
    	doReturn(10).when(a10EURs).getValue();
    	doReturn("EUR").when(a10EURs).getCurrency();
    	
    	Money a12EURs = mock(Money.class);
    	doReturn(12).when(a12EURs).getValue();
    	doReturn("EUR").when(a12EURs).getCurrency();
    	
    	Money result = MoneyOps.simpleAdd(a10EURs, a12EURs);
    	assertEquals(result.getValue(), 22);
    	assertEquals(result.getCurrency(), "EUR");
    	
    }
    
    @Test
    public void VerifyOrder(){
    	Money m1 = spy(new Money(1,"EUR"));
    	Money m2 = spy(new Money(2,"EUR"));
    	
    	m2._equals(m1);
    	verify(m1).getValue();
    	verify(m2).getValue();
    	verify(m1,times(0)).getCurrency();
    	verify(m1,times(0)).getCurrency();
    	
    	InOrder inOrder = inOrder(m1,m2);	
    	inOrder.verify(m1).getValue();
    	inOrder.verify(m2).getValue();

    }
    
    
    @Test
    public void MoneyEquals() throws IncompatibleCurrencyException, UnexistingCurrencyException{
    	Money a10EURs = mock(Money.class);
    	doReturn(10).when(a10EURs).getValue();
    	doReturn("EUR").when(a10EURs).getCurrency();
    	
    	Money a10EURm = mock(Money.class);
    	doReturn(10).when(a10EURm).getValue();
    	doReturn("EUR").when(a10EURm).getCurrency();
    	System.out.println(a10EURm.getValue()+" "+a10EURm.getCurrency());
    	System.out.println(a10EURs.getValue()+" "+a10EURs.getCurrency());
    	assertTrue(a10EURm.getValue() == a10EURs.getValue());
    	assertTrue(a10EURm.getCurrency() == a10EURs.getCurrency());
    }
    
    @Test
    public void MoneyOps() throws IncompatibleCurrencyException, UnexistingCurrencyException{
    	MoneyOps moneyOps = mock(MoneyOps.class);
    	Money expected=mf.createMoney(22, "EUR");
    	
    	Money a10EUR = mock(Money.class);
    	doReturn(10).when(a10EUR).getValue();
    	doReturn("EUR").when(a10EUR).getCurrency();
    	
    	Money a12EUR = mock(Money.class);
    	doReturn(12).when(a12EUR).getValue();
    	doReturn("EUR").when(a12EUR).getCurrency();
    	
        Money result=MoneyOps.simpleAdd(a10EUR,a12EUR);
        //System.out.println(result.getValue()+" "+result.getCurrency());
        assertNotNull(result);
        assertTrue(result._equals(expected));
    }
    
    @Test
    public void MoneyOps2() throws IncompatibleCurrencyException, UnexistingCurrencyException{
    	
    	MoneyOps moneyOps = mock(MoneyOps.class);
    	Money expected=mf.createMoney(20, "EUR");
    	
    	Money a10EUR = mock(Money.class);
    	doReturn(10).when(a10EUR).getValue();
    	doReturn("EUR").when(a10EUR).getCurrency();
    	
    	Money a12EUR = mock(Money.class);
    	doReturn(12).when(a12EUR).getValue();
    	doReturn("EUR").when(a12EUR).getCurrency();
    	
        Money result=MoneyOps.simpleAdd(a10EUR,a12EUR);
        //System.out.println(result.getValue()+" "+result.getCurrency());
        assertNotNull(result);
        assertFalse(result._equals(expected));
        //obj+null;obj+obj return false;
    }
    
    @Test(expected = NullPointerException.class)
    public void MoneyOps3() throws IncompatibleCurrencyException, UnexistingCurrencyException,NullPointerException{
    	MoneyOps moneyOps = mock(MoneyOps.class);
    	Money expected=mf.createMoney(20, "EUR");
    	
    	Money a10EUR = mock(Money.class);
    	doReturn(10).when(a10EUR).getValue();
    	doReturn("EUR").when(a10EUR).getCurrency();
    	
    	Money a12EUR = null;
		Money result = null;

    		
    		result = MoneyOps.simpleAdd(a10EUR,a12EUR);

        
        assertNull(result);
    }
    
}
