let changeColor = (e) => {
  let color = document.querySelectorAll('[class^="bg"]');
  color.forEach((e) => {
    e.addEventListener("click", (j) => {
      let text = j.target.closest(".note");
      text.querySelector(".textarea").style.backgroundColor = j.target.value;
      text.querySelector(".header").style.backgroundColor = j.target.value;
      text.style.backgroundColor = j.target.value;
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
  <div class="header f jcsb aic p">
    <div class="back p f">
        <button class="bg1" value="#e5ff00"></button>
        <button class="bg2" value="#77ff00"></button>
        <button class="bg3" value="#05ebd7"></button>
        <button class="bg4" value="#ffae00"></button>
    </div>
    <div class="links f aic jcsb">
        <input type='text' class="anker">
        <p>Go</p>
    </div>
    <div class="controler f aic jcsb">
        <p class='aTag'><u class="a">a</u> 
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x cp close">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    </div>
    </div>
    <div class="contant">
    <div class="all_links"></div>
        <textarea name="" class="textarea" spellcheck="false" cols="30" rows="10"></textarea>
    </div>

  `;
  tag.innerHTML = html;
  let all_notes = document.querySelector(".all_notes");
  all_notes.appendChild(tag);
};
document.querySelector(".creat").addEventListener("click", (e) => {
  insert();
  aTag();
  linker();
  linker2();
  changeColor();
  close();
  removeF();
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
  aTag();
  linker();
  linker2();
  removeF();
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
    e.preventDefault();
    save();
  }
});
let linker = (e) => {
  let links = document.querySelectorAll(".anker");
  links.forEach((e) => {
    e.addEventListener("keyup", (j) => {
      if (j.key === "Enter" || j.keyCode === 13) {
        let a = j.target.closest(".note");
        let link = j.target.value;
        let refre = link.split(".");
        let c = a.querySelector(".all_links");
        if (refre[1] == undefined) {
          refre[1] = link;
          c.innerHTML += `
          <div class="Cont f aic jcsb p5">
            <a href="https://www.${link}.com" class="a under" target="_blank">${refre[1]}</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="lucide lucide-x cp remove">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
          </div>
          `;
          j.target.value = "";
        } else {
          c.innerHTML += `
          <div class="Cont f aic jcsb p5">
            <a href="${link}" class="a under" target="_blank">${refre[1]}</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="lucide lucide-x cp remove">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
          </div>
            `;
        }
        // console.log(refre);
        j.target.value = "";
        removeF();
      }
    });
  });
};
let linker2 = (e) => {
  let links = document.querySelectorAll(".links p");
  links.forEach((e) => {
    e.addEventListener("click", (j) => {
      let a = j.target.closest(".note");
      let b = a.querySelector("input");
      let link = b.value;
      let refre = link.split(".");
      let c = a.querySelector(".all_links");
      if (refre[1] == undefined && refre[1] != "") {
        refre[1] = link;
        c.innerHTML += `
          <div class="Cont f aic jcsb p5">
            <a href="https://www.${link}.com" class="a under" target="_blank">${refre[1]}</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="lucide lucide-x cp remove">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
          </div>
            `;
        b.value = "";
      } else {
        c.innerHTML += `
          <div class="Cont f aic jcsb p5">
            <a href="${link}" class="a under" target="_blank">${refre[1]}</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"  viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="lucide lucide-x cp remove">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
          </div>
            `;
      }
      b.value = "";
      // console.log(refre);
      removeF();
    });
  });
};
let aTag = (e) => {
  document.querySelectorAll(".aTag").forEach((e) => {
    e.addEventListener("click", (j) => {
      let a = j.target.closest(".note");
      let b = a.querySelector(".links");
      b.classList.toggle("hide");
    });
  });
};
let removeF = (e) => {
  document.querySelectorAll(".remove").forEach((e) => {
    e.addEventListener("click", (j) => {
      j.target.closest(".Cont").remove();
      // .remove();
    });
  });
};
