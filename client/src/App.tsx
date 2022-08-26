import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/busca/:court/:number" element={<SearchResult />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
