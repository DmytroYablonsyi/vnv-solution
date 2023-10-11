import { Button } from 'react-bootstrap'
import { CaptionHead } from '../../captionComponents/caption'
import classes from './contacts.module.css'

const Contacts = () => {
    return(
        <>
        <CaptionHead name={"OUR CONTACTS"}/>
        <div className={classes.container}>
            <div className={classes.contactContainer}>
                <h1 className={classes.contacts}>Contacts:</h1>
                <p>E-MAIL: <a className={classes.mail} href = "team@vnv.solutions">team@vnv.solutions</a></p>
                <p>Telegram</p>
                <p>Whatsapp</p>
                <p>Viber</p>
            </div>
            <div className={classes.formContainer}>
              <form className={classes.form}>
                <h2>Leave your contacts</h2>
                <input placeholder='Name' type='text'></input>
                <input placeholder='Phone' type='number'></input>
                <input placeholder='E-mail' type='email'></input>
                <textarea placeholder='Message'></textarea>
                <Button variant="outline-light">Зв`язатись</Button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contacts