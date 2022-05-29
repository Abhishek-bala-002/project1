function pswd()
{
    let a=document.f1.i3.value;
    let b=document.f1.i4.value;

    if(a==b)
    {
        return true;
    }
    else{
        alert("PASSWORD DISMATCHED,ENTER THE SAME PASSWORD");
        return false;
    }
}



        
          
