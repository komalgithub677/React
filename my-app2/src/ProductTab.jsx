import Product from "./Product.jsx";

function ProductTab() {
    return (
        <>
            <Product
                title="Phone"
                price={30000}
                features={["hi-tech", "durable"]}
            />

            <Product
                title="Laptop"
                price={40000}
                features={["fast", "powerful"]}
            />

            <Product
                title="Pen"
                price={1}
                features={["lightweight", "portable"]}
            />
        </>
    );
}

export default ProductTab;