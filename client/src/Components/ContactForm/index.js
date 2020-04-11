import React, { useState } from 'react';
import styles from './style.module.css';

function ContactForm() {

    const [message, setMessage] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [subject, setSubject] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [sent, setSent] = useState(false);
    let [buttonText, setButtonText] = useState("Let's Chat");
    let [currentQ, setCurrentQ] = useState(0);
    const [formActive, activateForm] = useState(false)


    const formSubmit = () => {
        setButtonText(
            buttonText = 'Sending...'
        );


        let data = {
            name: name,
            subject: subject,
            email: email,
            message: message
        }

        setTimeout(() => {
            console.log("sending");
            setButtonText(
                'Sent!'
            );
            setSent(true);
            nextQuestion()
        }, 2000)

        console.log(sent)


        fetch('/api/v1', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)

        }).then(res => {

            console.log(res)
        }).catch(() => {
            console.log("There was an error sending your message, please try again later")
        })

    }






    const nextQuestion = () => {
        setCurrentQ(currentQ = currentQ += 1)
    }


    return (
        <div>

            <form className={`${styles.contactForm} ${styles.red}`} >
                {
                    currentQ === 0 ?
                        <p className={styles.formIntro}>If you'd like to talk, feel free to
                        <span className={styles.beginForm}
                              onClick={nextQuestion}>
                                Contact Me
                            </span>
                        </p>
                        :
                        null
                }


                {
                    currentQ === 1
                        ?
                        <div className={styles.formQ}>
                            <input
                                className={styles.qInput}
                                onChange={e => setName(e.target.value)}
                                name="nametInputBar"
                                type="text"
                                autoFocus
                                // value={questions[currentQ].value}
                                placeholder="Your Name Here"
                                required />

                            <div
                                className={styles.button}
                                onClick={nextQuestion}>
                                Next
                     </div>
                        </div>
                        :
                        null
                }
                {
                    currentQ === 2 ?
                        <div className={styles.formQ}>
                            <input
                                className={styles.qInput}
                                onChange={e => setEmail(e.target.value)}
                                name="emailtInputBar"
                                type="text"
                                autoFocus
                                // value={questions[currentQ].value}
                                placeholder="Your Email Here"
                                required />

                            <div
                                className={styles.button}
                                onClick={nextQuestion}>
                                Next
                         </div>
                        </div> : null
                }
                {
                    currentQ === 3 ?
                        <div className={styles.formQ}>
                            <input
                                className={styles.qInput}
                                onChange={e => setSubject(e.target.value)}
                                name="textInputBar"
                                type="text"
                                autoFocus
                                placeholder="What is the subject of your inquiry?"
                                required />

                            <div
                                className={styles.button}
                                onClick={nextQuestion}>
                                Next
                         </div>
                        </div> : null
                }
                {
                    currentQ === 4 ?
                        <div className={styles.formQ}>
                            <textarea
                                onChange={e => setMessage(e.target.value)}
                                name="message"
                                className={styles.qInputField}
                                type="text"
                                autoFocus
                                placeholder="Please write your message here"
                                required />
                            <div
                                className={styles.button}
                                onClick={formSubmit}>
                                {buttonText}
                            </div>
                        </div>
                        :
                        null
                }
                {
                    sent ?
                        <div className={styles.thankYou}>
                            <h2 className={styles.sentSuccess}>{buttonText}</h2>
                            <h3>Thank you for your message.</h3>
                            <h3>I'll reach out to you as soon as I am able!</h3>
                        </div>
                        :
                        null
                }

            </form>


        </div>
    )
}

export default ContactForm
