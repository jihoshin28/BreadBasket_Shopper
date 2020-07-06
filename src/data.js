
const data = {
    items: [
        {
            image: "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=",
            name: "Tomato",
            count: 1,
            price: .75,
            category: 'produce'
        },
        {
            image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            name: "Bananas",
            count: 5,
            price: .50,
            category: 'produce'
        },
        {
            image: "https://www.sprouts.com/wp-content/uploads/2017/11/Sweet-Potatoes.jpg",
            name: "Sweet Potatoes",
            count: 9,
            price: .25,
            category: "produce"
        },
        {
            image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2019%2F10%2Fdozen-eggs-in-carton.png",
            name: "Eggs",
            count: 1,
            price: 3.50,
            category: 'meats'
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Baguettes_-_stonesoup.jpg/1200px-Baguettes_-_stonesoup.jpg",
            name: "French Bread",
            count: 1,
            price: 2.00,
            category: "bakery"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Baguettes_-_stonesoup.jpg/1200px-Baguettes_-_stonesoup.jpg",
            name: "French Bread",
            count: 1,
            price: 2.00,
            category: ""
        }
    ],
    categories: [
        {
            title: "Meat/Seafood",
            name: "meats"
        },
        {
            title: "Produce",
            name: "produce"
        },
        {
            title: "Dairy",
            name: "dairy"
        },
        {
            title: "Bakery",
            name: "bakery"
        },
        {
            title: "Snacks",
            name: "snacks"
        },
        {
            title: "Beverages",
            name: "beverages"
        },
        {
            title: "Frozen",
            name: "frozen"
        },
        {
            title: "Household",
            name: "household"
        }
        
    ],
    stores: [
        {
            name: "Safeway",
            key: 1
        },
        {
            name: "Costco",
            key: 2
        },
        {
            name: "Rite Aid",
            key: 3
        },
        {
            name: "Smart and Final",
            key: 4
        },
        {
            name: "FoodMax",
            key: 5
        }
    ]
}



export default { data }

