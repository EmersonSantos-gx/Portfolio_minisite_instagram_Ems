import React from 'react';
import { CONFIG } from '../config/portfolioData';

export default function StackSection() {
  return (
    <section className="section" id="stack" aria-labelledby="stackTitle">
      <p className="section-heading">01 / STACK &amp; APRENDIZADO</p>
      <h2 id="stackTitle">
        Repertório Full Stack
        <br />
        em constante evolução<span className="sky">.</span>
      </h2>
      <p className="section-intro">
        Da primeira linha de código à experiência de quem usa. Um aprendizado de cada vez.
      </p>

      <div className="skill-list">
        {CONFIG.SKILLS.map((skill, index) => (
          <details
            key={skill.titulo}
            className="skill-card glass"
            open={index === 0}
          >
            <summary>
              <span className="skill-symbol">
                <i className={skill.icone} aria-hidden="true" />
              </span>
              <div className="skill-summary">
                <h3>{skill.titulo}</h3>
                <p>{skill.foco}</p>
              </div>
              <i
                className="fa-solid fa-chevron-down skill-chevron"
                aria-hidden="true"
              />
            </summary>

            <div className="skill-body">
              <p>{skill.descricao}</p>
              <div className="tech-tags">
                {skill.tecnologias.map((tech) => (
                  <span key={tech.nome} className="tech-tag">
                    {tech.icone && <i className={tech.icone} aria-hidden="true" />}
                    {tech.nome}
                  </span>
                ))}
              </div>
              <p className="learning-line">
                Aprendizado contínuo • aplicação prática
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
