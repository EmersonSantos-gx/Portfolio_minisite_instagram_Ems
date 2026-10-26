import React from 'react';
import { CONFIG } from '../config/portfolioData';
import { safeURL, whatsappURL } from '../utils/helpers';

export default function StudioSection({ onOpenBriefing }) {
  const handleStudioAccess = () => {
    const url = safeURL(CONFIG.gxcodevUrl);
    if (url) {
      window.location.assign(url);
    } else {
      onOpenBriefing();
    }
  };

  return (
    <section className="studio-section" id="gxcodev" aria-labelledby="studioTitle">
      <p className="section-heading">03 / DO CONCEITO À CRIAÇÃO</p>
      <div className="studio-frame">
        <div className="studio-card">
          <div className="studio-grid" aria-hidden="true" />
          <p className="studio-badge">
            <i className="fa-solid fa-bolt" aria-hidden="true" />
            ESTÚDIO DIGITAL &amp; CRIAÇÕES
          </p>

          <div className="studio-brand">
            <h2 className="studio-wordmark" id="studioTitle">
              Gx<span>codev</span>
            </h2>
            <span className="studio-logo" aria-hidden="true">
              &lt;/&gt;
            </span>
          </div>

          <p className="studio-motto">
            Design que conecta.
            <br />
            <span>Código que transforma.</span>
          </p>

          <p className="brand-meaning">
            <strong>G</strong> Garotinho · <strong>X</strong> Inovação
            <br />
            <strong>Code</strong> Códigos · <strong>Dev</strong> Desenvolvedor
          </p>

          <div className="studio-pillars">
            <div className="pillar">
              <span className="pillar-icon">
                <i className="fa-solid fa-code" aria-hidden="true" />
              </span>
              <div>
                <h3>Serviços que dão forma à sua ideia</h3>
                <p>
                  Desenvolvimento Web Full Stack, Mini Sites (Link-in-Bio),
                  Landing Pages de Alta Conversão, Sistemas/Dashboards, UI/UX
                  Design (Figma) e ChatBots/Automações para WhatsApp.
                </p>
              </div>
            </div>

            <div className="pillar">
              <span className="pillar-icon">
                <i className="fa-solid fa-layer-group" aria-hidden="true" />
              </span>
              <div>
                <h3>Portfólio &amp; Modelos</h3>
                <p>
                  Vitrine de templates prontos e soluções sob medida para
                  negócios, clínicas e profissionais.
                </p>
              </div>
            </div>

            <div className="pillar">
              <span className="pillar-icon">
                <i className="fa-regular fa-comments" aria-hidden="true" />
              </span>
              <div>
                <h3>Contato rápido, conversa de verdade</h3>
                <p>
                  Orçamentos ágeis e atendimento personalizado em Maceió-AL e
                  para todo o Brasil.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="button button-primary press full studio-cta active:translate-x-[3px] active:translate-y-[3px]"
            onClick={handleStudioAccess}
          >
            Acessar Gxcodev — Serviços &amp; Portfólio{' '}
            <span aria-hidden="true">↗</span>
          </button>

          <a
            className="button button-quiet press full studio-whatsapp"
            href={whatsappURL(CONFIG.mensagens.orcamento)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            Solicitar Orçamento no WhatsApp
          </a>

          <a
            className="studio-instagram"
            href={safeURL(CONFIG.redes.instagram) || '#gxcodev'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram" aria-hidden="true" />
            {CONFIG.instagramHandle} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
