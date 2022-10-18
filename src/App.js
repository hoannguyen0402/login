import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([{ id: 1, title: "anhcotz" }]);
  const [newData, setNewData] = useState("");
  const [dataEdit, setDataEdit] = useState('');
  const [content, setContent] = useState('');
  const addData = () => {
    const list = [...data, { id: random(data), title: newData }];
    setData(list);
    setNewData('');
    setContent("")
  };
  const deleteData = (item) => {
    const newList = data.filter(el => el.id !== item.id)
    setData(newList);
    setNewData('');
  };
  const done = (item) => {
    const listData = data.map(el => {
      if (el.id === item.id) {
        return {
          id: el.id,
          title: dataEdit
        }
      } else {
        return el
      }
    });
    setData(listData);
    setContent('');
  }
  const random = (arr) => {
    const id = Math.random() * 100;
    const fill = arr.filter(data => data.id === id)
    if (fill.length > 0) {
      random(arr)
    } else {
      return id
    }
  }
  const editList = (data) => {
     setDataEdit(data);
    setContent(data);
  }

  return (
    <div className="App">
      <h1>TODO APP SIMPLE</h1>
      <div >
        <input className='search' value={newData} onChange={(e) => setNewData(e.target.value)}></input>
        <button className='add' onClick={() => addData()}>ADD</button>
      </div>
      {data.map(item => {
        return (
          <div className='content'>
            {content !== item.title ?
              <p>{item.title}</p>
              : <input align = "middle" className='input' value={dataEdit} onChange={(e) => setDataEdit(e.target.value)}></input>
            }
            {
              content !== item.title ?
                <button className='done' onClick={() => editList(item.title)}>Edit</button>
                : <button className='done' onClick={() => done(item)}>Done</button>
            }
            <button className='delete' onClick={() => deleteData(item)}>Delete</button>
          </div>
        )
      }


      )}
      <div className='total-todo'>total TODO:{data.length}</div>
    </div>
  );
}

export default App;
