import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <section className={s.section}>
      <ul className={s.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
