import React, { useState } from 'react';
import { CONFIG } from '../config/portfolioData';
import { safeURL } from '../utils/helpers';
import ProjectPreview from './ProjectPreview';

export default function ProjectsSection({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = CONFIG.PROJETOS.filter(
    (project) => activeFilter === 'todos' || project.categoria === activeFilter
  );

  return (
    <section className="section" id="projetos" aria-labelledby="projectsTitle">
      <p className="section-heading">02 / PORTFÓLIO DE PROJETOS</p>
      <div className="project-heading">
        <h2 id="projectsTitle">
          Projetos &amp;
          <br />
          Estudos Práticos<span className="peach">.</span>
        </h2>
        <span className="project-count" role="status" aria-live="polite">
          {String(projects.length).padStart(2, '0')}{' '}
          {projects.length === 1 ? 'projeto' : 'projetos'}
        </span>
      </div>

      <p className="section-intro">
        Ideias que ganham interface, lógica e propósito.
      </p>

      <div className="filters" role="group" aria-label="Filtrar projetos">
        {CONFIG.FILTROS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className="filter press"
            aria-pressed={filter.id === activeFilter}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.nome}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {projects.length > 0 ? (
          projects.map((project, index) => {
            const github =
              safeURL(project.githubUrl) || safeURL(CONFIG.redes.github);
            return (
              <article
                key={project.id}
                className="project-card glass"
                style={{ animationDelay: `${index * 35}ms` }}
              >
                <ProjectPreview project={project} />
                <div className="project-body">
                  <span className="stack-badge">{project.stack}</span>
                  <h3 className="project-title">{project.titulo}</h3>
                  <p className="project-description">{project.descricao}</p>
                  <div className="project-actions">
                    <a
                      className="button button-secondary press active:translate-x-[3px] active:translate-y-[3px]"
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${project.titulo} no GitHub`}
                    >
                      <i className="fa-brands fa-github" aria-hidden="true" />
                      Ver no GitHub <span aria-hidden="true">↗</span>
                    </a>
                    <button
                      type="button"
                      className="detail-button press"
                      onClick={() => onOpenProject(project)}
                      aria-label={`Demo ou detalhes de ${project.titulo}`}
                    >
                      Demo / Detalhes
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <p className="section-intro">Novos projetos por aqui em breve.</p>
        )}
      </div>

      <p className="project-note">
        <span className="icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v6m0-10v1" />
          </svg>
        </span>
        Conceitos e estudos • explorando possibilidades.
      </p>
    </section>
  );
}
