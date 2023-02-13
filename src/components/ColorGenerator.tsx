import styles from './ColorGenerator.module.css'
import { useEffect, useState } from 'react'

import { ColorType } from '../redux/type'
import rgbToHex from '../calc'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Link, useParams } from 'react-router-dom'
import Values from 'values.js';

const ColorGenerator = () => {
  const targetColorState = useSelector((state: RootState) => state.targetColor);
  let colors = new Values(targetColorState).all(10);

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.target_name}>{targetColorState}</h1>
        <div className={styles.title_box}
        style={{background: `${targetColorState}`}}>
        </div>
      </div>
      <section className={styles.container}
      style={{background: `${targetColorState}`}}>
      {
        colors.map((value, index) => (
          <SingleColor key={`${index}_${index}`} value={value} index={index}/>
        ))
      }
      </section>
      <Link to='/' className={styles.go_home}>home</Link>
    </>
  )
}


interface SingleColorProps {
  value: ColorType
  index: number
}

const SingleColor = ({ value, index }:SingleColorProps) => {
  const { rgb, weight } = value;
  const [alert, setAlert] = useState(false);
  const bgColor = rgb.join(',');
  const hex = rgbToHex(rgb);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [alert])
  
  return (
    <article 
      className={`${styles.color} ${index > 10 && styles.color_light}`} 
      style={{backgroundColor: `rgb(${bgColor})`}}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className={styles.percent_value}>{weight}%</p>
      <p className={styles.color_value}>{hex}</p>
      {
        alert && 
        <p className={styles.alert_text}>copied to clipboard</p>
      }
    </article>
  )
}

export default ColorGenerator;