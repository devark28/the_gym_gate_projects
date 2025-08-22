import { useState, useMemo } from 'react'
import './App.css'
import { useCallback } from 'react';

// 1st AI blamed chance
/*
Create a login form with email and password fields:
Make it a controlled component.
Show an error message if the password is less than 6 characters.
Add a button that toggles between showing and hiding the password.
*/

// 2nd Chance
/*
Build a component that:

- Renders a list of **1000 items** (dummy data).
- Has a text input for filtering items.
- Optimize performance using **`useMemo`** (for filtering) and **`useCallback`** (for event handlers).
aat-yhxs-nnc
*/
const items = Array.from({ length: 1000 }, (_, i) => `item ${i + 1}`);

function App() {
  const [filter, setFilter] = useState('');
  const filteredItems = useMemo(() => items.filter(item => item.includes(filter)), [filter]);
  const handleFilter = useCallback((e) => setFilter(e.target.value), [])
  return (
    <>
      <input value={filter} onChange={handleFilter} />
      <Items items={filteredItems} />
    </>
  )
}

function Items({ items }) {
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}

export default App
