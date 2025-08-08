
type newArrivalsType = {
    liked?: boolean;
    ratings?: number;
    price?: number;
    oldPrice?: number;
    image? : string;
    name? : string;

}

const newArrivalsData:Array<newArrivalsType> = [
    {
        name :"Loveseat Sofa",
        ratings : 4.5,
        liked : true,
        price : 199,
        oldPrice : 400,
        image : "couch.png"
    },
    {
        name :"Table Lamp",
        ratings : 4,
        liked : false,
        price : 24.99,
        oldPrice : 0,
        image : "lamp.png"
    },
    {
        name :"Beige Table Lamp",
        ratings : 4.5,
        liked : false,
        price : 30.97,
        oldPrice : 0,
        image : "lamp-2.png"
    },
    {
        name :"Bamboo basket",
        ratings : 3,
        liked : true,
        price : 10,
        oldPrice : 0,
        image : "basket.png"
    },
    {
        name :"Toaster",
        ratings : 4,
        liked : true,
        price : 41.38,
        oldPrice : 67.07,
        image : "toaster.png"
    },
    {
        name :"Electric Kettle",
        ratings : 2.4,
        liked : false,
        price : 15.92,
        oldPrice : 0,
        image : "electric-kettle.png"
    },
    {
        name :"Black fan",
        ratings : 1,
        liked : false,
        price : 11,
        oldPrice : 18,
        image : "black-fan.png"
    },
    {
        name :"Stainless Mirror",
        ratings : 4,
        liked : false,
        price : 50,
        oldPrice : 0,
        image : "mirror.png"
    },
]

export default newArrivalsData