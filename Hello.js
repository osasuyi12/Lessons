const day = new Date()
console.log(day)
console.log(day.getDay())
console.log(day.getDate())
switch (day.getDay()) {
   // let text   
      case 5:
        text = 'friday';
       // break;
    case 6:
      text = "Today is Saturday";
     break;
    case 0:
      text = "Today is Sunday";
     // break;
     // default:
     // text = "Looking forward to the Weekend";
    // break;
  }
  console.log(text)