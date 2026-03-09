import styled from "styled-components";

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
`;

export const ContactLabel = styled.span`
  color: color-mix(in srgb, var(--foreground) 70%, transparent);
`;

export const ContactIconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  vertical-align: middle;
  color: color-mix(in srgb, var(--foreground) 70%, transparent);
`;

export const ContactLink = styled.a`
  color: var(--foreground);
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export const ContactProse = styled.div`
  font-size: 1.125rem;
  color: color-mix(in srgb, var(--foreground) 90%, transparent);
`;

export const ContactFormWrap = styled.div`
  width: 50%;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ContactField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const ContactFieldLabel = styled.label`
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--foreground);
`;

export const ContactFieldInput = styled.input`
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid color-mix(in srgb, var(--foreground) 25%, transparent);
  background: var(--background);
  color: var(--foreground);
  border-radius: 0;
  &:focus {
    outline: none;
    border-color: var(--foreground);
  }
  &::placeholder {
    color: color-mix(in srgb, var(--foreground) 50%, transparent);
  }
`;

export const ContactFieldTextarea = styled.textarea`
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid color-mix(in srgb, var(--foreground) 25%, transparent);
  background: var(--background);
  color: var(--foreground);
  border-radius: 0;
  min-height: 8rem;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: var(--foreground);
  }
  &::placeholder {
    color: color-mix(in srgb, var(--foreground) 50%, transparent);
  }
`;

export const ContactSubmit = styled.button`
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.625rem 1.25rem;
  background: var(--foreground);
  color: var(--background);
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: opacity 0.15s ease;
  &:hover:not(:disabled) {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ContactFormMessage = styled.p<{ $error?: boolean }>`
  font-size: 0.9375rem;
  margin: 0;
  color: ${(p) =>
    p.$error
      ? "color-mix(in srgb, #b91c1c 90%, transparent)"
      : "color-mix(in srgb, var(--foreground) 80%, transparent)"};
`;
