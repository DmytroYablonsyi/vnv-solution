import React from "react"
import classes from './faq.module.css'
import Accordion from 'react-bootstrap/Accordion';
import { initialData } from './initialData/initialData'

const Faq = () => {
    return (
        <div className={classes.block}>
            <h1>Відповіді на найчастіші запитання</h1>
            <h2>FAQS</h2>
        <Accordion className={classes.container} defaultActiveKey="0">
            {
                initialData.map((el) => {
                    return <div>
                     <Accordion.Item className={classes.item} key={el.id}  eventKey={el.id}>
                                    <Accordion.Header className={classes.header}>{el.question}</Accordion.Header>
                                    <Accordion.Body className={classes.body}>
                                        {el.answer}
                                    </Accordion.Body>
                        </Accordion.Item>
                   </div>
                  
                })
            }
      </Accordion>
        </div>
    )
    
}

export default Faq