import React from 'react';
import { CONFIG } from '../config/portfolioData';

export default function Topbar() {
  const [prefix, suffix] = CONFIG.assinatura.split('.');

  return (
    <header className="topbar">
      <a className="signature mono" href="#topo" aria-label="Emerson, início">
        {prefix}
        <span>.{suffix}</span>
      </a>
      <span className="availability">
        <span className="status-dot" aria-hidden="true" />
        DISPONÍVEL PARA PROJETOS
      </span>
    </header>
  );
}
