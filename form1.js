function fname()
{
    let c=document.f1.i1.value;
    if(isNaN(c))
    {
        document.getElementById("demo").innerHTML="ENTER A NUMERIC VALUE";
        document.getElementById("demo").style.color="red";
        document.getElementById("demo").style.fontSize="15px";
        return false;
    }
    else{
        return true;
    }
}