import './App.css';
import NavigationBar from "./components/NavigationBar";
import '../src/style/landingpage.css'
import Intro from './components/Intro';
import Trending from './components/Trending';

function App() {
  return (
    <div>
      {/* {Intro Section} */}
      <div className='myBg'>
        <NavigationBar/>
        <Intro/>
      </div>
      {/* {end of intro} */}

      {/* {Trending Section} */}
      <div className='trending'>
        <Trending/>
      </div>
      {/* {End Trending Section} */}

    </div>
  );
}

export default App;
