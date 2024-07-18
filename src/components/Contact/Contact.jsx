import s from "./Contact.module.css";
import { LuContact, LuPhone } from "react-icons/lu";

const Contact = ({ name, number }) => {
  return (
    <div className={s.contact}>
      <div className={s.card}>
        <p className={s.text}>
          <LuContact className={s.contactIcon} size="20" /> {name}
        </p>
        <p className={s.text}>
          <LuPhone className={s.contactIcon} size="20" /> {number}
        </p>
      </div>
      <button type="button">Delete</button>
    </div>
  );
};
export default Contact;
