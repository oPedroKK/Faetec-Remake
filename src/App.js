import Container from "./components/Container";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import News from "./components/News";
import Others from "./components/Others";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Header/>
      <Menu />
      <Container>
        <Courses />
        <Slider />
        <News />
        <Others />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
