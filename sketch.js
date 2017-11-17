function setup() {
  createCanvas(500,400)
}

function draw() {
  background(255)
  fill(250)

  var x = 50
  var x1 = 50
  var x2 = 50
  var x3 = 50
  var x4 = 50
  var x5 = 50
  var x6 = 50
  var x7 = 50

  for (var i = 0; i < 8; i++) {
    x += 40
    if(i%2===0){
      fill('white')
    } 
    if(i%2 > 0){
        fill('black')
    }
    rect(x, 0, 40, 40);
  }
for (var i = 0; i < 8; i++) {
    x1 += 40
    if(i%2===0){
      fill('black')
    } 
    if(i%2 > 0){
        fill('white')
    }
    rect(x1, 40, 40, 40);
  }
  for (var i = 0; i < 8; i++) {
    x2 += 40
    if(i%2===0){
      fill('white')
    } 
    if(i%2 > 0){
        fill('black')
    }
    rect(x2, 80, 40, 40);
  }
  for (var i = 0; i < 8; i++) {
    x3 += 40
    if(i%2===0){
      fill('black')
    } 
    if(i%2 > 0){
        fill('white')
    }
    rect(x3, 120, 40, 40);
  }
  for (var i = 0; i < 8; i++) {
    x4 += 40
    if(i%2===0){
      fill('white')
    } 
    if(i%2 > 0){
        fill('black')
    }
    rect(x4, 160, 40, 40);
  }
   for (var i = 0; i < 8; i++) {
    x5 += 40
    if(i%2===0){
      fill('black')
    } 
    if(i%2 > 0){
        fill('white')
    }
    rect(x5, 200, 40, 40);
  }
  for (var i = 0; i < 8; i++) {
    x6 += 40
    if(i%2===0){
      fill('white')
    } 
    if(i%2 > 0){
        fill('black')
    }
    rect(x6, 240, 40, 40);
  }
   for (var i = 0; i < 8; i++) {
    x7 += 40
    if(i%2===0){
      fill('black')
    } 
    if(i%2 > 0){
        fill('white')
    }
    rect(x7, 280, 40, 40);
  }

}
