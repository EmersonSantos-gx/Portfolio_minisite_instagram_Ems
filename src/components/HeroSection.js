import React, { useState } from 'react';
import { CONFIG } from '../config/portfolioData';
import SocialBar from './SocialBar';

export default function HeroSection({ onOpenBriefing }) {
  const [photoSrc, setPhotoSrc] = useState(
    CONFIG.fotoPerfil || CONFIG.fotoPerfilFallback
  );
  const [showFallbackMonogram, setShowFallbackMonogram] = useState(false);

  const handleImageError = () => {
    if (photoSrc !== CONFIG.fotoPerfilFallback && CONFIG.fotoPerfilFallback) {
      setPhotoSrc(CONFIG.fotoPerfilFallback);
    } else {
      setShowFallbackMonogram(true);
    }
  };

  return (
    <section className="hero" aria-labelledby="heroTitle">
      <div className="hero-art" aria-hidden="true" />
      <div className="hero-code" aria-hidden="true">
        const style = &#123;
        <br />
        &nbsp; color: &apos;#0ea5e9&apos;
        <br />
        &#125;;
      </div>

      <div className="avatar-wrap">
        <div className="story-ring">
          <div className="avatar-inner">
            {showFallbackMonogram || !photoSrc ? (
              <div
                className="avatar-fallback"
                role="img"
                aria-label={`Monograma ${CONFIG.iniciais} em tons de terracota e ciano`}
              >
                <span>{CONFIG.iniciais}</span>
              </div>
            ) : (
              <img
                src={photoSrc}
                alt={`Foto de ${CONFIG.nome}`}
                width="120"
                height="120"
                decoding="async"
                onError={handleImageError}
              />
            )}
          </div>
        </div>
        <span
          className="verified"
          title="Identidade de desenvolvedor"
          aria-label="Selo visual de desenvolvedor"
        >
          <i className="fa-solid fa-check" aria-hidden="true" />
        </span>
      </div>

      <p className="eyebrow">Entre o humano e o digital</p>
      <h1 id="heroTitle">
        {CONFIG.nome}
        <span>.</span>
      </h1>
      <p className="hero-role">{CONFIG.titulo}</p>

      <div className="code-tag">
        <span className="keyword">const</span> mindset ={' '}
        <span className="string">&quot;arte, código &amp; solução&quot;</span>;
      </div>

      <p className="hero-bio">{CONFIG.bio}</p>

      <p className="location">
        <span className="icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
        </span>
        <span>{CONFIG.localizacao}</span>
        <span className="separator">↗</span> Todo o Brasil
      </p>

      <SocialBar />

      <button
        type="button"
        className="button button-primary press hero-cta active:translate-x-[3px] active:translate-y-[3px]"
        onClick={onOpenBriefing}
      >
        <i className="fa-regular fa-comment-dots" aria-hidden="true" />
        Vamos construir sua próxima ideia?
        <span aria-hidden="true">↗</span>
      </button>

      <nav className="section-nav" aria-label="Seções do portfólio">
        <a href="#stack">
          <span>01</span> Stack
        </a>
        <a href="#projetos">
          <span>02</span> Projetos
        </a>
        <a href="#gxcodev">
          <span>03</span> Gxcodev
        </a>
      </nav>
    </section>
  );
}
