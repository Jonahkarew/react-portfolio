import React, {useState} from 'react'

function ContactForm() {
    const [message, setMessage] = useState(0)
    const [name, setName] = useState(0)
    return (
        <div>
            <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
                <label class="message" htmlFor="message-input">Your Message</label>
                <textarea onChange={e => setMessage({ message: e.target.value })} name="message" class="message-input" type="text" placeholder="Please write your message here" value={useState.message} required />

                <label class="message-name" htmlFor="message-name">Your Name</label>
                <input onChange={e => setName({ name: e.target.value })} name="name" class="message-name" type="text" placeholder="Your Name" value={useState.name} required />

                <label class="message-email" htmlFor="message-email">Your Email</label>
                {/* <input onChange={(e) => this.setState({ email: e.target.value })} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} /> */}

                <div className="button--container">
                    <button type="submit" className="button button-primary">
                        {/* {this.state.buttonText} */}
                        </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
