import { useState } from 'react';
import './App.css';


const App = ({ arrayNumber }) => {

  const [sortedArray, setSortedArray] = useState([]);

  const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
    return array;
  }

  const handleSortClick = () => {
    const sorted = selectionSort(arrayNumber);
    setSortedArray(sorted);
  }

  return (
    <div className="content">
      <div className='numbers-values'>
        {arrayNumber.map(num => <div key={num} className={`number num-${num}`}>{num}</div>)}
      </div>
      <button className='btn-sort' onClick={handleSortClick}>Отсортировать</button>
    </div>
  );
}

export default App;
