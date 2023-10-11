import { Button } from 'react-bootstrap'
import styles from './item.module.css'

export const WhyUsItem = (props) => {
    return(
        <div className={styles.item}>
            <img className={styles.img} src={require(`../media/${props.src}`)} alt="img"/>
            <p>{props.text}</p>
            <Button variant="outline-light">Замовити</Button>
        </div>
    )
}