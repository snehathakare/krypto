import './App.css';
import { Nav, Footer, Services, Transactions, Loader } from './components';

export default function App() {
  return (
    <h1 className="h-screen flex flex-col bg-gradient-to-r from-indigo-500 via-voilet-400 to-blue-200">
      <Nav />
      <Services />
      <Transactions />
      <Footer />
    </h1>
  )
}

