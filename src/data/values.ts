type valuesProp = {
    title? : string;
    sub? : string;
    icon? : string;
}

const valuesData:Array<valuesProp> = [
    {
        title : "Free Shipping",
        sub: "Order above $200",
        icon : "truck-delivery"
    },
    {
        title : "Money-back",
        sub: "30 days guarantee",
        icon : "money-02"
    },
    {
        title : "Secure Payments",
        sub: "Secured by Stripe",
        icon : "square-lock-02"
    },
    {
        title : "24/7 Support",
        sub: "Phone and Email support",
        icon : "customer-support"
    },
]

export default valuesData