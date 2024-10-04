import React, { useState } from 'react';
import './App.css';
import CelebrityCard from './components/CelebrityCard';

const celebrityData = [
  { name: "Brad Pitt", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/800px-Brad_Pitt_2019_by_Glenn_Francis.jpg" },
  { name: "Angelina Jolie", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg/800px-Angelina_Jolie_2_June_2014_%28cropped%29.jpg" },
  { name: "Leonardo DiCaprio", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/800px-Leonardo_Dicaprio_Cannes_2019.jpg" },
  { name: "Meryl Streep", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/800px-Meryl_Streep_December_2018.jpg" },
  { name: "Tom Hanks", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/800px-Tom_Hanks_TIFF_2019.jpg" },
  { name: "Jennifer Lawrence", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Jennifer_Lawrence_SDCC_2015_X-Men.jpg/800px-Jennifer_Lawrence_SDCC_2015_X-Men.jpg" },
  { name: "Robert Downey Jr.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/800px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg" },
  { name: "Scarlett Johansson", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg/800px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg" },
  { name: "Will Smith", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/800px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg" },
  { name: "Emma Stone", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Emma_Stone_at_the_39th_Mill_Valley_Film_Festival_%28cropped%29.jpg/800px-Emma_Stone_at_the_39th_Mill_Valley_Film_Festival_%28cropped%29.jpg" },
  { name: "Johnny Depp", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Johnny_Depp-2757_%28cropped%29.jpg/800px-Johnny_Depp-2757_%28cropped%29.jpg" },
  { name: "Natalie Portman", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Natalie_Portman_%2848470988352%29_%28cropped%29.jpg/800px-Natalie_Portman_%2848470988352%29_%28cropped%29.jpg" },
  { name: "Chris Hemsworth", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/800px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg" },
  { name: "Margot Robbie", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Margot_Robbie_at_Somerset_House_in_2013_%28cropped%29.jpg/800px-Margot_Robbie_at_Somerset_House_in_2013_%28cropped%29.jpg" },
  { name: "Denzel Washington", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Denzel_Washington_2018.jpg/800px-Denzel_Washington_2018.jpg" }
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % celebrityData.length);
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + celebrityData.length) % celebrityData.length);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>🌟 Guess the Celebrity! 🌟</h1>
        <p className="description">How well do you know your Hollywood stars? Put your knowledge to the test! 🎬</p>
        <p className="celebrity-count">We've got {celebrityData.length} stars waiting for you to guess! 🤩</p>
        
        <CelebrityCard 
          celebrity={celebrityData[currentCardIndex]}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </div>
  );
}

export default App;