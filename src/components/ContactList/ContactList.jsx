import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter(
    (contact) =>
      typeof contact.name === "string" && // чому треба проводити перевірку, рядок чи ні
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.listContainer}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
