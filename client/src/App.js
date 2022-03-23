import './App.css';
import { Nav, Footer, Services, Transactions, Loader } from './components';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <h1 className="h-screen flex flex-col bg-gradient-to-r from-indigo-500 via-voilet-400 to-blue-200">
      <Nav />
      <Welcome />
      <Services />
      <Transactions />
      <Footer />
    </h1>
  )
}

