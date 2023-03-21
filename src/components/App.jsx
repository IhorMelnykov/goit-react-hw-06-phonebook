import { Form } from "components/Form/Form";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import {useSelector } from 'react-redux';

import { Div, H1, H2, P } from "./App.styled";

export function App() {
   
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    
    <Div>
      <H1>Phonebook</H1>
      <Form />
      <H2>Contacts</H2>
      {contacts.length !== 0 ?
       <>
      <Filter />
      <ContactList />
       </> : 
      <P>There are no saved contacts!</P>
      }
    </Div>
  );
};
