const title = document.getElementById("title")
const description = document.getElementById("description")
const container =  document.querySelector(".container");
const form = document.querySelector(".form")


const tasks = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")):[];

showAlltask();

function showAlltask(){

    tasks.forEach((value,index) => {

        const div = document.createElement("div");
        div.setAttribute("class","task");
        
        const innerdiv = document.createElement("div");
        innerdiv.setAttribute("class","target");
        div.append(innerdiv);
        
        const p = document.createElement("p");  
        p.innerText = value.title;
        innerdiv.append(p);
        
        const para = document.createElement("p");
        para.innerText= value.description;
        innerdiv.append(para);
        
        const btn = document.createElement("button");
        btn.setAttribute("class","delete");
        btn.innerText = "-";
        
        btn.addEventListener("click",()=>{
        removetask();
        tasks.splice(index,1);// removes the elements from the array and the elements also
        localStorage.setItem("tasks", JSON.stringify(tasks));
        showAlltask();


        })
        div.append(btn);
        
        container.append(div);
        
        tasks.splice()

    });

}

function removetask(){
     tasks.forEach(()=>{

        const div = document.querySelector(".task");
         div.remove();

     });
    
}


form.addEventListener("submit", (e)=>{
  e.preventDefault();
  removetask();
    tasks.push({
        title: title.value,
        description: description.value,
        
    });
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showAlltask();
    
});

