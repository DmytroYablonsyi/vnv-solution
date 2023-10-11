import classes from './caption.module.css'

export const CaptionHead = (props) => {
    return(
        <h1 className={classes.head}>{props.name}</h1>
    )
}