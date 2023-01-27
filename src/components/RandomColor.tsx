import { useEffect, useState } from 'react';
import styles from './RandomColor.module.css';

const RandomColor = () => {
  
  const createColors = () => {
    let colorArr = [];
    for(let i = 0; i < 32; i++) {
      let radomHex = Math.floor(Math.random() * 0xffffff).toString(16);
      radomHex = `#${radomHex.padStart(6,'0')}`;

      colorArr[i] = radomHex;
    }
    return colorArr;
  }
  
  const [colors, setColors] = useState<string[]>([]);
  useEffect(() => {
    setColors(createColors());
  }, [])

  return (
    <>
      <h1 className={styles.title}>Color Palette</h1>
      <ul className={styles.container}>
        {
          colors.map((value, index) => (
            <li className={styles.color} key={`${index}_${index}`}>
              <div className={styles.color_box} style={{background: `${value}`}}></div>
              <span className={styles.color_value}>{value}</span>
            </li>
          ))
        }
      </ul>
      <button className={styles.refresh_btn} onClick={() => {setColors(createColors())}}>다른 색 보기</button>
    </>
  )
}

export default RandomColor;