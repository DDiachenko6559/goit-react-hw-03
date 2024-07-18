import s from "./Contact.module.css";
import { LuContact2, LuPhone } from "react-icons/lu";

const Contact = ({ name, number }) => {
  return (
    <div className={s.contact}>
      <p>
        <LuContact2 /> {name}
      </p>
      <p>
        <LuPhone /> {number}
      </p>
    </div>
  );
};
export default Contact;
