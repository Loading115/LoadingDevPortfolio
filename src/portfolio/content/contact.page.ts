/**
 * Shared header content for the Contact page.
 */
export const contactPageHeaderContent = {
  title: "Contacto",
  subtitle:
    "Tienes una idea de juego o quieres colaborar? Me encantaria escuchar de ti",
  align: "center",
} as const;

export type ContactFormFieldContent = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  multiline?: boolean;
};

export type ContactFormContent = {
  badge: string;
  title: string;
  description: string;
  buttonLabel: string;
  helperText: string;
  fields: readonly ContactFormFieldContent[];
};

/**
 * Reserved for the future contact form.
 * It stays out of the page until a real email backend is available.
 */
export const contactFormContent: ContactFormContent = {
  badge: "Demo sin backend",
  title: "Enviame un Mensaje",
  description:
    "Cuentame sobre tu proyecto, una idea o una posible colaboracion. La estructura ya esta lista, y el envio real se activara cuando integremos el backend de correo.",
  buttonLabel: "Enviar Mensaje",
  helperText:
    "Por ahora este formulario funciona como demostracion visual. El boton aun no envia correos, asi que usa el email directo si necesitas escribirme hoy.",
  fields: [
    {
      name: "name",
      label: "Nombre",
      placeholder: "Tu nombre",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "tu@email.com",
      type: "email",
    },
    {
      name: "subject",
      label: "Asunto",
      placeholder: "De que quieres hablar?",
      type: "text",
    },
    {
      name: "message",
      label: "Mensaje",
      placeholder: "Cuentame sobre tu proyecto o idea...",
      multiline: true,
    },
  ],
} as const;

/**
 * Direct email fallback highlighted on the right column.
 */
export const contactDirectEmailContent = {
  title: "Email Directo",
  description: "Si prefieres contactarme directamente:",
  email: "contact@loadingdev.com",
  href: "mailto:contact@loadingdev.com",
} as const;

/**
 * Reserved for the future form status block.
 * It stays out of the page until the form can actually send messages.
 */
export const contactStatusContent = {
  title: "Sobre el Formulario",
  description:
    "El layout ya esta preparado para integrarse con un servicio de correo cuando quieras activarlo.",
  paragraphs: [
    "Actualmente el formulario no envia mensajes reales porque todavia no esta conectado a un backend o proveedor de email.",
    "Cuando lo decidas, podemos integrarlo con una API propia o con servicios como EmailJS, Resend, SendGrid o Nodemailer.",
  ],
} as const;

/**
 * Small service expectations card.
 */
export const contactResponseTimeContent = {
  title: "Tiempo de Respuesta",
  description:
    "Normalmente respondo dentro de 24-48 horas durante dias laborables.",
} as const;

/**
 * Title for the alternate social channels card.
 */
export const contactSocialLinksContent = {
  title: "Tambien puedes encontrarme en:",
} as const;
