function addUser() {
    player1Name = document.getElementById("player1_nameInput").value;
    player2Name = document.getElementById("player2_nameInput").value;

    localStorage.setItem("P1_nameData" , player1Name);
    localStorage.setItem("P2_nameData" , player2Name);

    window.location = "quiz.html";
}