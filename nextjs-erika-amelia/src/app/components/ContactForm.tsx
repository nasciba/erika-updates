"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactFormState } from "../contato/actions";
import {
  ContactForm as StyledForm,
  ContactFormWrap,
  ContactField,
  ContactFieldLabel,
  ContactFieldInput,
  ContactFieldTextarea,
  ContactSubmit,
  ContactFormMessage,
} from "./styled/ContactStyles";

const initialState: ContactFormState = null;

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, initialState);

  return (
    <ContactFormWrap>
      <StyledForm action={formAction}>
        <ContactField>
          <ContactFieldLabel htmlFor="contact-name">Nome</ContactFieldLabel>
          <ContactFieldInput
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Seu nome"
            autoComplete="name"
          />
        </ContactField>
        <ContactField>
          <ContactFieldLabel htmlFor="contact-email">Email</ContactFieldLabel>
          <ContactFieldInput
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="seu@email.com"
            autoComplete="email"
          />
        </ContactField>
        <ContactField>
          <ContactFieldLabel htmlFor="contact-subject">Assunto</ContactFieldLabel>
          <ContactFieldInput
            id="contact-subject"
            name="subject"
            type="text"
            required
            placeholder="Assunto da mensagem"
          />
        </ContactField>
        <ContactField>
          <ContactFieldLabel htmlFor="contact-message">Mensagem</ContactFieldLabel>
          <ContactFieldTextarea
            id="contact-message"
            name="message"
            required
            placeholder="Sua mensagem"
            rows={5}
          />
        </ContactField>
        {state?.success === true && (
          <ContactFormMessage>{state.message}</ContactFormMessage>
        )}
        {state?.success === false && (
          <ContactFormMessage $error>{state.error}</ContactFormMessage>
        )}
        <ContactSubmit type="submit">Enviar</ContactSubmit>
      </StyledForm>
    </ContactFormWrap>
  );
}
