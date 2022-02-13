// object with circle to increase counts
let circle1 = document.querySelector('#circle1');

// add event listener to increase the text in the circel by 1 for each time
// it is clicked on
circle1.addEventListener('click', () => {
    let circle1Text = document.getElementById("text");
    let add1 = parseInt(circle1Text.innerHTML);
    circle1Text.innerHTML = add1 + 1;
})

// object for circle with mouseover and mouseout
let circle2 = document.querySelector('#circle2');

// add event listener for mouse over
circle2.addEventListener('mouseover', () => {
    // set the stroke width (the border of the circle) to 8px when mouseover actionListener
    // is invoked
    circle2.style.strokeWidth = "8px";
})

// add event listener for mouse out
circle2.addEventListener('mouseout', () => {
    // set the stroke width to 0 px (hide the border) when the mouse leaves the circle
    circle2.style.strokeWidth = "0px";
})

// object for circle3 to edit its functionality
let circle3 = document.querySelector('#circle3')

// set ishidden to false and change it every time
let isHidden = false;

// add a listener so when circle3 is clicked on it becomes opaque
circle3.addEventListener('click', () => {
    // if it is hidden and clicked on set the opacity to 1 (fully visible)
    // else set it to be hidden (opacity of 0)
    if (isHidden) {
        circle3.style.opacity = 1;
    } else {
        circle3.style.opacity = 0;
    }
    isHidden = !isHidden;
})