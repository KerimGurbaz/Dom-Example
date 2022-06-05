const languages = document.querySelector(".languages");
const del = document.getElementById("del");
const add = document.querySelector("#add");

const languageSection = document.querySelector("#languages-section");
const ul = document.createElement("ul");
languageSection.appendChild(ul);

console.log(languageSection.children[0]);
console.log(languageSection.parentNode.parentNode);

const h1 = ul.closest(".container").firstElementChild;
console.log(h1);
h1.style.color = "red";

const buttons = ul.closest(".container").querySelectorAll(".btn");
console.log(buttons);

add.onclick = function () {
    if (!languages.value) {
        alert("Enter a programing language")
    } else {
        const languages = document.querySelector(".languages");
        ul.innerHTML += `<li>${languages.value}</li>`;
        languages.value = ""
        javascriptKontrol();
    }

};



del.onclick = function () {
    ul.childElementCount > 0 ? ul.removeChild(ul.lastElementChild) : alert("All data has been deleted..")
}

const javascriptKontrol = () => {
    document.querySelectorAll("ul li").forEach((languages) => {

        const lower = languages.textContent.toLowerCase();
        if (lower === "javascript") {
            languages.className = "red"
        }
    })
};

languages.addEventListener("keydown", (e) => {
    // console.log(e);
    if (e.code === "Enter") {
        add.onclick();
    }

})