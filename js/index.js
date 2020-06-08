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

const busImage = document.querySelector('img');
console.log('busImage')
busImage.addEventListener('mouseenter', () => {
    busImage.style.transform = "scale(1.1)";
    busImage.style.transition = "transform 1s";
});
busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = 'scale(1)';
});