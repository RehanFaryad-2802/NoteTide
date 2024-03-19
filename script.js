let changeColor = (e) => {
  let target = document.querySelector(".note");
  let color = document.querySelectorAll('[class^="bg"]');
  color.forEach((e) => {
    e.addEventListener("click", (j) => {
      let text = j.target.closest(".note");
      text.querySelector(".textarea").style.backgroundColor = j.target.value;
    });
  });
};

let insert = (e) => {
  let tag = document.createElement("div");
  tag.classList.add("note");
  tag.classList.add("b");
  tag.classList.add("m5");
  tag.classList.add("f25");
  let html = `
    <div class="header f jcsb p">
    <div class="back p f">
    <button class="bg1" value="#e5ff00"></button>
    <button class="bg2" value="#77ff00"></button>
    <button class="bg3" value="#05ebd7"></button>
    <button class="bg4" value="#ffae00"></button>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x cp close"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    </div>
    <div class="contant">
    <textarea name="" class="textarea" cols="30" rows="10"></textarea>
    </div>
    `;
  tag.innerHTML = html;
  let all_notes = document.querySelector(".all_notes");
  all_notes.appendChild(tag);
};
document.querySelector(".creat").addEventListener("click", (e) => {
  insert();
  changeColor();
  close();
});
document.querySelector(".save").addEventListener("click", (e) => {
    save();
});
let save = (e) => {
    let text = document.querySelector(".all_notes").innerHTML;
    let textarea = document.querySelectorAll("textarea");
    let content = [];
    for (let j = 0; j < textarea.length; j++) {
      const element = textarea[j].value;
      content.push(element);
    }
    localStorage.setItem("text", text);
    localStorage.setItem("content", content);
    document.querySelector(".save").textContent = "Saved!";
    setTimeout(() => {
        document.querySelector(".save").textContent = "Save";
    }, 1500);
};
window.addEventListener("load", (e) => {
  let text = localStorage.getItem("text");
  let all_notes = document.querySelector(".all_notes");
  all_notes.innerHTML = text;
  let contant = localStorage.getItem("content");
  contant = contant.split(",");
  let textarea = document.querySelectorAll("textarea");
  for (let q = 0; q < textarea.length; q++) {
    const element = textarea[q];
    element.value = contant[q];
    // console.log(element)
  }
  changeColor();
  close();
});
let close = () => {
  document.querySelectorAll(".close").forEach((e) => {
    e.addEventListener("click", (j) => {
      let a = j.target.closest(".note").remove();
      console.log(a);
    });
  });
};
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key == "s") {
    e.preventDefault()
    save();
  }
});
