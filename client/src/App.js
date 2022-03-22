import './App.css';
import { Nav, Footer, Services, Transactions, Loader } from './components';

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <Nav />
      <Services />
      <Transactions />
      <Footer />
      <Loader />
    </h1>
  )
}

