export default function App() {
    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
            className="displayed-img"
            src="images/pic1.jpg"
            alt="Closeup of a human eye"
          />
          <img
           className="displayed-img"
           src="images/pic2.jpg"
           alt="Rock that looks like a wave"
        />
          <img
           className="displayed-img"
           src="images/pic3.jpg"
           alt="Purple and white pansies"
        />
          <img
           className="displayed-img"
           src="images/pic4.jpg"
           alt="Section of wall from a pharoah's tomb"
        />
          <img
           className="displayed-img"
           src="images/pic5.jpg"
           alt="Large moth on a leaf"
        />
          <div className="overlay"></div>
          <button className="dark">Darken</button>
        </div>
        <div className="thumb-bar"></div>
      </>
    );
  }