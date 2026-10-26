import React from 'react';
import { whatsappURL } from '../utils/helpers';

export default function FloatingElements({ toastMessage }) {
  return (
    <>
      <a
        id="whatsappFab"
        className="fab press fixed bottom-5 right-5 z-50"
        href={whatsappURL()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Emerson no WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
        <span className="tooltip">Vamos conversar?</span>
      </a>

      <div
        className={`toast ${toastMessage ? 'visible' : ''}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="icon" aria-hidden="true">
          ✓
        </span>
        <span>{toastMessage}</span>
      </div>
    </>
  );
}
