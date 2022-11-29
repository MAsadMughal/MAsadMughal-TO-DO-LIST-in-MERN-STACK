import './App.css';
import Wrapper from './components/CardWrapper/Wrapper';
import Input from './components/Inputs/Input';
import getList from './Functions/getList';
import { useEffect, useState } from 'react';
function App() {
  //Defining States
  let [list, setList] = useState([]);
  let [loading, setLoading] = useState(false);

  //Setloading TRUE
  const switchLoad = (value) => {
    setLoading(value);
  }
  //USEEFFECT FOR GETTING ITEMS
  useEffect(() => {
    const getAllItems = async () => {
      const { data } = await getList()
      setList(data.allItems);
    }
    console.log("asdd");
    getAllItems();
  }, [])

  //Component
  return (
    <div className="App">
      <Input setList={setList} list={list} loading={loading} switchLoad={switchLoad} />
      <Wrapper list={list} loading={loading} />
    </div>
  );
}

export default App;
