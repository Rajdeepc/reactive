import addToMailchimp from 'gatsby-plugin-mailchimp'
import React from 'react';


const ContactCard = () => {
    


    return (
            <div>
                <form action="https://app.convertkit.com/forms/994919/subscriptions" className="form-kit" method="post" data-sv-form="994919" data-uid="cc9d202e61" data-format="inline" data-version="5" data-options="{'settings':{'after_subscribe':{'action':'message','redirect_url':'','success_message':'Success! Now check your email to confirm your subscription.'},'return_visitor':{'action':'show','custom_content':''},'recaptcha':{'enabled':false}}}">
                     <div className="full">
                        <div className="column" style={{backgroundColor: 'rgb(249, 250, 251)'}}>
                            <h3>Join the Newsletter</h3>
                            <p>Subscribe to get my latest content by email.</p>
                        </div>
                        <div className="column" >
                            <div className="fields">
                                <div className="form-field">
                                    <input type="text" className="formkit-input" placeholder="Your Name" required name="fields[first_name]"/>
                                </div>
                                <div className="form-field">
                                    <input type="email" className="formkit-input" placeholder="Your Email" required name="email_address" />
                                </div>
                                <div className="form-field">
                                    <button type="submit" className="submit-button">Subscribe</button>
                                </div>
                                <p>I won’t send you spam.<br/>Unsubscribe at any time.</p>
                            </div>
                        </div>
                     </div>
                </form>
            </div>
            )
  }


  export default ContactCard;