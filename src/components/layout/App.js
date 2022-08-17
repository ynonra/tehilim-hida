import { Outlet } from 'react-router-dom';
import '../../App.scss';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default App;
