import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/busca/:court/:number" element={<SearchResult />} />
    </Routes>
  );
}

export default App;
