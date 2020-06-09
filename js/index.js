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
// const catImage = document.querySelector('.card-img-top');
// // console.log(catImage);

// zoom busimage
const busImage = document.querySelector('img');
busImage.addEventListener('mouseenter', () => {
    busImage.style.transform = "scale(1.1)";
    busImage.style.transition = "transform 1s";
});
busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = 'scale(1)';
});


//click body changes text color
const click = document.querySelector('body');
click.addEventListener('click', () => {
    if(click.style.color === 'green'){
        click.style.color = 'black';
    } 
    else { click.style.color = 'green'
    }

});

