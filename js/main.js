const list = JSON.parse(localStorage.getItem("list")) || [];
let flag = "off";
let count = JSON.parse(localStorage.getItem("record")) || 0;

function light(){
  const date = new Date();
  count++;
  if(flag==="on")
    flag="off";
  else
     flag="on";
  document.getElementById("off").classList.toggle("hidden-item");
  document.getElementById("on").classList.toggle("hidden-item");
  document.getElementById("date").innerHTML+=`<p class="text-center">You clicked on the bulb at:${date}</p>;
  <p class="text-center">Operation Performed: Turned ${flag}</p>`;
  document.getElementById("operation").innerHTML=`${count}times`
  localStorage.setItem("record",count);
}

function save(){
  if(!document.getElementById("username").value || 
  !document.getElementById("email").value || 
  !document.getElementById("birth").value ||
  !document.getElementById("area").value ||
  !document.getElementById("pincode").value ||
  !document.getElementById("password").value
  )alert("Empty Fields")
  else{
    window.location.href = "bulb.html";
    list.push(document.getElementById("username").value);
    list.push("email:"+document.getElementById("email").value);
    list.push("DOB:"+document.getElementById("birth").value);
    list.push("Area:"+document.getElementById("area").value);
    list.push("Pin:"+document.getElementById("pincode").value);
    list.push("Password:"+document.getElementById("password").value);
    localStorage.setItem("list",JSON.stringify(list));
  }

}

document.getElementById("operation").innerHTML=`${count}times`
document.getElementById("person").innerHTML=`<p class="fs-4 pb-5 ps-3"><span class="bg-primary rounded-circle p-3">Welcome ${list[list.length-6]}</span><br></p>`;