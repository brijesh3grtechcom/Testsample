function data_set_object(key,value)
/* function for strong json object */
{
	value = JSON.stringify(value);
try
{
	 localStorage.setItem(key, value);
}
catch (e)
{
}
	try/*for nokia s60*/
	{
		 widget.setPreferenceForKey(value, key);
	}
	catch (ex)
	{
		//alert("data_set widget.setPreferenceForKey");
	}
		try/*for nokia s40*/
		{
			widget.preferences.setItem(key,value);
		}
		catch (ez)
		{
		}
			try/*cookies*/
				{
					setCookie(key,value,"2000");
					
				}
				catch (ey)
				{
				}
	



}


function data_get_object_or_string(key,defaultVal)
/*function for retriving json object*/
{
	try
	{
		
		var result = JSON.parse(localStorage.getItem(key));
		//alert("get data from local storage"+result);
		if (result == null || result=="" || result == undefined || result == "null")
	{
		return defaultVal;
	}
	else{
		return result;
	}
		
	}
	catch (e)
	{
	}
		try /*for nokia s60*/
		{
			
			var result = eval('('+widget.preferenceForKey(key)+ ')');
			//alert("get data from widget s60 storage"+result);
			if (result == null || result=="" || result == undefined || result == "null")
	{
		return defaultVal;
	}
	else{
		return result;
	}
			
		}
		catch (ex)
		{
		}
			try /*for nokia s40*/
			{
				
			var result = eval('('+widget.preferences.getItem(key)+ ')');
			//alert("get data from widget s40 storage"+result);
			if (result == null || result=="" || result === undefined || result == "null")
	{
		return defaultVal;
	}
	else{
		return result;
	}
			
			}
		catch (ez)
			{
			;
			}
				try/*cookies*/
				{
				var result=	JSON.parse(getCookie(key));
				if (result == null || result=="" || result === undefined || result == "null")
	{
		return defaultVal;
	}
	else{
		return result;
	}
				}
				catch (ey)
				{
				}
	

}

function data_set_string(key, value)
/* function for storing string data*/
{
	
	try
	{
		localStorage.setItem(key, value);
	}
	catch (e)
	{ }
		try/*for nokia s60*/
		{
			widget.setPreferenceForKey(value, key);
		}
		catch (ex)
		{
		}
			try/*for nokia s40*/
			{
			widget.preferences.setItem(key,value);
			}
		catch (ez)
			{
			}
				try/*cookies*/
				{
					 
					setCookie(key,value,365);
					
				}
				catch (ey)
				{
				}
	
}

function data_get_string(key,defaultVal)
 
 //functino for retriving string data
{
	
	try
	{
		var result  = localStorage.getItem(key);
	
	if (result == null || result== "" || result === undefined || result == "null")
	{
		return defaultVal;
	}
	else{
		
		return result;
	}
	}
	catch (e)
	{}
		try//for nokia s60
		{
			//alert('sac');
			var result = widget.preferenceForKey(key);
			//alert("alert from s60 of reuslt"+ result);
			if (result == null || result=="" || result === undefined || result == "null")
	{
		return defaultVal;
	}
	else{
		return result;
	}
		}
		catch (ex)
		{
			 
		}
			try//for nokia s40
			{
			var result = widget.preferences.getItem(key);
			//alert("alert from s40 of reuslt"+ result);
			if (result == null || result=="" || result === undefined || result == "null")
	{
		return defaultVal;
	}
	else{
		return result;
	}
			}
		catch (ez)
			{
			
			}
				try/*cookies*/
				{
				var result=	getCookie(key);
				if (result == null || result=="" || result === undefined || result == "null")
	{
		return defaultVal;
	}
	else{
		return result;
	}
				}
				catch (ey)
				{
				}
	

}