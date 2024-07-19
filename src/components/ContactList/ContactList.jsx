import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <section className={s.section}>
      <ul className={s.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} onDeleteContact={onDeleteContact} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
