import "./App.css";
import Navbar from "./Navbar";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />

      <div className="wait">
        <div className="first">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          consequuntur possimus, dolorum repudiandae accusantium unde id ipsum
          aspernatur dignissimos, vel perspiciatis exercitationem tempore
          explicabo reprehenderit minus odio excepturi consectetur harum.
        </div>
        <div className="first">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          atque at tempora laborum totam. Ratione ipsam suscipit modi culpa! Nam
          repellat commodi aperiam mollitia ea, libero cum unde tenetur? Aut?
        </div>
        <div className="first">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          tenetur hic, ipsa iusto ut itaque veniam similique ipsum in illo quo
          accusamus asperiores iure sed quas facilis dolor placeat fugit?
        </div>
      </div>
    </div>
  );
}

export default App;
