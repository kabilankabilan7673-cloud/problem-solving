var car = 2;
var dis = [1, 5, 3];
var cap = [6, 4, 2];
var travel = true;
for (var i = 0; i < dis.length; i++) {
  if (car >= dis[i]) {
    car = car - dis[i];
    car = car + cap[i];
  } else {
    travel = false;
    console.log("car cannot travel");
    break;
  }
}
if (travel == true) {
  console.log("remaining petrol:", car);
}
