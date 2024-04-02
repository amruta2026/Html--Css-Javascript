// // dom manipulation
// function dom(){
//     h=document.getElementById('head')
//     h.style.color='black';
// if(h.innerText=='Day13 Html- Css- Javascript'){
//     h.innerText= h.innerText="Learning dom manipulation"
//     h.style.fontFamily = "Impact,Charcoal,sans-serif";
//     h.style.textShadow = '2px 2px 4px #000000';
//     h.style.color='blue' ;
// }else{
//     h.innerText= h.innerText='Day13 Html- Css- Javascript'
// }

//     // h.innerText="Learning dom manipulating"
//     // h.style.color='blue';  
//     //task:  1.change text font family
//     //  2. add shadow effect
//     //3. 5 other styling things to another paragraph 
//     // 4. use if else / nested else if to perform various scenarious
// }
// //click here to tom reaction image 

// // animation 
function dom() {
  // Get the heading element by id
  const h = document.getElementById('head');

  // Change text font family
  h.style.fontFamily = "Impact, Charcoal, sans-serif";

  // Add shadow effect
  h.style.textShadow = '2px 2px 4px #000000';

  // Check the current text content and perform actions accordingly
  if (h.innerText === 'Day13 Html- Css- Javascript') {
    // Change heading text and color
    h.innerText = "Learning DOM Manipulation";
    h.style.color = 'blue';

    // Additional styling for the paragraph
    const paragraph = document.getElementById('paragraph');
    paragraph.style.color = 'green';
    paragraph.style.backgroundColor = 'yellow';
    paragraph.style.padding = '10px';
    paragraph.style.border = '2px solid red';

    // Additional scenario based on the length of the heading text
    if (h.innerText.length >= 25) {
      paragraph.innerText = 'Long heading text!';
    } else {
      paragraph.innerText = 'Short heading text!';
    }
  } else {
    // Reset heading text and color
    h.innerText = 'Day13 Html- Css- Javascript';
    h.style.color = 'black';

    // Reset paragraph styles
    const paragraph = document.getElementById('paragraph');
    paragraph.style.color = 'blue';
    paragraph.style.backgroundColor = 'green';
    paragraph.style.padding = '10px';
    paragraph.style.border = '2px solid blue';

    // Additional scenario based on the length of the heading text
    if (h.innerText.length > 25) {
      paragraph.innerText = 'Long heading text!';
    } else {
      paragraph.innerText = 'Short heading text!';
     }
    }
  }






function dom() {
  // Get the heading element by id
  const h = document.getElementById('head');

  // Change text font family
  h.style.fontFamily = "Impact, Charcoal, sans-serif";

  // Add shadow effect
  h.style.textShadow = '2px 2px 4px #000000';

  // Check the current text content and perform actions accordingly
  if (h.innerText === 'Day13 Html- Css- Javascript') {
    // Change heading text and color
    h.innerText = "Learning DOM Manipulation";
    h.style.color = 'blue';

    // Additional styling for the paragraph
    const paragraph = document.getElementById('paragraph');
    paragraph.style.color = 'green';
    paragraph.style.backgroundColor = 'yellow';
    paragraph.style.padding = '10px';
    paragraph.style.border = '2px solid red';

    // Additional scenario based on the length of the heading text
    if (h.innerText.length > 25) {
      paragraph.innerText = 'Long heading text!';
    } else {
      paragraph.innerText = 'Short heading text!';
    }
  } else {
    // Reset heading text and color
    h.innerText = 'Day13 Html- Css- Javascript';
    h.style.color = 'black';

    // Reset paragraph styles
    const paragraph = document.getElementById('paragraph');
    paragraph.style.color = '';
    paragraph.style.backgroundColor = '';
    paragraph.style.padding = '';
    paragraph.style.border = '';

    // Additional scenario based on the length of the heading text
    if (h.innerText.length > 25) {
      paragraph.innerText = 'Long heading text!';
    } else {
      paragraph.innerText = 'Short heading text!';
     }
    }
  }