import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form'
import ContentPage from './ContentPage'
import Table from './Table';
function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [items, setItems] = useState([])
  const [reqType, setReqType] = useState('users')

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`)
        if (!response.ok) throw Error("Data Not Recevid")
        const data = await response.json()
        setItems(data)
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchItems()
  }, [reqType])

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType}/>
      <ContentPage items={items}/>
      <Table items={items}/>
    </div>
  );
}

export default App;
