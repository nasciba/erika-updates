"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
// Without a verified domain, Resend only allows sending to your account email.
const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "amandanasciba1@gmail.com";

export type ContactFormState =
  | { success: true; message: string }
  | { success: false; error: string }
  | null;

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !subject || !message) {
    return {
      success: false,
      error: "Preencha todos os campos.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Email inválido." };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return {
      success: false,
      error: "Configuração de email indisponível. Tente mais tarde.",
    };
  }

  const html = `
    <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
    <h3>Mensagem</h3>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: email,
    subject: `[Site] ${subject}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      success: false,
      error: "Não foi possível enviar. Tente novamente mais tarde.",
    };
  }

  return {
    success: true,
    message: "Mensagem enviada com sucesso.",
  };
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}
