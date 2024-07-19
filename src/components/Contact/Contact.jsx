import s from "./Contact.module.css";
import { LuContact, LuPhone } from "react-icons/lu";

const Contact = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };

  return (
    <div className={s.contact}>
      <div className={s.card}>
        <p className={s.text}>
          <LuContact className={s.contactIcon} size="20" /> {contact.name}
        </p>
        <p className={s.text}>
          <LuPhone className={s.contactIcon} size="20" /> {contact.number}
        </p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
