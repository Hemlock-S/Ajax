const productsContainer = document.querySelector('.products-container')


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => getData(data))
    // .catch((error) => console.error('Fetch Error: ', error))

function getData(products){
    // console.log(products);
    return products.forEach((product) => renderData(product));
}

function renderData(product){
    const html = `
    <h1>${product.title}</h1>
    <img src=${product.images[1]} alt='image'>
    <p>Price: ${product.price}</p>
    `
    productsContainer.insertAdjacentHtml("afterbegin", html)
}

//*********************AJAX classic[old] way******************************
const  wrapper = document.querySelector('.country-wrapper');
const btn = document.querySelector('.btn');



btn.addEventListener('click', function(){
    const input = document.querySelector('.input-country');
    const inputValue = input.value;
    // request ready
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${inputValue}`);
    request.send();

    // request loading time er jonno event listener dorkar hoy.
    request.addEventListener('load', function(){
        const data = JSON.parse(this.responseText); // this means request
        console.log(data);
        renderData(data);
    });
});


function renderData(country){
    const html = `
        <div class="country">
            <h1>${country.name.nativeName.ben.official}</h1>
            <strong><p>Population: ${(country.population / 10000000).toFixed(1)}M people</p></strong>
            <strong><p>capital: ${country.capital}</p></strong>
            <strong><p>Language: ${country.languages.ben}</p></strong>
        </div>
    `
    wrapper.insertAdjacentHTML("afterbegin", html);
}

// ***********************AJAX [modern way]****************************
// const wrapper = document.querySelector('.wrapper');

fetch('https://jsonplaceholder.typicode.com/post') // fetch is a API
.then(response => {
    console.log(response);
    if(!response.ok) throw new Error(`Something went wrong! - ${response.status}`);
    return response.json();
})
.then(data => renderPosts(data))
.catch(error => renderError(error.message));

function renderPosts(posts){
    // console.log(posts);
    posts.forEach(post => {
        const html = `
            <p>${post.id}</p>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `
        wrapper.insertAdjacentHTML('beforeend', html);
    });
}

function renderError(err){
    wrapper.insertAdjacentText('afterbegin', err);
}

// const wrapper = document.querySelector('.wrapper');

fetch('https://fakestoreapi.com/products')
.then(res => {
    if(!res.ok) throw new Error(`Products not found! ${res.status}`);
    return res.json();
})
.then(data => renderData(data))
.catch(error => renderError(error.message));

function renderData(products){
    products.forEach(product => {
        const html = `
            <p>${product.id}</p>
            <h2>${product.title}</h2>
            <p>${product.price.toLocaleString('bn-BD', {style: 'currency', currency: 'BDT'})}</p>
        `       
        wrapper.insertAdjacentHTML('beforeend', html);
    });
}

function renderError(err){
    wrapper.insertAdjacentText('afterbegin', err);
}

// *********************AJAX[class]**************************
class App{
    constructor(){
        this.#fetchData();
    }

    #fetchData(){
        fetch('https://fakestoreapi.com/products')
        .then(res => {
            if(!res.ok) throw new Error(`Products not found! ${res.status}`);
            return res.json();
    })
    .then(data => this.#renderData(data))
    .catch(error => this.#renderError(error.message));
    }

    #renderData(products){
        products.forEach(product => {
            const html = `
                <p>${product.id}</p>
                <h2>${product.title}</h2>
                <p>${product.price.toLocaleString('bn-BD', {style: 'currency', currency: 'BDT'})}</p>
            `       
            wrapper.insertAdjacentHTML('beforeend', html);
        });
    }

    #renderError(err){
        wrapper.insertAdjacentText('afterbegin', err);
    }
}

const myApp = new App();




