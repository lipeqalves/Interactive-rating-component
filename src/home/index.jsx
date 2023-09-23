import { useContext } from "react";
import { Card } from "../components/Card/Card";
import { CardFinal } from "../components/CardFinal/CardFinal";
import { Footer } from "../components/Footer/Footer";
import "./Home.css";
import { MyContext } from "../../context";
const Home = () => {
  const { isVisible } = useContext(MyContext);
  return (
    <main className="home">
      {isVisible && <Card />}
      {!isVisible && <CardFinal />}
      <Footer />
    </main>
  );
};

export default Home;
