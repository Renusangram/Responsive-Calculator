// Author:Sangram
// Assignment:Addskill week 5


function assignvalue(value) {
    
    var assignedvalue = value.getAttribute("data-value");
    //alert("Value is " + assignedvalue+ ".");
    var resultfield=document.getElementById("resultfield").value;
    //var =document.getElementById("blink").innerHTML;
    
    if(assignedvalue==null)
    {
        assignedvalue= value.getAttribute("data-op");

     
    }
    var res = resultfield.charAt(resultfield.length-1);
    var regex =  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
     // alert(resultfield);
       if(resultfield=="")
    {
      if(regex.test(assignedvalue))
      {
      assignedvalue="";
      }
    }
    if(regex.test(res) && regex.test(assignedvalue))
    {
       // alert(res);
        //assignedvalue="";
        resultfield=resultfield.substring(assignedvalue, resultfield.length - 1);
    }



    document.getElementById("resultfield").value =resultfield+assignedvalue; 
    
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    
    var p=fetch("https://myjson.dit.upm.es/api/bins/hmc");
    
    p.then((resp)=>{
    return resp.json();
  }).then(data => {
    var jsonData=data;
for(var i in jsonData){
    var key = i;
    var val = jsonData[i];
    var k=0;
    for(var j in val){
      
        var sub_key = j;
        var sub_val = val[j].title;
if(k<2){
         document.getElementById("dynamicfield1").innerHTML += '<div id="" class="Alloperator" onclick="assignvalue(this)" title="'+val[j].title+'" data-op="'+val[j].operation+'"  >'+val[j].title+'</div>';
       // console.log(sub_val);
}
if(k>1&&k<4){
         document.getElementById("dynamicfield2").innerHTML += '<div id="" class="Alloperator" onclick="assignvalue(this)" title="'+val[j].title+'" data-op="'+val[j].operation+'"  >'+val[j].title+'</div>';
       // console.log(sub_val);
}
if(k>3&&k<6){
         document.getElementById("dynamicfield3").innerHTML += '<div id="Result" onclick="infixexp()" title="'+val[j].title+'" data-op="'+val[j].operation+'"  >'+val[j].title+'</div>';
        
       // console.log(sub_val);
}
k++;
    }
}
  
  //console.log(data);
}).catch((error)=>{
  var jsonData={"data":[{"title":"Mul","operation":"*"},{"title":"Div","operation":"/"},{"title":"Add","operation":"+"},{"title":"Sub","operation":"-"},{"title":"Res","operation":"="}]};

  for(var i in jsonData){
    var key = i;
    var val = jsonData[i];
    var k=0;
    for(var j in val){
      
        var sub_key = j;
        var sub_val = val[j].title;
if(k<2){
         document.getElementById("dynamicfield1").innerHTML += '<div id="" class="Alloperator" onclick="assignvalue(this)" title="'+val[j].title+'" data-op="'+val[j].operation+'"  >'+val[j].title+'</div>';
       // console.log(sub_val);
}
if(k>1&&k<4){
         document.getElementById("dynamicfield2").innerHTML += '<div id="" class="Alloperator" onclick="assignvalue(this)" title="'+val[j].title+'" data-op="'+val[j].operation+'"  >'+val[j].title+'</div>';
       // console.log(sub_val);
}
if(k>3&&k<6){
         document.getElementById("dynamicfield3").innerHTML += '<div id="Result" onclick="infixexp()" title="'+val[j].title+'" data-op="'+val[j].operation+'"  >'+val[j].title+'</div>';
        
       // console.log(sub_val);
}
k++;
    }
}

   // console.log(error);
  });

});


function infixexp(){
   var infixinput=document.getElementById("resultfield").value;

document.getElementById("resultfield").value=eval(infixinput);
}