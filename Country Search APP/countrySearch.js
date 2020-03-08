





$(document).ready(function(){
    $(document).ajaxStart(function(){
  
      $("#wait").css("display", "block");
    });
    $(document).ajaxComplete(function(){
      $("#wait").css("display", "none")
    
    });
});


let btn=document.getElementById("button")

let search=document.getElementById("search")
let tableHead=document.getElementById("tableHead")
tableHead.style.visibility = "hidden";
btn.addEventListener(`click`,function(){
   
    event.preventDefault();

   
    $.ajax({
        
        url:`https://restcountries.eu/rest/v2/name/${search.value}`,
       
       
        success: function(response){
            
            let table=document.getElementById("table")
            table.innerHTML="";
           for(let i=0;i<response.length;i++){
               
            let flag=response[i].flag

            let name=response[i].name
            let population=response[i].population
            let area=response[i].area
            let capital=response[i].capital
            let language=response[i].languages[0].name
            let currency=response[i].currencies[0].name
            tableHead.style.visibility = "visible";

            
            
                
            let table=document.getElementById("table")
            
            table.innerHTML+=`<tr><td class="flag-row"><img src="${flag}" style="width:150px" alt=""></td>
            <td>${name}</td> <td style="">${population}</td> <td>${area}km2</td> <td>${capital}</td> <td>${language}</td><td>${currency}</td></tr>`
          
            
           
            
             }},
            
        error: function(response){
            console.log("Something is not right!");
            console.log(response.responseText);
            alert("Please insert a Country Name")
        }
    })
})





