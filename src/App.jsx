import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Layout from './components/Layout';
import Category from './pages/Category';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='categorie/:category' element={<Category />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
