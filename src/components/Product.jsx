function Product({ label, image, name, price }) {
    return (
        <article>
            <span>{label}</span>
            <img src={image} alt={name} />
            <p>{name}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product;
