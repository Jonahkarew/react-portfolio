import React, { useState } from 'react';
import styles from './style.module.css';

function ContactForm() {

    const [message, setMessage] = useState(0);
    const [name, setName] = useState(0);
    const [email, setEmail] = useState(0);
    const [sent, setSent] = useState(false);
    const [buttonText, setButtonText] = useState("Let's Talk");
    const [currentQ, setCurrentQ] = useState(0);
    const formRef = React.createRef();

    const formSubmit = () => {
        setButtonText(
            'Sending...'
        );


        let data = {
            name: name,
            email: email,
            message: message
        }

        setTimeout(() => {
            console.log("sending");
            console.log(data)

            setButtonText(
                'Sent!'
            );
        }, 2000)


        fetch('/api/v1', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
            // data
        }).then(res => {
            setSent(true)

        }).catch(() => {
            console.log("There was an error sending your message, please try again later")
        })

    }

    const nextQ = () => {
        formRef.nth
    }

    const renderQuestion = () => {
        if (currentQ){
            render
        }
    }

    return (
        <div>
            <form ref={formRef} className={styles.contactForm} >
                
                <div className={styles.formQ}>
                    <label className={styles.qHeader}
                        htmlFor="message-name">
                        Your Name
                    </label>
                    <input
                        className={styles.qInput}
                        onChange={e => setName(e.target.value)}
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        required />
                    <div
                        className={styles.button}
                        onClick={renderQuestion}>
                        Next
                    </div>
                </div>
                <div className={styles.formQ}>
                    <label className={styles.qHeader} htmlFor="message-email">Your Email</label>
                    <input
                        className={styles.qInput}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required />
                         <div
                        className={styles.button}>
                        Next
                    </div>
                </div>
                <div className={styles.formQ}>
                    <label
                        className={styles.qHeader}
                        htmlFor="message-input">Your Message</label>
                    <textarea
                        onChange={e => setMessage(e.target.value)}
                        name="message"
                        className={styles.qInputField}
                        type="text"
                        placeholder="Please write your message here"
                        required />
                         <div
                        className={styles.button}>
                        Next
                    </div>
                </div>
                <div className="button--container">
                    <div type="submit"
                        className={styles.button}
                        onClick={formSubmit}>
                        {buttonText}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
