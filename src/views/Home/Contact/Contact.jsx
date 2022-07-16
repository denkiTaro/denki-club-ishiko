import React from 'react';
import './_Contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact" id="contact">
        <h1>CONTACT</h1>
        <div className="contact-info">
          <div className="contact-info-img">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5568.338405171268!2d141.2898407434721!3d38.43860053346483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f89a378a62d1c09%3A0xa8bf5629c2e161cc!2z5a6u5Z-O55yM55-z5be75bel5qWt6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1643033061851!5m2!1sja!2sjp"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <span>
            <h2>宮城県石巻工業高等学校</h2>
            Tel: 0225-22-6338
          </span>
        </div>
      </div>
    );
  }
}

export default Contact;
