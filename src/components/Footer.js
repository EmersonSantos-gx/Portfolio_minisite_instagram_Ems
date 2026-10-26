import React from 'react';
import { CONFIG } from '../config/portfolioData';
import {
  downloadVCardFile,
  manualCopyText,
  publicPortfolioURL,
} from '../utils/helpers';

export default function Footer({ onShowToast, onOpenCopyModal }) {
  const handleShare = async () => {
    const url = publicPortfolioURL();
    if (!url) {
      onShowToast('Publique o portfólio para compartilhar o link.');
      return;
    }

    const data = {
      title: `${CONFIG.nome} | Portfólio`,
      text: 'Arte, código & solução. Conheça meu portfólio!',
      url,
    };

    if (navigator.share && (!navigator.canShare || navigator.canShare(data))) {
      try {
        await navigator.share(data);
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }

    let copied = false;
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(url);
        copied = true;
      } catch {
        copied = false;
      }
    }
    if (!copied) {
      copied = manualCopyText(url);
    }

    if (copied) {
      onShowToast('Link copiado!');
    } else {
      onOpenCopyModal(url);
    }
  };

  const handleSaveVCard = () => {
    downloadVCardFile();
    onShowToast('Contato preparado! Abra o arquivo .vcf para salvar.');
  };

  return (
    <footer className="footer">
      <p className="footer-top">Sempre aprendendo. Sempre criando.</p>

      <div className="footer-actions">
        <button
          type="button"
          className="button button-quiet press"
          onClick={handleShare}
        >
          <span className="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7" />
            </svg>
          </span>
          Compartilhar Portfólio
        </button>

        <button
          type="button"
          className="button button-quiet press"
          onClick={handleSaveVCard}
        >
          <span className="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <rect x="4" y="3" width="16" height="18" rx="2" />
              <circle cx="12" cy="9" r="2.5" />
              <path d="M8 17c0-4 8-4 8 0M2 7h3m-3 5h3m-3 5h3" />
            </svg>
          </span>
          Salvar Contato <span className="sr-only">vCard .vcf</span>
        </button>
      </div>

      <p className="footer-signature">
        © {CONFIG.ano} <strong>{CONFIG.nome}</strong>
        <br />
        Desenvolvido por <strong>{CONFIG.empresa}</strong> •{' '}
        {CONFIG.localizacao.replace(', ', ' - ')}
      </p>
      <p className="footer-cnpj">CNPJ {CONFIG.cnpj}</p>
      <a className="back-top" href="#topo">
        Voltar ao topo <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
