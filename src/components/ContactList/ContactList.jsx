import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <section>
      <ul className={s.contactList}>
        <h2>Contact List</h2>
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
