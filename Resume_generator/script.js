//alert("Loading");
let wecount=1;
let eqcount=1,projcount=1,skillcount=1,langcount=1;
function addNewexp() {
    if(document.getElementById('company1').value=="")
    {
        alert("Enter atleast one Experience");
    }else{
    wecount=wecount+1;
    console.log(wecount);
    let space=document.createElement("div");
    space.classList.add("mt-2");

    let company=document.createElement("input") ;
    company.type="text";
    company.classList.add("form-control");
    company.classList.add("mt-1");
    company.classList.add("we1");
    company.setAttribute("id","company"+wecount)
    company.setAttribute("placeholder","Enter company name");
    console.log(company.id);

    let position=document.createElement("input") ;
    position.type="text";
    position.classList.add("form-control");
    position.classList.add("mt-1");
    position.classList.add("we2");
    position.setAttribute("id","position"+wecount);
    position.setAttribute("placeholder","Enter your position");

    let desc= document.createElement("textarea");
    desc.classList.add("form-control");
    desc.classList.add("mt-1");
    desc.classList.add("we3");
    desc.setAttribute("id","desc"+wecount);
    desc.setAttribute("rows",3);
    desc.setAttribute("placeholder","Add a description");

    let divid=document.getElementById("we");
    let add=document.getElementById("add");

    divid.insertBefore(space,add)
    divid.insertBefore(company,add);
    divid.insertBefore(position,add);
    divid.insertBefore(desc,add);
    }
}

function addNewQual() {
    if(document.getElementById('course1').value=="")
    {
        alert("Enter atleast one Educational Qualification");
    }else{
    eqcount=eqcount+1;
    let space=document.createElement("div");
    space.classList.add("mt-2");

    let course=document.createElement("input") ;
    course.type="text";
    course.classList.add("form-control");
    course.classList.add("mt-1")
    course.setAttribute("id","course"+eqcount);
    course.setAttribute("placeholder","Enter course name");

    let institution=document.createElement("input") ;
    institution.type="text";
    institution.classList.add("form-control");
    institution.classList.add("mt-1")
    institution.setAttribute("id","institution"+eqcount);
    institution.setAttribute("placeholder","Enter insititution name");

    let board=document.createElement("input") ;
    board.type="text";
    board.classList.add("form-control");
    board.classList.add("mt-1")
    board.setAttribute("id","board"+eqcount);
    board.setAttribute("placeholder","Enter board/university name");

    let cgpa=document.createElement("input") ;
    cgpa.type="text";
    cgpa.classList.add("form-control");
    cgpa.classList.add("mt-1")
    cgpa.setAttribute("id","cgpa"+eqcount);
    cgpa.setAttribute("placeholder","Enter overall CGPA/Percentage");

    let divid=document.getElementById("eq");
    let add=document.getElementById("addeq");

    divid.insertBefore(space,add)
    divid.insertBefore(course,add);
    divid.insertBefore(cgpa,add);
    divid.insertBefore(institution,add);
    divid.insertBefore(board,add);
    }
    
}

function addNewProj() {
    if(document.getElementById('title1').value=="")
    {
        alert("Enter atleast one Project");
    }else{
    projcount++;
    let space=document.createElement("div");
    space.classList.add("mt-2");

    let title=document.createElement("input") ;
    title.type="text";
    title.classList.add("form-control");
    title.classList.add("mt-1")
    title.setAttribute("id","title"+projcount);
    title.setAttribute("placeholder","Enter project title");

    let desc= document.createElement("textarea");
    desc.classList.add("form-control");
    desc.classList.add("mt-1");
    desc.setAttribute("rows",3);
    desc.setAttribute("id","proj_desc"+projcount);
    desc.setAttribute("placeholder","Add a description");

    let divid=document.getElementById("proj");
    let add=document.getElementById("addProj");

    divid.insertBefore(space,add)
    divid.insertBefore(title,add);
    divid.insertBefore(desc,add);
    }
    
}

