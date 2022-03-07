// Variables
let turn = "x";
let title = document.querySelector(".title");
let Squares = [];

//Functions
function End(N1, N2, N3) {
  title.innerHTML = `${Squares[N1]} Winner`;
  document.getElementById("SQ" + N1).style.backgroundColor = "#000";
  document.getElementById("SQ" + N2).style.backgroundColor = "#000";
  document.getElementById("SQ" + N3).style.backgroundColor = "#000";

  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);

  setTimeout(() => {
    location.reload();
  }, 3000);
}

function Winnner() {
    for (let i = 1; i < 10; i++) {
        Squares[i] = document.getElementById("SQ" + i).innerHTML;
    }
    
    if (Squares[1] == Squares[2] && Squares[2] == Squares[3] && Squares[1] != "") {
        End(1, 2, 3);
    }
    else if (Squares[4] == Squares[5] && Squares[5] == Squares[6] && Squares[4] != "") {
        End(4, 5, 6,);
    }
    else if (Squares[7] == Squares[8] && Squares[8] == Squares[9] && Squares[9] != "") {
        End(7, 8, 9);
    }
    else if (Squares[1] == Squares[4] && Squares[4] == Squares[7] && Squares[1] != "") {
        End(1, 4, 7);
    }
    else if (Squares[2] == Squares[5] && Squares[5] == Squares[8] && Squares[2] != "") {
        End(2, 5, 8)
    }
    else if (Squares[3] == Squares[6] && Squares[6] == Squares[9] && Squares[3] != "") {
        End(3, 6, 9);
    }
    else if (Squares[1] == Squares[5] && Squares[5] == Squares[9] && Squares[1] != "") {
        End(1, 5, 9)
    }
    else if (Squares[3] == Squares[5] && Squares[5] == Squares[7] && Squares[3] != "") {
        End(3, 5, 7);
    }
    
    
}



function Game(id) {
  let element = document.getElementById(id);

  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "o";
    title.innerHTML = "Now .. Player :[ O ]";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "x";
    title.innerHTML = "Now .. Player :[ x ]";
  }
  Winnner();
}
