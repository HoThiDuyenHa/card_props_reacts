function data(dataName) {
    switch (dataName) {
        case "products":
            const products = [
                {
                    id: "1",
                    name: "Awesome Soft Hat",
                    name_category: "Thời trang nam",
                    code: "19381-4141",
                    image: "http://lorempixel.com/640/480/cats",
                    price: "788.00",
                    old_price: "529.00",
                },
                {
                    id: "2",
                    name: "Elegant Leather Jacket",
                    name_category: "Thời trang nam",
                    code: "29381-1234",
                    image: "http://lorempixel.com/640/480/fashion",
                    price: "1599.00",
                    old_price: "1799.00",
                },
                {
                    id: "3",
                    name: "Casual Cotton Shirt",
                    name_category: "Thời trang nam",
                    code: "39381-5678",
                    image: "http://lorempixel.com/640/480/people",
                    price: "299.00",
                    old_price: "399.00",
                },
                {
                    id: "4",
                    name: "Running Sport Shoes",
                    name_category: "Giày dép",
                    code: "49381-9876",
                    image: "http://lorempixel.com/640/480/sports",
                    price: "699.00",
                    old_price: "799.00",
                },
                {
                    id: "10",
                    name: "Intelligent Granite Pants",
                    name_category: "Thời trang nam",
                    code: "81541",
                    image: "http://lorempixel.com/640/480/abstract",
                    price: "13.00",
                    old_price: "729.00",
                },
                {
                    id: "11",
                    name: "Stylish Denim Jeans",
                    name_category: "Thời trang nữ",
                    code: "61541",
                    image: "http://lorempixel.com/640/480/fashion",
                    price: "450.00",
                    old_price: "550.00",
                },
                {
                    id: "12",
                    name: "Trendy Handbag",
                    name_category: "Phụ kiện",
                    code: "71541",
                    image: "http://lorempixel.com/640/480/technics",
                    price: "1200.00",
                    old_price: "1400.00",
                }
            ];
            return products;
        default:
            return [];
    }
}

export default data;
