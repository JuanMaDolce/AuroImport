import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import PhotoBox from './components/PhotoBox';
import Text from './components/Text';


function App() {
  return (
    <div className='App'>
        <Header />
        <Text />
        <PhotoBox />
        <Contact />
    </div>
  );
}

export default App;
