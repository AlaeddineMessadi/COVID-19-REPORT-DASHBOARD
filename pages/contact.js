import SectionTitle from '../components/sectionTitle'
import ContactForm from '../components/form/contactForm'

function Contact({ children, id = "contact" }) {
  return (
    <section className="section has-text-centered">
      <SectionTitle
        title="CONTACT PAGE"
        subtitle="Do you have a question in mind?"
      />
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h4 className="subtitle center"> Send Email to <a href="mailto: abc@example.com">abc@example.com</a> </h4>
          </div>
        </div>
      </section>
    </section>

  )
}

export default Contact
