import './App.css'
import Button from './Button.jsx'
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import Product from './Product.jsx'
import brandImg from './assets/brand.png'
import ourStoryImg from './assets/our_story.png'
import Tile from './Tile.jsx'
function App() {
  function handleButtonClick(buttonText) {
    console.log(buttonText);
  }

  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button label="to the collection" onClick={() => handleButtonClick('to the collection')} />
          <Button label="shop all bags" onClick={() => handleButtonClick('shop all bags')} />
          <Button label="pre-orders" onClick={() => handleButtonClick('pre-orders')} disabled />
        </nav>
        <main>
            <Product label="Best seller" image={bag1} name="The handy bag" price="€400,-" />
            <Product label="Best seller" image={bag2} name="The stylish bag" price="€250,-" />
            <Product label="New collection" image={bag3} name="The simple bag" price="€300,-" />
            <Product label="New collection" image={bag4} name="The trendy bag" price="€150,-" />
        </main>
        <footer>
          <Tile title="THE BRAND" paragraphs={[
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.'
          ]} />
          <Tile image={brandImg} alt="Merkafbeelding" />
          <Tile image={ourStoryImg} alt="Twee vriendinnen" />
          <Tile title="OUR STORY" paragraphs={[
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum sunt. At repellendus tenetur veniam!'
          ]} />
        </footer>
      </>
  )
}

export default App