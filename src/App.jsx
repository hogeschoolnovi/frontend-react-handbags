import './App.css'

import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

// Images
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";

import brand from "./assets/brand.png";
import ourStory from "./assets//our_story.png";



    function App() {
        return (
            <>

                <nav>
                    <Button text="Best Sellers" onClick={() => console.log("Best Sellers")} />
                    <Button text="New Arrivals" onClick={() => console.log("New Arrivals")} />
                    <Button text="Sale" disabled={true} onClick={() => console.log("Sale")} />
                </nav>

                {/* PRODUCTS */}
                <main>
                    <Product label="Best Seller" image={bag1} name="Leather Brown Bag" price="€150" />
                    <Product label="New" image={bag2} name="Red Party Clutch" price="€95" />
                    <Product label="Limited" image={bag3} name="Vintage Shoulder Bag" price="€220" />
                    <Product label="Classic" image={bag4} name="Black Luxury Tote" price="€180" />
                </main>


                {/* TILES SECTION */}
                <footer>
                    {/* BRAND TILE (image on right) */}
                    <Tile image={brand} />

                    {/* STORY TEXT BLOCK */}
                    <Tile
                        title="THE BRAND"
                        paragraphs={[
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.",
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.",
                        ]}
                    />

                    {/* IMAGE TILE */}
                    <Tile image={ourStory} />

                    {/* OUR STORY TEXT BLOCK */}
                    <Tile
                        title="OUR STORY"
                        paragraphs={[
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem illo, labore laboriosam nihil omnis praesentium.",
                            "Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum sunt. At repellendus tenetur veniam!",
                        ]}
                    />
                </footer>
            </>
        );
    }

export default App;gi