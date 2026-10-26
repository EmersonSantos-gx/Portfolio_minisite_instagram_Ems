import React, { useRef, useEffect } from 'react';

export default function CopyLinkModal({ url, onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!url) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [url, onClose]);

  if (!url) return null;

  const handleSelectLink = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
      inputRef.current.setSelectionRange(0, url.length);
    }
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
        aria-labelledby="copyTitle"
        aria-modal="true"
      >
        <div className="modal-inner">
          <div className="modal-header">
            <div>
              <p className="modal-eyebrow">COMPARTILHAR</p>
              <h2 id="copyTitle">
                Leve esse link com você<span className="sky">.</span>
              </h2>
            </div>
            <button
              type="button"
              className="close-modal"
              onClick={onClose}
              aria-label="Fechar compartilhamento"
            >
              ✕
            </button>
          </div>

          <p className="form-intro">
            Selecione e copie o endereço abaixo para compartilhar.
          </p>
          <label className="sr-only" htmlFor="copyLink">
            Endereço do portfólio
          </label>
          <input
            ref={inputRef}
            className="copy-link-field"
            id="copyLink"
            value={url}
            readOnly
          />
          <button
            type="button"
            className="button button-secondary full"
            style={{ marginTop: '14px' }}
            onClick={handleSelectLink}
          >
            Selecionar link
          </button>
        </div>
      </dialog>
    </div>
  );
}
