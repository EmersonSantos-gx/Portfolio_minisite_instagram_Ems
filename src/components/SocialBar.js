import React from 'react';
import { CONFIG } from '../config/portfolioData';
import { safeURL, whatsappURL } from '../utils/helpers';

export default function SocialBar() {
  const socials = [
    { nome: 'Instagram', icone: 'fa-brands fa-instagram', url: CONFIG.redes.instagram },
    { nome: 'WhatsApp', icone: 'fa-brands fa-whatsapp', url: whatsappURL() },
    { nome: 'LinkedIn', icone: 'fa-brands fa-linkedin-in', url: CONFIG.redes.linkedin },
    { nome: 'GitHub', icone: 'fa-brands fa-github', url: CONFIG.redes.github },
  ];

  return (
    <nav className="social-bar" aria-label="Conecte-se com Emerson">
      {socials.map((social) => (
        <a
          key={social.nome}
          className="social-link glass press hover:-translate-y-1"
          href={safeURL(social.url)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${social.nome} de ${CONFIG.nome}`}
        >
          <i className={social.icone} aria-hidden="true" />
          <span className="tooltip">{social.nome}</span>
        </a>
      ))}
    </nav>
  );
}
