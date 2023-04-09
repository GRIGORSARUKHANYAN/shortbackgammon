function name(params) {
}
function checkForHitStones(lastDice,hitStones) {
  let color = "black";
  if (lastDice == "black") {
    color = "white";
  }
  if (hitStones[color] > 0) {
    return true;
  }
  return false;
}

function dice(field,possibleMove,lastDice,hitStones) {
  let color = "black";
  if (lastDice == "black") {
    color = "white";
  }
  let number1 = Math.floor(Math.random() * 6) + 1;
  let number2 = Math.floor(Math.random() * 6) + 1;
//   let number1 = 1;
//   let number2 = 5;
  dices = { dice1: number1, dice2: number2 };
  possibleMove = [];

  if (color == "white" && checkForHitStones(lastDice,hitStones)) {
    if (
      field[dices.dice1 - 1].color == null ||
      field[dices.dice1 - 1].color !== lastDice ||
      field[dices.dice1 - 1].size < 2
    ) {
      count++;
      possibleMove.push({ from: -1, to: dices.dice1 - 1 });
    }
    if (
      field[dices.dice2 - 1].color == null ||
      field[dices.dice2 - 1].color !== lastDice ||
      field[dices.dice1 - 1].size < 2
    ) {
      count++;
      possibleMove.push({ from: -1, to: dices.dice2 - 1 });
    }
    if (
      field[dices.dice2 + dices.dice1 - 1].color == null ||
      field[dices.dice2 + dices.dice1 - 1].color !== lastDice ||
      field[dices.dice1 - 1].size < 2
    ) {
      count++;
      possibleMove.push({ from: -1, to: dices.dice2 + dices.dice1 - 1 });
    }
    if (count > 0) {
      possibleMove = [];
      return { dice1: number1, dice2: number2, possibleMove: possibleMove };
    }
  }
  if (color == "black" && checkForHitStones(lastDice,hitStones)) {
    let count = 0;
    if (
      field[23 - dices.dice1 + 1].color == null ||
      field[23 - dices.dice1 + 1].color !== lastDice ||
      field[dices.dice1 - 1].size < 2
    ) {
      count++;
      possibleMove.push({ from: 24, to: 23 - dices.dice1 + 1 });
    }
    if (
      field[23 - dices.dice2 + 1].color == null ||
      field[23 - dices.dice2 + 1].color !== lastDice ||
      field[dices.dice1 - 1].size < 2
    ) {
      count++;
      possibleMove.push({ from: 24, to: 23 - dices.dice2 + 1 });
    }
    if (
      field[23 - dices.dice2 - dices.dice1 + 1].color == null ||
      field[23 - dices.dice2 - dices.dice1 + 1].color !== lastDice ||
      field[dices.dice1 - 1].size < 2
    ) {
      count++;
      possibleMove.push({ from: 24, to: 23 - dices.dice2 - dices.dice1 + 1 });
    }
    if (count > 0) {
      possibleMove = [];
      return { dice1: number1, dice2: number2, possibleMove: possibleMove };
    }
  }

  for (let i = 0; i < field.length; i++) {
    if (field[i].size !== 0 && field[i].color == color) {
      if (color == "white") {
        if (dices.dice1 == dices.dice2) {
          if (
            i + dices.dice1 + dices.dice2 + dices.dice1 < 23 &&
            (field[i + dices.dice1 + dices.dice2 + dices.dice1].color == null ||
              field[i + dices.dice1 + dices.dice2 + dices.dice1].color !==
                lastDice ||
              field[i + dices.dice1 + dices.dice2 + dices.dice1].size < 2)
          ) {
            possibleMove.push({
              from: i,
              to: i + dices.dice1 + dices.dice1 + dices.dice1,
            });
          }
          if (
            i + dices.dice1 + dices.dice2 + dices.dice1 + dices.dice1 < 23 &&
            (field[i + dices.dice1 + dices.dice2 + dices.dice1 + dices.dice1]
              .color == null ||
              field[i + dices.dice1 + dices.dice2 + dices.dice1 + dices.dice1]
                .color !== lastDice ||
              field[i + dices.dice1 + dices.dice2 + dices.dice1 + dices.dice1]
                .size < 2)
          ) {
            possibleMove.push({
              from: i,
              to: i + dices.dice1 + dices.dice2 + dices.dice1 + dices.dice1,
            });
          }
          if (
            i + dices.dice1 < 23 &&
            (field[i + dices.dice1].color == null ||
              field[i + dices.dice1].color !== lastDice ||
              field[i + dices.dice1].size < 2)
          ) {
            possibleMove.push({ from: i, to: i + dices.dice1 });
          }
          if (
            i + dices.dice1 + dices.dice2 < 23 &&
            (field[i + dices.dice1 + dices.dice2].color == null ||
              field[i + dices.dice1 + dices.dice2].color !== lastDice ||
              field[i + dices.dice1 + dices.dice2].size < 2)
          ) {
            possibleMove.push({ from: i, to: i + dices.dice1 + dices.dice2 });
          }
        } else {
          if (
            i + dices.dice1 < 23 &&
            (field[i + dices.dice1].color == null ||
              field[i + dices.dice1].color !== lastDice ||
              field[i + dices.dice1].size < 2)
          ) {
            possibleMove.push({ from: i, to: i + dices.dice1 });
          }
          if (
            i + dices.dice2 < 23 &&
            (field[i + dices.dice2].color == null ||
              field[i + dices.dice2].color !== lastDice ||
              field[i + dices.dice2].size < 2)
          ) {
            possibleMove.push({ from: i, to: i + dices.dice2 });
          }
          if (
            i + dices.dice1 + dices.dice2 < 23 &&
            (field[i + dices.dice1 + dices.dice2].color == null ||
              field[i + dices.dice1 + dices.dice2].color !== lastDice ||
              field[i + dices.dice1 + dices.dice2].size < 2)
          ) {
            possibleMove.push({ from: i, to: i + dices.dice1 + dices.dice2 });
          }
        }

        let noRemovable = 0;

        for (let i = 0; i < 18; i++) {
          if (field[i].color == "white") {
            noRemovable++;
          }
        }
        if (hitStones.white > 0) {
          noRemovable++;
        }
        if (noRemovable == 0) {
          if (dices.dice1 == dices.dice2) {
            if (i + dices.dice1 + dices.dice2 + dices.dice1 == 24) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            let stop1 = 0;
            if (i + dices.dice1 + dices.dice2 + dices.dice1 > 24) {
              for (let j = i - 1; j > 17; j--) {
                if (field[j].color == color) {
                  stop1++;
                }
              }
            }
            if (stop1 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }

            if (
              i + dices.dice1 + dices.dice2 + dices.dice1 + dices.dice1 ==
              24
            ) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            let stop2 = 0;
            if (
              i + dices.dice1 + dices.dice2 + dices.dice1 + dices.dice1 >
              24
            ) {
              for (let j = i - 1; j > 17; j--) {
                if (field[j].color == color) {
                  stop2++;
                }
              }
            }
            if (stop2 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            let stop3 = 0;

            if (i + dices.dice1 == 24) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            if (i + dices.dice1 > 24) {
              for (let j = i - 1; j > 17; j--) {
                if (field[j].color == color) {
                  stop3++;
                }
              }
            }
            if (stop3 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            let stop4 = 0;

            if (i + dices.dice1 + dices.dice2 == 24) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            if (i + dices.dice1 + dices.dice2 > 24) {
              for (let j = i - 1; j > 17; j--) {
                if (field[j].color == color) {
                  stop4++;
                }
              }
            }
            if (stop4 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
          } else {
            let stop5 = 0;
            if (i + dices.dice1 == 24) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            if (i + dices.dice1 > 24) {
              for (let j = i - 1; j > 17; j--) {
                if (field[j].color == color) {
                  stop5++;
                }
              }
            }
            if (stop5 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }

            let stop6 = 0;
            if (i + dices.dice2 == 24) {
              possibleMove.push({ from: i, to: "lastposition" });
            }

            if (i + dices.dice2 > 24) {
              for (let j = i - 1; j > 17; j--) {
                if (field[j].color == color) {
                  stop6++;
                }
              }
            }
            if (stop6 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            let stop7 = 0;

            if (i + dices.dice1 + dices.dice2 == 24) {
              possibleMove.push({ from: i, to: "lastposition" });
            }

            if (i + dices.dice1 + dices.dice2 > 24) {
              for (let j = i - 1; j > 17; j--) {
                if (field[j].color == color) {
                  stop7++;
                }
              }
            }
            if (stop7 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
          }
        }
      }

      if (color == "black") {
        if (dices.dice1 == dices.dice2) {
          if (
            i - dices.dice1 - dices.dice2 - dices.dice1 > -1 &&
            (field[i - dices.dice1 - dices.dice2 - dices.dice1].color == null ||
              field[i - dices.dice1 - dices.dice2 - dices.dice1].color !==
                lastDice ||
              field[i - dices.dice1 - dices.dice2 - dices.dice1].size < 2)
          ) {
            possibleMove.push({
              from: i,
              to: i - dices.dice1 - dices.dice1 - dices.dice1,
            });
          }
          if (
            i - dices.dice1 - dices.dice2 - dices.dice1 - dices.dice1 > 0 &&
            (field[i - dices.dice1 - dices.dice2 - dices.dice1 - dices.dice1]
              .color == null ||
              field[i - dices.dice1 - dices.dice2 - dices.dice1 - dices.dice1]
                .color !== lastDice ||
              field[i - dices.dice1 - dices.dice2 - dices.dice1 - dices.dice1]
                .size < 2)
          ) {
            possibleMove.push({
              from: i,
              to: i - dices.dice1 - dices.dice2 - dices.dice1 - dices.dice1,
            });
          }
          if (
            i - dices.dice1 - dices.dice2 > 0 &&
            (field[i - dices.dice1 - dices.dice2].color == null ||
              field[i - dices.dice1 - dices.dice2].color !== lastDice ||
              field[i - dices.dice1 - dices.dice2].size < 2)
          ) {
            possibleMove.push({ from: i, to: i - dices.dice1 - dices.dice2 });
          }
          if (
            i - dices.dice1 > 0 &&
            (field[i - dices.dice1].color == null ||
              field[i - dices.dice1].color !== lastDice ||
              field[i - dices.dice1].size < 2)
          ) {
            possibleMove.push({ from: i, to: i - dices.dice1 });
          }
        } else {
          if (
            i - dices.dice1 > 0 &&
            (field[i - dices.dice1].color == null ||
              field[i - dices.dice1].color !== lastDice ||
              field[i - dices.dice1].size < 2)
          ) {
            possibleMove.push({ from: i, to: i - dices.dice1 });
          }
          if (
            i - dices.dice2 > 0 &&
            (field[i - dices.dice2].color == null ||
              field[i - dices.dice2].color !== lastDice ||
              field[i - dices.dice2].size < 2)
          ) {
            possibleMove.push({ from: i, to: i - dices.dice2 });
          }
          if (
            i - dices.dice1 - dices.dice2 > 0 &&
            (field[i - dices.dice1 - dices.dice2].color == null ||
              field[i - dices.dice1 - dices.dice2].color !== lastDice ||
              field[i - dices.dice1 - dices.dice2].size < 2)
          ) {
            possibleMove.push({ from: i, to: i - dices.dice1 - dices.dice2 });
          }
        }

        let noRemovable = 0;

        for (let i = 23; i < 5; i--) {
          if (field[i].color == "black") {
            noRemovable++;
          }
        }
        if (hitStones.black > 0) {
          noRemovable++;
        }
        if (noRemovable == 0) {
          if (dices.dice1 == dices.dice2) {
            let stop1 = 0;
            if (i - dices.dice1 - dices.dice2 - dices.dice1 == -1) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            if (i - dices.dice1 - dices.dice2 - dices.dice1 < -1) {
              for (let j = i + 1; j < 6; j++) {
                if (field[j].color == color) {
                  stop1++;
                }
              }
            }
            if (stop1 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }

            if (
              i - dices.dice1 - dices.dice2 - dices.dice1 - dices.dice1 ==
              -1
            ) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            let stop2 = 0;
            if (
              i - dices.dice1 - dices.dice2 - dices.dice1 - dices.dice1 <
              -1
            ) {
              for (let j = i + 1; j < 6; j++) {
                if (field[j].color == color) {
                  stop2++;
                }
              }
            }
            if (stop2 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            let stop3 = 0;

            if (i - dices.dice1 == -1) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            if (i - dices.dice1 < -1) {
              for (let j = i + 1; j < 6; j++) {
                if (field[j].color == color) {
                  stop3++;
                }
              }
            }
            if (stop3 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }

            let stop4 = 0;
            if (i - dices.dice1 - dices.dice2 == -1) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            if (i - dices.dice1 - dices.dice2 < -1) {
              for (let j = i + 1; j < 6; j++) {
                if (field[j].color == color) {
                  stop4++;
                }
              }
            }
            if (stop4 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
          } else {
            let stop5 = 0;
            if (i - dices.dice1 == -1) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
            if (i - dices.dice1 < -1) {
              for (let j = i + 1; j < 6; j++) {
                if (field[j].color == color) {
                  stop5++;
                }
              }
            }
            if (stop5 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }

            let stop6 = 0;
            if (i - dices.dice2 == -1) {
              possibleMove.push({ from: i, to: "lastposition" });
            }

            if (i - dices.dice2 < -1) {
              for (let j = i + 1; j < 6; j++) {
                if (field[j].color == color) {
                  stop6++;
                }
              }
            }
            if (stop6 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }

            let stop7 = 0;
            if (i - dices.dice1 - dices.dice2 == -1) {
              possibleMove.push({ from: i, to: "lastposition" });
            }

            if (i - dices.dice1 - dices.dice2 < -1) {
              for (let j = i + 1; j < 6; j++) {
                if (field[j].color == color) {
                  stop7++;
                }
              }
            }
            if (stop7 == 0) {
              possibleMove.push({ from: i, to: "lastposition" });
            }
          }
        }
      }
    }
  }
  return { dice1: number1, dice2: number2, possibleMove: possibleMove };
}

module.exports = { name,dice };
