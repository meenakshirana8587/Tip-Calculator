//object containing the methods for increasing and decresing the tip percent 
let tipPercent = {
   
    increment: function() {
       document.getElementById("changetip").stepUp();
       calculate();
  },
  decrement: function() {
    document.getElementById("changetip").stepDown();
    calculate();
 
  }
 };
  //object containing methods for increasing and decreasing the no of people
 
 let noOfPerson = {
    
    increment: function() {
       document.getElementById("changepeople").stepUp();
       calculate();
  },
  decrement: function() {
    document.getElementById("changepeople").stepDown();
    calculate();
 
  }
 };
 // method to calculate the output
 
 function calculate() {
     let bill= document.getElementById("bill").value;// getting the value of bill amount entered
     let tip= document.getElementById("changetip").value;// the value of tip percent entered
     let people= document.getElementById("changepeople").value;// getting the value of number of persons entered

     if(isNaN(bill))// if bill amount entered is not a number
     {
         alert("bill amount must be a number");
     }
     else if(bill<0)// if bill amount entered is less than 0
     {
        alert("bill amount must be greater than 0");
     }
     else  if(people<=0)// if no. of people is less than or equal to 0
     {
         alert("no of person should be greater than 0");
         let total=0;
     }
     else if(tip<0)// if tip percent is less than 0
     {
         alert("tip amount must be atleast 0");
     }
     else if(people%1!= 0)// if no. of person entered is in fractions
     {
         alert("no. of persons should not be in fraction");
     }
     else if(bill.length==0)// if bill amount field is empty
     {
         alert("please enter bill amount");
     }
     
     else
     {
            let tipperperson = ((bill * tip) / 100) / people;
            //round to two decimal places
            tipperperson = Math.round(tipperperson * 100) / 100;
            //next line allows us to always have two digits after decimal point
            tipperperson = tipperperson.toFixed(2);
            document.getElementById("tipperperson").innerHTML = "$" + tipperperson;
            
            
            total = (bill / people) + parseFloat(tipperperson);
            //round to two decimal places
            total = Math.round(total * 100) / 100;
            //next line allows us to always have two digits after decimal point
            total = total.toFixed(2);
            document.getElementById("totalperperson").innerHTML = "$" + total;

         
    
        }
 }
 




    