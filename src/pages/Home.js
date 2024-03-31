import Footer from "./Footer";
import Musicdisplay from "./components/Musicdisplay";
import Artistdisplay from "./components/Artistdisplay";
import "./Home.css";
import "./Footer.css";

export default function Home(props) {
  return (
    <>
      <h1>Home</h1>
      <Musicdisplay />
      <Artistdisplay />
      <Footer />
    </>
  );
}
