let inpt = document.getElementById("inpt");
let add_btn = document.getElementById("add_btn");
let ul = document.getElementById("ul");
let no_txt = document.getElementById("no_txt");
let update = document.getElementById("update");
let up_inpt = document.getElementById("up_inpt");
let update_btn = document.getElementById("update_btn");
let no_txt_btn=document.getElementById("no_txt_btn")

function add_task() {
  if (inpt.value === "") {
    no_txt.classList.add("no_txt_1");
  } else {
    
      let cntr = document.createElement("div");
      cntr.classList.add("cntr");
      ul.appendChild(cntr);

      let li = document.createElement("li");
      let div = document.createElement("div");
      let cross_img = document.createElement("img");
      cross_img.className="img_click"
      cross_img.src = "./assets/x.svg";
      let edith_img = document.createElement("img");
      edith_img.className="img_click"
      edith_img.src = "./assets/edith.svg";

      cntr.appendChild(li);
      li.classList.add("add");
      li.innerHTML = inpt.value;

      div.classList.add("div");
      cntr.appendChild(div);

      cross_img.classList.add("cross_img");
      div.appendChild(cross_img);

      edith_img.classList.add("edith_img");
      div.appendChild(edith_img);

      li.addEventListener("click", (e) => {
        if ((e.target.tagName = "li")) li.classList.toggle("checked");
      });

      cross_img.addEventListener("click", () => {
        cntr.remove();
      });

      edith_img.addEventListener("click", () => {
        update.classList.add("update_yes");
        
        update_btn.onclick = task_update;
        up_inpt.onkeypress = (e)=>{
          if(e.key==="Enter"){
            task_update()
          }
        }
        function task_update() {
          if (up_inpt.value === "") {
            alert("Please enter a valid task!");
          } else {
            li.textContent = up_inpt.value;
            up_inpt.value = "";
            update.classList.remove("update_yes");
          }
        }
      });

      inpt.value = "";
    
  }
}

add_btn.addEventListener("click", add_task);
inpt.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    add_task();
  }
});



function remove_no_txt() {
  no_txt.classList.remove("no_txt_1");
}
