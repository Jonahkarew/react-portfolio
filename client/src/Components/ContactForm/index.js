import React, { useState } from 'react';
import styles from './style.module.css';

function ContactForm() {

    const [message, setMessage] = useState(undefined);
    const [name, setName] = useState(0);
    const [email, setEmail] = useState(1);
    const [sent, setSent] = useState(false);
    const [buttonText, setButtonText] = useState("Let's Chat");
    let [currentQ, setCurrentQ] = useState(0);
    // const inputRef = React.createRef()
    // const [inputClass, setInputClass] = useState(
    //     [{ nameInputClass: styles.formQ },
    //     { emailInputClass: styles.hidden},
    //     { messageInputClass: styles.hidden }

    //     ])

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


        }, 2000)

        console.log(sent)
        setButtonText(
            'Sent!'
        );

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

    const nextButton = <div
        className={styles.button}
        onClick={nextQuestion}
    >
        Next
</div>
    const sendButton = <div
        className={styles.button}
        onClick={formSubmit}
    >
        {buttonText}
    </div>


    const questions = [{
        label: "Your Name",
        placeholder: "Your Name",
        perform: setName,
        button: nextButton,
        value: name
    },
    {
        label: "Your Email",
        placeholder: "Your Email",
        perform: setEmail,
        button: nextButton
    },
    {
        label: "Your Message",
        placeholder: "Your Message",
        perform: setMessage,
        button: sendButton
    }]

    const inputClasses = [
        {inputClass: styles.formQ},
        {inputClass: styles.hidden},
        {inputClass: styles.hidden}
    ]

    function nextQuestion() {
       inputClasses[currentQ + 1] = styles.formQ 
       console.log(inputClasses)
       inputClasses[currentQ] = styles.hidden
        setCurrentQ(currentQ += 1)
    }

    // console.log(inputClass)

    return (
        <div>
            <form className={styles.contactForm} >
                {/* ===================================================== */}
                <div className={inputClasses[0].inputClass}>
                    <label className={styles.qHeader}
                        htmlFor="message-name">
                        Name
                    </label>
                    <input
                        className={styles.qInput}
                        onChange={e => questions[currentQ].perform(e.target.value)}
                        name="textInputBar"
                        type="text"
                        // value={questions[currentQ].value}
                        placeholder="Your Name Here"
                        required />

                    <div
                        className={styles.button}
                        onClick={nextQuestion}>
                        Next
                    </div>
                </div>
                {/* ================================================== */}
                <div className={inputClasses[1].inputClass}>
                    <label className={styles.qHeader}
                        htmlFor="message-name">
                        Email
                    </label>
                    <input
                        className={styles.qInput}
                        onChange={e => questions[currentQ].perform(e.target.value)}
                        name="textInputBar"
                        type="text"
                        // value={questions[currentQ].value}
                        placeholder="Your Email Here"
                        required />

                    <div
                        className={styles.button}
                        onClick={nextQuestion}>
                        Next
                    </div>
                </div>
                {/*                 
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
                        >
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
               
             */}

            </form>
        </div>
    )
}

export default ContactForm
