import Home from './pages/home';
import Detail from './pages/detail';

import { useAppSelector } from './app/hooks';

import './global.scss';

function App() {
  const { curPage } = useAppSelector((state) => state.case);
  
  return (
    <div className="root-container">
      {curPage !== 'detail' && <Home />}
      {curPage === 'detail' && <Detail />}
    </div>
  );
}

export default App;
