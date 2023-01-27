import { useState } from 'react';

import Values from 'values.js';

import styles from './Header.module.css';

const Header = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    let colors = new Values(color).all(10)
  }

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Color Palette</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)}
          placeholder='#000000' />
          <button className={styles.input_btn} type='submit'>
            submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Header;