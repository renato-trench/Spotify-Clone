
//Arrow Function - Maior facilidade para retornar dados, mais enxuto
import React from "react";
import Header from "./components/Header";
import Main from './components/Main'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Artists from "./pages/Artists";
import Song from "./pages/Song";
import Songs from "./pages/Songs";

const App = () => 
{
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="/artist/:id" element={<Artist/>}/> 
    <Route path="/artists" element={<Artists/>}/> 
    <Route path="/song/:id" element={<Song/>}/> 
    <Route path="/songs" element={<Songs/>}/>   
  </Routes>
  </BrowserRouter>
  );
};
export default App
