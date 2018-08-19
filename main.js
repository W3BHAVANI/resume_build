//XMLHttpRequest
//function json(file,callback)
//{
	//var xhr=new XMLHttpRequest();
	//xhr.overrideMimeType("application/json");
	//xhr.open("GET",file,true);
	//xhr.onreadystatechange=function(){
		//if (xhr.readyState=== 4 && xhr.status=== 200) {
			//callback(xhr.responseText);
		//}
	//}
	//xhr.send(null);
//}
//json("data.json",function(text){
	//let d=JSON.parse(text);
	//console.log(d);
	//basics(d.basicdetails);
	//edu(d.education);
	//techskills(d.skills);
	//carrierplan(d.carrier);
	//ache(d.Achivements);
	//desc(d.Description);



//})
//Fetch API
fetch("data.json")
.then(function(responce){
	return responce.json();

})
.then(function(d){
	console.log(d);
	basics(d.basicdetails);
	edu(d.education);
	techskills(d.skills);
	carrierplan(d.carrier);
	ache(d.Achivements);
	desc(d.Description);

})

var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(cse){

var i=document.createElement("img");
i.src=cse.image;
l.appendChild(i);

var nam=document.createElement("h3");
nam.textContent=cse.name;
l.appendChild(nam);

var em=document.createElement("h2");
em.textContent=cse.email;
l.appendChild(em);

var p=document.createElement("h4");
p.textContent=cse.pno;
l.appendChild(p);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);
function edu(e){
	var e1=document.createElement("div");
	e1.classList.add("educa");
	r.appendChild(e1);
	var head=document.createElement("h2");
	head.textContent="Education Details";
	e1.appendChild(head);
	head.appendChild(document.createElement("HR"));
	for (var i = 0; i < e.length; i++) {

	var h=document.createElement("h2");
	h.textContent=e[i].course;
	e1.appendChild(h);

	var u=document.createElement("ul");
	e1.appendChild(u);

	var list=document.createElement("li");
	list.textContent=e[i].college;
	u.appendChild(list);


	var list1=document.createElement("li");
	list1.textContent=e[i].percentage;
	list.appendChild(list1);


	
	}

}
function techskills(s){
	var d=document.createElement("div");
	d.textContent="skills set";
	r.appendChild(d);
	d.appendChild(document.createElement("HR"));
	var tab=document.createElement("table");
	var row="";
	for(var i=0; i<s.length; i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>"
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function carrierplan(c){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="carrier para";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var p=document.createElement("para");
	p.textContent=c.ca;
	c1.appendChild(p);


}
function ache(a){
	var d=document.createElement("div");
	d.setAttribute("id","Achivements");
	r.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Achivements:";
	d.appendChild(h);
	h.appendChild(document.createElement("HR"));
	for (i in a){
		var u=document.createElement("ul");
		d.appendChild(u);
		var list=document.createElement("li");
		list.textContent=a[i];
		u.appendChild(list);
	}
}
	function desc(D){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="Description para";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var p=document.createElement("para");
	p.textContent=D.des;
	c1.appendChild(p);
        }
