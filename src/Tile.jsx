function Tile({ image, alt, title, paragraphs }) {
    if (image) {
        return (
            <section>
                <img src={image} alt={alt} />
            </section>
        );
    }

    return (
        <section>
            <h2>{title}</h2>
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </section>
    );
}

export default Tile;
