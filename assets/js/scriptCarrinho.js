const products = [{
        id: 0,
        nome: "Chip - Blue",
        valor: 25.99,
        value: 25.99,
        img: '<img src="img/chipBlue.png">'
    },
    {
        id: 1,
        nome: "Chip - White",
        valor: 65.99,
        value: 65.99,
        img: '<img src="img/chipWhite.png">'
    },
    {
        id: 2,
        nome: "Chip - Green",
        valor: 99.99,
        value: 99.99,
        img: '<img src="img/chipGreen.png">'
    },
    {
        id: 3,
        nome: "Chip - Red",
        valor: 48.99,
        value: 48.99,
        img: '<img src="img/chipRed.png">'
    },
    {
        id: 4,
        nome: "Chip - Black",
        valor: 82.99,
        value: 82.99,
        img: '<img src="img/chipBlack.png">'
    },
    {
        id: 5,
        nome: "Chip - X-Ray",
        valor: 150.99,
        value: 150.99,
        img: '<img src="img/chip-x.png">'
    },
]

let cart = [{
    id: 0,
    name: 'nada selecionado',
    value: 0
}, ];

const showCurrentTotal = (total) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(total);
}

const getProductById = id => products.find(p => p.id == id);
const getList = () => document.querySelector('.cart-item');
const setTotal = (total) => document.querySelector('.total').innerHTML = `O Valor total: ${total}`;

document.querySelector('.box-container')
    .addEventListener('click', ({
        target: {
            dataset: {
                productId
            }
        }
    }) => {
        const product = getProductById(productId);
        cart.push(product);
        const total = cart.reduce(
            (previousValue, {
                value
            }) => previousValue + value,
            0
        );
        getList().innerHTML += `${product.img} <br> ${product.nome} ${product.valor} <br>`
        setTotal(showCurrentTotal(total));


        localStorage.setItem(productId + " " + product.nome, JSON.stringify(product.valor));

    })