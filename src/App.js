import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Content from './Pages/Content';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Content />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
