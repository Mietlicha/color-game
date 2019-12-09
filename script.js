let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let heading = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function() {
  easyBtn.classList.toggle('selected');
  hardBtn.classList.toggle('selected');
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardBtn.addEventListener('click', function() {
  hardBtn.classList.toggle('selected');
  easyBtn.classList.toggle('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
  }
});

resetButton.addEventListener('click', function() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from arrey
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  this.textContent = 'New colors';
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  heading.style.backgroundColor = 'steelblue';
  messageDisplay.textContent = '';
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add initials colors to squares

  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares

  squares[i].addEventListener('click', function() {
    let clickColor = this.style.backgroundColor;

    if (clickColor === pickedColor) {
      messageDisplay.textContent = 'Correct!';
      changeColor(clickColor);
      heading.style.backgroundColor = clickColor;
      resetButton.textContent = 'Play again?';
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try again';
    }
  });
}

function changeColor(color) {
  //loop through all squares
  for (let i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an arrey
  let arr = [];
  //add num random colors to arrey
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  //return that arrey
  return arr;
}

function randomColor() {
  //red 1-
  let red = Math.floor(Math.random() * 256);
  //green 1-255
  let green = Math.floor(Math.random() * 256);
  //blue 1-255
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
