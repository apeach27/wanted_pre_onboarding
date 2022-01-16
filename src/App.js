import Header from './components/Header';
import Slider from "./components/react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Slider />
      </div>
    </>
  );
}

export default App;
