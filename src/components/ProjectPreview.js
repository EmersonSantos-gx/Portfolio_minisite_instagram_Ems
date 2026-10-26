import React, { useState, useEffect } from 'react';

function ProjectArtwork({ type }) {
  const sidebar = (
    <aside className="mini-sidebar">
      <span className="mini-logo">x</span>
      <b />
      <b />
      <b />
      <b />
    </aside>
  );

  const renderStats = (values, labels) => (
    <div className="mini-stats">
      {values.map((value, i) => (
        <div key={labels[i]} className="mini-stat">
          <small>{labels[i]}</small>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  );

  if (type === 'financas') {
    return (
      <div className="mini-ui mini-finance">
        {sidebar}
        <div className="mini-content">
          <div className="mini-top">
            <span className="mini-title">
              FinFlow<span className="peach">.</span>
            </span>
            <span className="mini-pill">Este mês ↗</span>
          </div>
          {renderStats(['R$ 4.850', 'R$ 2.340', '+20%'], ['Receitas', 'Despesas', 'Saldo'])}
          <div className="mini-chart">
            {[35, 60, 42, 79, 55, 92, 74, 100].map((height, idx) => (
              <span key={idx} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="mini-chart-labels">
            <span>SEG</span>
            <span>QUA</span>
            <span>SEX</span>
            <span>DOM</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'studio') {
    return (
      <div className="mini-studio">
        <div className="mini-phone">
          <div className="mini-phone-logo">GX</div>
          <h4>Gxcodev.</h4>
          <small>Design meets code</small>
          <a href="#gxcodev" tabIndex={-1}>
            Conheça o estúdio ↗
          </a>
          <a href="#projetos" tabIndex={-1}>
            Projetos &amp; modelos ↗
          </a>
          <a href="#gxcodev" tabIndex={-1}>
            Vamos conversar ↗
          </a>
        </div>
        <div className="mini-annotations">
          <span>DESIGN + CÓDIGO</span>
          Sua presença.
          <br />
          Sua essência.
          <br />
          <b className="sky">Seu próximo passo.</b>
        </div>
      </div>
    );
  }

  if (type === 'bot') {
    return (
      <div className="mini-bot">
        <div className="mini-bot-head">
          <b>↗</b>FluxoBot
          <span className="mini-pill">fluxo de exemplo</span>
        </div>
        <div className="mini-message">
          Olá! Quero organizar minhas solicitações.
        </div>
        <div className="mini-message reply">
          Vamos encontrar o fluxo ideal. ✓
        </div>
        <div className="mini-flow">
          <span>Receber</span>→<span>Organizar</span>→<span>Encaminhar</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mini-ui">
      {sidebar}
      <div className="mini-content">
        <div className="mini-top">
          <span className="mini-title">Visão geral das escalas</span>
          <span className="mini-pill">+ Nova escala</span>
        </div>
        {renderStats(['24', '08', '16'], ['Agendas', 'Equipes', 'Atendimentos'])}
        <div className="mini-lines">
          {[1, 2, 3].map((row) => (
            <div key={row} className="mini-row">
              <span className="mini-avatar" />
              <b />
              <em />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function normalizeImageSrc(rawSrc) {
  if (!rawSrc) return '';
  const trimmed = String(rawSrc).trim();
  if (/^(https?:|data:)/i.test(trimmed)) return trimmed;
  const withoutPublic = trimmed.replace(/^\/?public\//i, '/');
  return withoutPublic.startsWith('/') ? withoutPublic : `/${withoutPublic}`;
}

export default function ProjectPreview({ project }) {
  const [imageError, setImageError] = useState(false);
  const imgSrc = normalizeImageSrc(project?.imagem);

  useEffect(() => {
    setImageError(false);
  }, [imgSrc]);

  const showCustomImage = Boolean(imgSrc && !imageError);

  return (
    <div className="project-preview">
      <div className="window-bar">
        <span className="window-dot" />
        <span className="window-dot" />
        <span className="window-dot" />
        <span className="window-label">{project.id} / preview</span>
      </div>
      <div className="preview-stage">
        {!showCustomImage && (
          <div aria-hidden="true">
            <ProjectArtwork type={project.preview} />
          </div>
        )}
        {showCustomImage && (
          <img
            src={imgSrc}
            alt={`Preview de ${project.titulo}`}
            decoding="async"
            onError={() => setImageError(true)}
          />
        )}
        {project.demonstrativo && (
          <span className="concept-mark">ESTUDO CONCEITUAL</span>
        )}
      </div>
    </div>
  );
}