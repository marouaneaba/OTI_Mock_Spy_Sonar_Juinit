package  fr.ulille1.fil.odeva;

import java.util.HashMap;
import java.util.Map;

public class Money {
	private int value;
	private String currency;
	

	Money(int value, String currency) 
	{
		if(value <0)
				throw new InferieurZeroException();
		else
			this.value=value;
		this.currency=currency;
	}

	public int getValue()
	{
		return this.value;
	}

	public String getCurrency()
	{
		return this.currency;
	}

    public String toString() {
     	return this.getValue()+" ("+this.getCurrency()+")";
    }
    
    public boolean _equals(Object o)throws NullPointerException{
    	
    	if(((Money)o).getValue() == this.getValue() && ((Money)o).getCurrency().equals(this.getCurrency()))
    		return true;
    	return false;
    }
    
    public boolean equals(Object o){
    	return _equals(o);
    }

}
