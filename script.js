let dropDown = document.getElementById("selectDropDown");
dropDown.addEventListener("change", changeView);

function changeView() {
    let phaseIFrame = document.getElementById("pageView");
    if (this.value == "Phase 1") {
        phaseIFrame.src = "https://phase1portfolio.netlify.app";
    }
    else {
        phaseIFrame.src = "./Phase2.html";
    }
}