function addNewskill() {
    if(document.getElementById('skill1').value=="")
    {
        alert("Enter atleast one Skill");
    }else{
    skillcount++;
    let space=document.createElement("div");
    space.classList.add("mt-2");
    space.classList.add("col-md-6")

    let space1=document.createElement("div");
    space1.classList.add("row");

    let space2=document.createElement("div");
    space2.classList.add("col-md-6");
    space2.classList.add("mt-2");

    var values = ["Novice", "Intermediate", "Proficient", "Expert"];
 
    var select = document.createElement("select");
    select.classList.add("form-select");
    select.classList.add("mt-1")
    select.setAttribute('id',"dash"+skillcount)
    select.setAttribute("placeholder","Choose expertise level");
    var num=1;
    var option = document.createElement("option");
    option.text="Choose expertise level";
    select.appendChild(option);
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = num;
        option.text=val;
        num++;
        select.appendChild(option);
    }

    let skill=document.createElement("input") ;
    skill.type="text";
    skill.classList.add("form-control");
    skill.classList.add("mt-1")
    skill.classList.add("ski");
    skill.setAttribute("id","skill"+skillcount)
    skill.setAttribute("placeholder","Enter skill");

    let divid=document.getElementById("skill");
    let add=document.getElementById("addSkill");

    space.appendChild(skill);
    space1.appendChild(space);

    space2.appendChild(select);
    space1.appendChild(space2);

    divid.insertBefore(space1,add);
    /*divid.insertBefore(space,add);
    divid.insertBefore(skill,add);
    divid.insertBefore(space2,add);
    divid.insertBefore(select,add);*/
   console.log(document.getElementById("skill"+(skillcount-1)).value);
}
}

function addNewlang() {

    if(document.getElementById('lang1').value=="")
    {
        alert("Enter atleast one language");
    }else{
    langcount++;
    let space=document.createElement("div");
    space.classList.add("mt-2");

    let lang=document.createElement("input") ;
    lang.type="text";
    lang.classList.add("form-control");
    lang.classList.add("mt-1")
    lang.setAttribute("id","lang"+langcount);
    lang.setAttribute("placeholder","Enter language");

    let divid=document.getElementById("lang");
    let add=document.getElementById("addLang");

    divid.insertBefore(space,add)
    divid.insertBefore(lang,add);
    }
}
function upload(){
const profile=document.querySelector("#profile");
var upload_image="";

//profile.addEventListener('change',function(){
    
   const reader=new FileReader();
    reader.addEventListener("load",()=>{
        upload_image=reader.result;
        document.querySelector("#profileT").setAttribute("src",upload_image);

    });
    
    reader.readAsDataURL(profile.files[0]);
//});
}

let contact=document.getElementById("contact");
let name=document.getElementById("name");
let email=document.getElementById("email");
let linkedin=document.getElementById("linkedin");
let github=document.getElementById("github");
let objective=document.getElementById("objective");
let profile=document.getElementById("profile");

let profileT=document.getElementById("profileT");
let nameT=document.getElementById("nameT");
let contactT=document.getElementById("contactT");
let emailT=document.getElementById("emailT");
let linkedinT=document.getElementById("linkedinT");
let githubT=document.getElementById("githubT");
let weT=document.getElementById("weT");
let eqT=document.getElementById("eqT");
let objectiveT=document.getElementById("objectiveT");
let skillT=document.getElementById("skillT");
let projT=document.getElementById("projT");
let langT=document.getElementById("langT");

function validate(){
   
    if(contact.value!=""&&name.value!=""&&email.value!=""&&profile.value!=""){
        console.log(`${name.value}`);

       if(phoneval(contact)&&emailval(email)){
           console.log("Validated");
           
           document.getElementById("detail_form").style.display="none";
           document.getElementById("template1").style.display="block"
           updatevalues();
            //eqT.innerHTML=eqstr;

          }
        else{
        console.log("Failed");}
    }else{
        alert("Please fill all the necessary details!!");
    }
}

