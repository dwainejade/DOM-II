// // Your code goes here
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

// zoom busimage
const imgs = document.querySelectorAll('img');
console.log(imgs)
for (const img of imgs) {
    img.addEventListener('mouseenter', () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 1s";
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
}



//click body changes text color
const colors = document.querySelectorAll('p, h2');
console.log(colors);
for (const color of colors) {
    color.addEventListener('click', () => {
        if (color.style.color === 'green') {
            color.style.color = 'black';
        }
        else {
            color.style.color = 'green';
        }
    });
}

//dblclick for black and white image
for (const img of imgs) {
    img.addEventListener('dblclick', () => {
        img.style.filter = 'grayscale(100%)';
    });
}


