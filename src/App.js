import logo from './logo.svg';
import './App.css';
import Movieslist from './Component/Movieslist';
import firstimg from './../src/assest/bright.jpg'
import secondimg from './../src/assest/tomb.jpeg'
import brightposter from './assest/BrightPoster.jpeg'
import tomposter from './assest/TomRaiderPoster.jpg'

function App() {
  return (
   <>
    <Movieslist 
    poster = {brightposter}
    filmName = 'Bright' 
    FirstImg ={firstimg} 
    Year='2017, David Ayer' 
    Time ='117 min' 
    Type='Action,Crime,Fantasy'
    Summary='In an alternate present day, humans, orcs, elves and fairies have been coexisting since the beginning of time. Two police officers, one a human, the other an orc, embark on a routine night patrol that will alter the future of their world as they know it. Battling both their own personal differences as well as an onslaught of enemies, they must work together to protect a young female elf and a thought-to-be-forgotten relic, which, in the wrong hands, could destroy everything.'
    />
    <Movieslist 
    poster = {tomposter}
    filmName = 'Tomb Raider' 
    FirstImg ={secondimg}
    Year='2018, Roar uthaug' 
    Time ='125 min' 
    Type='Action,Fantasy'
    Summary='In an alternate present day, humans, orcs, elves and fairies have been coexisting since the beginning of time. Two police officers, one a human, the other an orc, embark on a routine night patrol that will alter the future of their world as they know it. Battling both their own personal differences as well as an onslaught of enemies, they must work together to protect a young female elf and a thought-to-be-forgotten relic, which, in the wrong hands, could destroy everything.'
    />
   </>
  );
}

export default App;
