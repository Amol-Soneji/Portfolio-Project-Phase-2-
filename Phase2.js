let homework = document.getElementsByClassName("homework");
console.log(homework);
let project = document.getElementsByClassName("project");

for (let i = 0; i < homework.length; i++) {
    homework[i].addEventListener("mouseover", emphasizeContent);
    homework[i].addEventListener("mouseout", deemphasizeContent);
}

for (let i = 0; i < project.length; i++) {
    project[i].addEventListener("mouseover", emphasizeContent);
    project[i].addEventListener("mouseout", deemphasizeContent);
}

function emphasizeContent() {
    this.style.boxShadow = "7px 7px 3px gray";
    this.style.backgroundColor = "#8E8E8E";
    this.style.color = "#FFFFFF";
}

function deemphasizeContent() {
    this.style.boxShadow = "";
    this.style.backgroundColor = "";
    this.style.color = "";
}

