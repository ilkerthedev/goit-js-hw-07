const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log('Number of categories:', items.length);

items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elementCount = item.querySelectorAll('ul li').length;

    console.log('Category:', title);
    console.log('Elements:', elementCount);
});