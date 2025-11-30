function Tile({ image, title, paragraphs }) {
    return (
        <section>
            {image ? (
                <img src={image} alt={title || "Tile image"} />
            ) : (
                <>
                    <h2>{title}</h2>
                    {paragraphs.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </>
            )}
        </section>
    );
}

export default Tile;