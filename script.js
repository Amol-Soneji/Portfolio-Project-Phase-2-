let dropDown = document.getElementById("selectDropDown");
dropDown.addEventListener("change", changeView);

function changeView() {
    let phaseIFrame = document.getElementById("pageView");
    if (this.value == "Phase 1") {
        phaseIFrame.src = "https://phase1portfolio.netlify.app";
        phaseIFrame.title = "Phase 1 Homeworks/Projects";
    }
    else {
        phaseIFrame.src = "./Phase2.html";
        phaseIFrame.title = "Phase 2 Homeworks/Projects";
    }
}