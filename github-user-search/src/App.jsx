import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-[#f8f9fa] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-[#6c757d]">
          Search GitHub Like a Pro!
        </h1>
        <Routes>
          {/* Define routes for the app */}
          <Route path="/" element={<Search />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;