import "./Product.css";

function Product({ title, price, features = [] }) {
    let isDiscount = price > 30000;

    let styles = {
        backgroundColor: isDiscount ? "pink" : ""
    };

    const list = features.map((feature) => (
        <li key={feature}>{feature}</li>
    ));

    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h3>Price: {price}</h3>

            {features.length > 0 && <ul>{list}</ul>}

            {isDiscount && <p>Discount of 50%</p>}
        </div>
    );
}

export default Product;