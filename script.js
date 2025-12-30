let score = 0;
let wickets = 0;
let balls = 0;
let overs = 0;
let extraType = ""; // "", "NB", "WD"

function update() {
    document.getElementById("score").innerText = score;
    document.getElementById("wickets").innerText = wickets;
    document.getElementById("overs").innerText = `${overs}.${balls}`;
}

function setExtra(type) {
    extraType = type;
    document.getElementById("extraStatus").innerText =
        type === "NB" ? "No Ball selected" : "Wide selected";
}

function addRun(run) {
    if (wickets >= 10) return;

    if (extraType === "NB") {
        score += 1 + run;
        clearExtra();
        update();
        return;
    }

    if (extraType === "WD") {
        score += 1 + run;
        clearExtra();
        update();
        return;
    }

    score += run;
    legalBall();
}

function addWicket() {
    if (wickets >= 10) return;

    if (extraType === "NB") {
        wickets++;
        score += 1; // no ball + wicket
        clearExtra();
        update();
        return;
    }

    wickets++;
    legalBall();
}

function legalBall() {
    balls++;
    if (balls === 6) {
        overs++;
        balls = 0;
    }
    update();
}

function clearExtra() {
    extraType = "";
    document.getElementById("extraStatus").innerText = "";
}

function resetMatch() {
    score = 0;
    wickets = 0;
    balls = 0;
    overs = 0;
    clearExtra();
    update();
}
