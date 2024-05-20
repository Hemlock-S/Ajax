// const productsContainer = document.querySelector('.products-container')


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((data) => getData(data))
//     // .catch((error) => console.error('Fetch Error: ', error))

// function getData(products){
//     // console.log(products);
//     products.forEach((product) => renderData(product));
//     return;
// }

// function renderData(product){
//     const html = `
//     <h1>${product.title}</h1>
//     <img src=${product.images[1]} alt='image'>
//     <p>Price: ${product.price}</p>
//     `
//     productsContainer.insertAdjacentHtml("afterbegin", html)
// }

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
        const [data] = JSON.parse(this.responseText); // this means request
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


