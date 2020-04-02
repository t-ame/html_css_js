var data = [{
  principal: 2500,
  time: 1.8
}, {
  principal: 1000,
  time: 5
}, {
  principal: 3000,
  time: 1
}, {
  principal: 2000,
  time: 3
}];

function interestCalc(array){
  var interestData = [];
  for(var i = 0; i < array.length; ++i){
    item = array[i];
    if(item.principal >= 2500 && item.time > 1 && item.time < 3){
      item.rate = 3;
    } else if(item.principal >= 2500 && item.time >= 3){
      item.rate = 4;
    } else if(item.principal < 2500 || item.time <= 1){
      item.rate = 2;
    } else {
      item.rate = 1;
    }
    item.interest = (item.principal * item.rate * item.time) / 100;
    interestData.push(item);
  }
  console.log(interestData);
  return interestData;
}

interestCalc(data);
