import './App.css';
import Navbar from './components/components/Navbar';
import Home from './contents/Home';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)


  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
        setData(await response.clone().json())
        setFilter(await response.json())
    }
    getProducts()

  }, [])
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList)

}
  return (
    <Router>
      <div className="App">
        <Navbar data={data} setFilter={setFilter} filterProduct={filterProduct} />
        <Home data={data} filter={filter}/>
      </div>
    </Router>
  );
}

export default App;
