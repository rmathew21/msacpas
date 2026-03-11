import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}