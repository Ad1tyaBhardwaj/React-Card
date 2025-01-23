import React from 'react'
import styles from './Hero.module.css';


function Hero({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,
}) {
  return (
    <div className={styles.hero}>
        {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className={styles.img}></img>}
        {title && <h1 className={styles.cardTitle}>{title}</h1>}
        {description && <p className={styles.cardTitle}>{description}</p>}
        {buttonText && link && <a href={link} className={styles.cardBtn}>{buttonText}</a>}
    </div>
  )
}

export default Hero