function updatevalues(){

    

    upload();
    if(document.getElementById('name').value==""){
        nameT.innerHTML="Your Name";
       }else{
        nameT.innerHTML=name.value;
        }

        if(document.getElementById('contact').value==""){
            document.getElementById("contactdiv").style.display="none";
            console.log("empty");
        }else{
            contactT.innerHTML=contact.value;
        }

        if(document.getElementById('email').value==""){
            document.getElementById("maildiv").style.display="none";
        }else{
            emailT.innerHTML=email.value;
        }

        if(document.getElementById('linkedin').value==""){
            document.getElementById("linkedindiv").style.display="none";
        }else{
            linkedinT.innerHTML=linkedin.value;
        }

        if(document.getElementById('github').value==""){
            document.getElementById("githubdiv").style.display="none";
        }else{
            githubT.innerHTML=github.value;
        }
        var westr="<ul>",eqstr="<ul>",projstr="<ul>",skillstr="<ul>",langstr="<ul>";
        //code for adding Work experience
        //check if the user has added atleast one experience if not hide the div
        if(document.getElementById('company1').value=="")
        {
            document.getElementById("wediv").style.display="none";
        }
        else{
            for(var i=1;i<=wecount;i++){
                
                westr+="<li style=\"font-weight:600\">"+document.getElementById('position'+i).value+"-"+document.getElementById('company'+i).value+"</li>";
                westr+=document.getElementById('desc'+i).value.replace(/\n\r?/g, '<br />');
            }
        }
        //code of adding Educational qualification
        if(document.getElementById('course1').value=="")
        {
            document.getElementById("eqdiv").style.display="none";
        }
        else{
            for(var i=1;i<=eqcount;i++){
                
                eqstr+="<li style=\"font-weight:600\">"+document.getElementById('course'+i).value+"</li>";
                eqstr+="- "+document.getElementById('institution'+i).value+"<br>"+"- "+document.getElementById('board'+i).value+"<br>"+"- "+document.getElementById('cgpa'+i).value;
            }
        }

        if(document.getElementById('title1').value=="")
        {
            document.getElementById("projdiv").style.display="none";
        }
        else{
            for(var i=1;i<=projcount;i++){
                projstr+="<li style=\"font-weight:600\">"+document.getElementById('title'+i).value+"</li>";
                projstr+=document.getElementById("proj_desc"+i).value.replace(/\n\r?/g, '<br />');
            }
        }

        //code for adding languages
        if(document.getElementById('lang1').value=="")
        {
            document.getElementById("langdiv").style.display="none";
        }
        else{
            for(var i=1;i<=langcount;i++){
                
                langstr+="<li>"+document.getElementById('lang'+i).value+"</li>";
            }
        }

        //code for adding skills
        if(document.getElementById('skill1').value=="")
        {
            document.getElementById("skilldiv").style.display="none";
        }
        else{
        addskill();
        }

        if(document.getElementById('objective').value=="")
        {
            document.getElementById("objectivediv").style.display="none";
        }
        else{
            objectiveT.innerHTML=document.getElementById("objective").value.replace(/\n\r?/g, '<br />');
        }

        westr+="</ul>";
        eqstr+="</ul>";
        projstr+="</ul>";
        skillstr+="</ul>";
        langstr+="</ul>"
        weT.innerHTML=westr;
        eqT.innerHTML=eqstr;
        langT.innerHTML=langstr;
        skillT.innerHTML=skillstr;
        projT.innerHTML=projstr;
}

function phoneval(inputtxt)
{
  var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if(inputtxt.value.match(phoneno))
    {
      return true;
    }
    else
    {
        alert("You hve entered an invalid phone number");
        return false;
    }
}

function emailval(mail) 
{
    if (mail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/))
    {
        return (true);
    }
    else{
        alert("You have entered an invalid email address!");
        return (false);
    }
}




function addskill() {
    debugger;
    // get the reference for the body
    var body = document.getElementById("skilldiv");
    var skillt=document.getElementById("skillT");
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.setAttribute("width","100%");
    tbl.setAttribute('id',"skillT");
    var tblBody = document.createElement("tbody");
    var c=1;
    // creating all cells
    for (var i = 0; i <skillcount/2; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        console.log(c);
        // if the number of skills is odd, then the function would throw an error since the second for loop runs twice.
        try{
        var str="<li>"+(document.getElementById("skill"+c).value)+" "+printdash(document.getElementById("dash"+c).value)+"</li>";
        }
        catch(e){
            continue; 
        }
        var cell = document.createElement("td");
        var cellText = document.createElement('p');
        cellText.innerHTML=str;
        c++;
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    body.replaceChild(tbl,skillt)
  }

  function printdash(dash){
      var str="";
      for(var i=0;i<dash;i++){
        str+= "<span class=\"fa fa-star checked\"></span>";
      }
      return str;
  }
  
   function printv(){
       window.print();
       
   }

   function goback(){
    document.getElementById("detail_form").style.display="block";
    document.getElementById("template1").style.display="none"
   }
  
    
