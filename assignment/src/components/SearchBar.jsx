import React from 'react';
import '../styles/SearchBar.css'
import mic from '../images/microphone.png'
import cam from '../images/camera.png'

function SearchBar() {
  return (
        <div className="search-container">
          <form action="https://www.google.com/search" method="GET" target="_blank">
            <div className="search-input-container">
              <input type="text" placeholder="Search Google..." className="search-input"/>
              <div className="search-icons-container">
                <button type="button" className="search-mic-button">
                <img src={mic} alt='microphone'style={{height: '25px'}}/>
                </button>
                <button type="button" className="search-camera-button">
                <img src={cam} alt='camera' style={{height: '25px'}}/>
                </button>
              </div>
            </div>
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>

        
      );
    }

export default SearchBar;
