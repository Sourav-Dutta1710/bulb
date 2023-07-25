const list = JSON.parse(localStorage.getItem("list")) || [];
let flag = "off";

function light(){
  if(flag==="on")
    flag="off"
  else
     flag="on"
  const date = new Date();
  document.getElementById("off").classList.toggle("hidden-item");
  document.getElementById("on").classList.toggle("hidden-item");
  document.getElementById("date").innerHTML+=`<p class="text-center">You clicked on the bulb at:${date}<br></p>`;
  document.getElementById("date").innerHTML+=`<p class="text-center">Operation Performed: Turned ${flag}<br></p>`;
}

function save(){
  list.push(document.getElementById("username").value);
  list.push("email:"+document.getElementById("email").value);
  list.push("DOB:"+document.getElementById("birth").value);
  list.push("Area:"+document.getElementById("area").value);
  list.push("Pin:"+document.getElementById("pincode").value);
  list.push("Password:"+document.getElementById("password").value);
  localStorage.setItem("list",JSON.stringify(list));
}

document.getElementById("person").innerHTML=`<p class="fs-4 pb-5 ps-3"><span class="bg-primary rounded-circle p-3">Welcome ${list[list.length-6]}</span><br></p>`;