var even=[5,8,13,17,20,23,28,30,31,10,6,3];
document.write("input values:&nbsp;"+even+"<br><br>");
document.write("Even values are:<br>");
for(let i=0;i<even.length;i++)
{
	if(even[i]%2==0)
	{
		
		document.write(even[i]+"<br>");
	}
}
		