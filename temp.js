// db.products.insertOne(
//     {
//         "names" : "product 2",
//         "desc" : "this is decspriction of product 2",
//         "price" : 50,
//         "url" : "https://picsum.photos/seed/picsum/200/300"
//     }
// )
db.products.insertMany(
    [
    {
        "names" : "product 5",
        "desc" : "this is decspriction of product 5",
        "price" : 40,
        "url" : "https://picsum.photos/id/237/200/300"
    },
    {
        "names" : "product 6",
        "desc" : "this is decspriction of product 6",
        "price" : 80,
        "url" : "https://picsum.photos/id/238/200/300"
    }
]
);