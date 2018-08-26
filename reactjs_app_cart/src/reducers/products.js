var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/87840/iphone-7-plus-256gb-hh-400x400.jpg',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung Galaxy Note 8',
        image: 'http://product.hstatic.net/1000174309/product/samsung-galaxy-note-8-dual-sim-6gb-ram-wf7sya.jpg',
        description: 'Sản phẩm do samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 5
    },
    {
        id: 3,
        name: 'Oppo F1s',
        image: 'https://d2giyh01gjb6fi.cloudfront.net/default/0001/58/thumb_57836_default_big.jpeg',
        description: 'Sản phẩm do china sản xuất',
        price: 300,
        inventory: 5,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;