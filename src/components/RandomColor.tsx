import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { inpurtColor, RootState } from '../redux/store';
import styles from './RandomColor.module.css';

const RandomColor = () => {
  const targetColorState = useSelector((state: RootState) => state.targetColor);

  const dispatch = useDispatch();

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
      <ul className={styles.container}>
        {
          colors.map((value, index) => (
            <Link to={`/color`} style={{ textDecoration: "none" }} key={`${index}_${index}`} 
            onClick={() => dispatch(inpurtColor(value))}>
              <li className={styles.color}>
                <div className={styles.color_box} style={{background: `${value}`}}></div>
                <span className={styles.color_value}>{value}</span>
              </li>
            </Link>
          ))
        }
      </ul>
      <button className={styles.refresh_btn} onClick={() => {setColors(createColors())}}>다른 색 보기</button>
    </>
  )
}

export default RandomColor;