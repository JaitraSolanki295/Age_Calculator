let btn=document.querySelector("button");
let input_date=document.querySelector("input");
let pera=document.querySelector("p");


const calculateage=()=>{


    let birthdate=new Date(input_date.value);
    console.log(birthdate);
    // console.log(typeof birthdate)
    if(!input_date.value)
    {
        alert("Please Enter the Birth Date");;
        return;
    }
    let d1=birthdate.getDate();
    let m1=birthdate.getMonth();
    let y1=birthdate.getFullYear();

    let today=new Date();
    let d2=today.getDate();
    let m2=today.getMonth();
    let y2=today.getFullYear();

    let y3,m3,d3;

    y3=y2-y1;

    if(m2>=m1)
    {
        m3=m2-m1;
    }
    else{
        y3--;
        m3=12+m2-m1;
    }

    if(d2>=d1)
    {
        d3=d2-d1;
    }
    else{
        m3--;
        d3=getDays(y1,m1)+d2-d1;

    }
    if(m3<0)
    {
        m3=11;
        y3--;
    }

    console.log(y3,m3,d3);
    pera.innerText=`Your age is ${y3} years ${m3} months and ${d3} days.`

    
    
}

function getDays(year,month)
{
   return new Date(year,month,0).getDate(); 
     //give the total days in the particular month of the year which we passed in argument.
     //by getdate() we get the date of the our date ex- 12/03/2005=>gives 12
     //by getmonth() we get the month of the our date ex-12/03/2005=>gives 2 because in javascript jan->0,feb->1,march->2
     //by getFullyear() we get the year of the our date ex-12/03/2005=>gives 2005
}



btn.addEventListener("click",calculateage);

