import React, { useEffect } from 'react';
import { CONFIG } from '../../config/portfolioData';
import { safeURL } from '../../utils/helpers';
import ProjectPreview from '../ProjectPreview';

export default function ProjectModal({
  project,
  onClose,
  onRequestBudgetWithProject,
}) {
  useEffect(() => {
    if (!project) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const demo = safeURL(project.demoUrl);
  const github = safeURL(project.githubUrl) || safeURL(CONFIG.redes.github);

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
        aria-labelledby="projectModalTitle"
        aria-modal="true"
      >
        <div className="modal-inner">
          <div className="modal-header">
            <div>
              <p className="modal-eyebrow">POR DENTRO DO PROJETO</p>
              <h2 id="projectModalTitle">{project.titulo}</h2>
            </div>
            <button
              type="button"
              className="close-modal"
              onClick={onClose}
              aria-label="Fechar detalhes"
            >
              ✕
            </button>
          </div>

          <div>
            <div className="modal-preview">
              <ProjectPreview project={project} />
            </div>

            <div className="tech-tags modal-stack">
              {project.stack.split('•').map((tech) => (
                <span key={tech.trim()} className="tech-tag">
                  {tech.trim()}
                </span>
              ))}
            </div>

            <p className="modal-text">
              {project.detalhes || project.descricao}
            </p>

            <ul className="modal-points">
              {(project.destaques || []).map((item) => (
                <li key={item}>
                  <span className="icon" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {project.demonstrativo && (
              <p className="modal-disclaimer">
                Estudo conceitual com preview ilustrativo. Explore mais
                trabalhos e atualizações no GitHub.
              </p>
            )}

            <div className="modal-actions">
              <a
                className="button button-primary press full"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
                Ver no GitHub <span aria-hidden="true">↗</span>
              </a>

              {demo && (
                <a
                  className="button button-secondary press full"
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir demonstração <span aria-hidden="true">↗</span>
                </a>
              )}

              <button
                type="button"
                className="button button-quiet press full"
                onClick={() => onRequestBudgetWithProject(project)}
              >
                Quero uma solução assim <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
