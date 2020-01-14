import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './componentes/SearchBar';
import VideoList from './componentes/VideoList'; 
import VideoPlayer from './componentes/VideoPlayer';

function App() {
  return (
    <div className="container">
      <SearchBar></SearchBar>
      <VideoList></VideoList>
      <VideoPlayer></VideoPlayer>
    </div>
  );
}

export default App;
