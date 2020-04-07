import React, { useState } from 'react'

function ContactForm() {

    const [message, setMessage] = useState(0);
    const [name, setName] = useState(0);
    const [email, setEmail] = useState(0);
    const [sent, setSent] = useState(false);
    const [buttonText, setButtonText] = useState("Let's Talk");

    const formSubmit = (e) => {

        // e.preventDefault();

        setButtonText(
            'Sending...' 
        );

        
        let data = {
            name: name,
            email: email,
            message: message
        }

        setTimeout(()=>{
            console.log("sending");
            console.log(data)

            setButtonText(
                'Sent!'
            );
        }, 2000)


        // fetch('API_URI', {
        //     method: 'post',
        //     body: JSON.stringify(data)
        // }).then( res => {
        //     setSent(true)
        // }).catch(() => {
            // console.log("There was an error sending your message, please try again later")
        // })
        // console.log(data)
    }

    return (
        <div>
            <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
                <label className="message" htmlFor="message-input">Your Message</label>
                <textarea onChange={e => setMessage(e.target.value)} name="message" className="message-input" type="text" placeholder="Please write your message here" required/>

                <label className="message-name" htmlFor="message-name">Your Name</label>
                <input onChange={e => setName(e.target.value)} name="name" className="message-name" type="text" placeholder="Your Name" required/>

                <label className="message-email" htmlFor="message-email">Your Email</label>
                <input onChange={(e) => setEmail(e.target.value)} name="email" className="message-email" type="email" placeholder="your@email.com" required/>

                <div className="button--container">
                    <div type="submit" className="button button-primary" onClick={formSubmit}>
                        {buttonText}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
