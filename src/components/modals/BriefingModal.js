import React, { useState, useEffect } from 'react';
import { CONFIG } from '../../config/portfolioData';
import { whatsappURL } from '../../utils/helpers';

export default function BriefingModal({
  isOpen,
  initialIdea = '',
  onClose,
}) {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [idea, setIdea] = useState('');

  useEffect(() => {
    if (initialIdea) {
      setIdea(initialIdea);
    }
  }, [initialIdea]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const selectedService = service || CONFIG.servicos[0];
    const trimmedIdea = idea.trim();
    const message = `Olá Emerson! Meu nome é ${trimmedName}. Conheci seu portfólio e gostaria de conversar sobre ${selectedService}.${
      trimmedIdea ? `\n\nMinha ideia: ${trimmedIdea}` : ''
    }\n\nPodemos conversar sobre o projeto?`;

    window.location.assign(whatsappURL(message));
  };

  return (
    <div
      className="modal-backdrop-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <dialog
        open
        className="modal react-modal-open"
        aria-labelledby="briefingTitle"
        aria-modal="true"
      >
        <div className="modal-inner">
          <div className="modal-header">
            <div>
              <p className="modal-eyebrow">GXCODEV / VAMOS CRIAR</p>
              <h2 id="briefingTitle">
                Sua ideia começa
                <br />
                com uma conversa<span className="sky">.</span>
              </h2>
            </div>
            <button
              type="button"
              className="close-modal"
              onClick={onClose}
              aria-label="Fechar briefing"
            >
              ✕
            </button>
          </div>

          <p className="form-intro">
            Conte um pouco do que você precisa. Vou preparar uma mensagem para
            continuarmos no WhatsApp.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="briefingName">
                Como posso te chamar? <span className="form-required">*</span>
              </label>
              <input
                id="briefingName"
                name="nome"
                autoComplete="given-name"
                placeholder="Seu nome"
                maxLength={80}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="briefingService">
                O que vamos criar? <span className="form-required">*</span>
              </label>
              <select
                id="briefingService"
                name="servico"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="" disabled>
                  Selecione um serviço
                </option>
                {CONFIG.servicos.map((srv) => (
                  <option key={srv} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="briefingIdea">
                Me conta sua ideia <span className="muted">(opcional)</span>
              </label>
              <textarea
                id="briefingIdea"
                name="ideia"
                placeholder="Seu negócio, seu desafio ou a solução que você imagina…"
                maxLength={1200}
                rows={3}
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="button button-primary press full briefing-submit"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              Continuar no WhatsApp <span aria-hidden="true">↗</span>
            </button>

            <p className="form-help">
              Você revisa e envia a mensagem no WhatsApp. Os dados deste
              formulário não são armazenados por esta página.
            </p>
          </form>
        </div>
      </dialog>
    </div>
  );
}
