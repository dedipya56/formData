function onFormSubmit(){
    var formData=read();
    insert(formData);
    document.getElementById('form').reset();
}
function read(){
    var formData={};
    formData["name"]=document.getElementById("name").value;
    formData["mail"]=document.getElementById("mail").value;
    formData["country"]=document.querySelector("#country").value;
    formData["gender"]=document.querySelector('input[name="gender"]:checked').value;
    formData["dob"]=document.getElementById("dob").value;
    formData["pic"]=document.getElementById("pic").value;
    formData["web"]=document.getElementById("web").value;
    var hobbies=[];
    var checks=document.getElementsByClassName("hobbies");
    for(var i=0;i<3;i++){
        if(checks[i].checked){
            hobbies +=checks[i].value +", ";
        }
    }
    formData["hobbies"]=hobbies;
    
    return formData;
}

function insert(data){
    var table=document.getElementById("stulist").getElementsByTagName('tbody')[0];
    var newrow=table.insertRow(table.length);
    cell1=newrow.insertCell(0);
    cell1.innerHTML=`<pre>${data.name} 
    <a href=${data.web}>Click here</a> 
    ${data.dob} 
    ${data.mail} 
    ${data.gender} 
    ${data.country}  
    ${data.hobbies} </pre>`;
    cell1=newrow.insertCell(1);
    cell1.innerHTML+=`<img src=${data.pic} style='width: 150px '> `;
   
    
}
function clear(){
    document.getElementById("stulist").style.display='hidden';
}