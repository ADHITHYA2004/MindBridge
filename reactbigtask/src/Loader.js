
const Loader = () => {
    const data = [
        {
            id: 1,
            carName: "Maruti Suzuki Swift",
            capacity: 5,
            image: "./images/image.png",
            type: "Hatchback",
            price: "₹1,500",
            transmission: "Manual/Automatic",
            description: "A popular compact hatchback known for its sporty design and fuel efficiency."
        },
        {
            id: 2,
            carName: "Hyundai Creta",
            capacity: 5,
            image: "./images/Audi.png",
            type: "SUV",
            price: "₹2,500",
            transmission: "Manual/Automatic",
            description: "A compact SUV offering a comfortable ride with a range of modern features."
        },
        {
            id: 3,
            carName: "Chevrolet",
            capacity: 2,
            image: "./images/Chevrolet.png",
            type: "SUV",
            price: "₹2,000",
            transmission: "Manual/Automatic",
            description: "A stylish compact SUV with a strong build and impressive safety features."
        },
        {
            id: 4,
            carName: "Honda Civic",
            capacity: 5,
            image: "./images/Honda_Civic.png",
            type: "Sedan",
            price: "₹3,000",
            transmission: "Manual/Automatic",
            description: "A premium sedan known for its spacious interior and smooth driving experience."
        },
        {
            id: 5,
            carName: "Kia Seltos",
            capacity: 5,
            image: "./images/Kia_Seltos.png",
            type: "SUV",
            price: "₹2,500",
            transmission: "Manual/Automatic",
            description: "A feature-rich compact SUV with a bold design and multiple engine options."
        },
        {
            id: 6,
            carName: "Mahindra Thar",
            capacity: 4,
            image: "./images/Thar.png",
            type: "SUV",
            price: "₹3,500",
            transmission: "Manual/Automatic",
            description: "A rugged off-road SUV with a classic design and modern amenities."
        },
        {
            id: 7,
            carName: "Toyota Fortuner",
            capacity: 7,
            image: "./images/Toyota_Fortuner.png",
            type: "SUV",
            price: "₹5,000",
            transmission: "Automatic",
            description: "A full-sized SUV known for its powerful performance and spacious interior."
        },
        {
            id: 8,
            carName: "Nissan Altima",
            capacity: 5,
            image: "./images/Nissan_Altima.png",
            type: "SUV",
            price: "₹2,200",
            transmission: "Manual/Automatic",
            description: "A compact SUV with a sporty design and efficient engine options."
        },
        {
            id: 9,
            carName: "Tesla",
            capacity: 4,
            image: "./images/Tesla.png",
            type: "Hatchback",
            price: "₹1,200",
            transmission: "Manual/Automatic",
            description: "An entry-level hatchback with SUV-inspired design and high ground clearance."
        },
        {
            id: 10,
            carName: "Maruti Suzuki Baleno",
            capacity: 5,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "Hatchback",
            price: "₹1,800",
            transmission: "Manual/Automatic",
            description: "A premium hatchback offering a spacious interior and advanced features."
        },
        {
            id: 11,
            capacity: 5,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "SUV",
            price: "₹2,300",
            transmission: "Manual/Automatic",
            description: "A compact SUV with a modern design and connected car technology."
        },
        {
            id: 12,
            carName: "Tata Altroz",
            capacity: 5,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "Hatchback",
            price: "₹1,700",
            transmission: "Manual/Automatic",
            description: "A premium hatchback known for its safety features and stylish design."
        },
        {
            id: 13,
            carName: "Honda Amaze",
            capacity: 5,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "Sedan",
            price: "₹6,32,000",
            price: "₹2,000",
            transmission: "Manual/Automatic",
            description: "A compact sedan offering a comfortable ride and fuel-efficient engines."
        },
        {
            id: 14,
            carName: "Kia Sonet",
            capacity: 5,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "SUV",
            price: "₹2,400",
            transmission: "Manual/Automatic",
            description: "A compact SUV with advanced technology and a bold design."
        },
        {
            id: 15,
            carName: "Nissan Magnite",
            capacity: 5,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "SUV",
            price: "₹5,99,000",
            price: "₹1,800",
            transmission: "Manual/Automatic",
            description: "A budget-friendly compact SUV with a bold design and premium features."
        },
        {
            id: 16,
            carName: "Skoda Octavia",
            capacity: 5,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "Sedan",
            price: "₹20,00,000",
            price: "₹4,500",
            transmission: "Manual/Automatic",
            description: "A premium sedan known for its powerful engine and luxurious interior."
        },
        {
            id: 17,
            carName: "BMW X1",
            capacity: 5,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "SUV",
            price: "₹40,00,000",
            price: "₹8,000",
            transmission: "Automatic",
            description: "A luxury compact SUV offering high-end features and superior performance."
        },
        {
            id: 18,
            carName: "Audi A4",
            capacity: 5,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "Sedan",
            price: "₹45,00,000",
            price: "₹9,000",
            transmission: "Automatic",
            description: "A luxury sedan known for its refined interior, performance, and technology."
        },
        {
            id: 19,
            carName: "Mercedes-Benz GLC",
            capacity: 5,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "SUV",
            price: "₹65,00,000",
            price: "₹12,000",
            transmission: "Automatic",
            description: "A premium SUV with a refined driving experience and cutting-edge features."
        },
        {
            id: 20,
            carName: "Ford Mustang",
            capacity: 4,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "Coupe",
            price: "₹75,00,000",
            price: "₹15,000",
            transmission: "Manual",
            description: "A powerful sports car with an iconic design and thrilling performance."
        },
        {
            id: 21,
            carName: "Chevrolet Camaro",
            capacity: 4,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "Coupe",
            price: "₹70,00,000",
            price: "₹14,000",
            transmission: "Manual/Automatic",
            description: "An iconic American muscle car with a bold design and high-performance engine."
        },
        {
            id: 22,
            carName: "Porsche 911",
            capacity: 2,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "Sports Car",
            price: "₹1,50,00,000",
            price: "₹30,000",
            transmission: "Automatic",
            description: "A legendary sports car known for its sleek design and thrilling speed."
        },
        {
            id: 23,
            carName: "Jaguar F-Type",
            capacity: 2,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "Sports Car",
            price: "₹1,20,00,000",
            price: "₹28,000",
            transmission: "Automatic",
            description: "A luxury sports car offering superb performance and an exquisite design."
        },
        {
            id: 24,
            carName: "Lexus RX",
            capacity: 5,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "SUV",
            price: "₹1,10,00,000",
            price: "₹25,000",
            transmission: "Automatic",
            description: "A luxury SUV that combines performance, style, and technology."
        },
        {
            id: 25,
            carName: "Tesla Model S",
            capacity: 5,
            image: "https://imageplaceholder.net/350x250/eeeeee",
            type: "Electric Sedan",
            price: "₹1,50,00,000",
            price: "₹35,000",
            transmission: "Automatic",
            description: "An electric luxury sedan known for its impressive range and cutting-edge technology."
        }
    ]
    return data
}
export default Loader