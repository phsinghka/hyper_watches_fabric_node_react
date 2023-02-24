import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import TranferPage from './components/TransferPage';
import CreatePage from './components/CreatePage';
import SearchPage from './components/SearchPage';



function App() {

  return (
    <Routes>
      <Route path="" element={<NavigationBar />}>
        <Route path="transfer" element={<TranferPage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>


  )
}

export default App
