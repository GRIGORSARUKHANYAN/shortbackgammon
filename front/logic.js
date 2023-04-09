let field = [
    { size: 5, color: "white" },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 5, color: "black" },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
    { size: 0, color: null },
  ];
let fieldfront=document.getElementById("position1")
  function nkarel(params) {
    for (let i = 0; i < field.length; i++) {
        if (field[i].color=='black') {
            for (let j = 0; j < field[i].size; j++) {
                document.getElementById(`position${i}`).innerHTML+="<div class='stoneBlack'> </div>"
            }
        }
        if (field[i].color=='white') {
            console.log(i);
            for (let j = 0; j < field[i].size; j++) {
                document.getElementById(`position${i}`).innerHTML+="<div class='stoneWhite'> </div>"
            }
        }
        // fieldfront.innerHTML="<div class='stoneWhite'> </div>"
    }
  }
  nkarel(field)