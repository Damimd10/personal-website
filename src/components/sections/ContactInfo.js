const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Ponerse en Contacto</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20989.789999999997!2d-56.1881!3d-34.9011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80ffc63bf7d3%3A0x6b321b2e355bec99!2sMontevideo%2C%20Uruguay!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Email . . . . .</strong> Lucianacorrea823@gmail.com
              </li>
              <li>
                <strong>Teléfono . . . . .</strong> +598 98 632 366
              </li>
              <li>
                <strong>Freelance . . . . .</strong> Disponible
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
