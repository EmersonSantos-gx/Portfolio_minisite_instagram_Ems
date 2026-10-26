import React, { useState, useEffect } from 'react';

export default function AmbientBackground() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let scheduled = false;

    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = total > 0 ? Math.min(100, Math.max(0, (window.scrollY / total) * 100)) : 0;
      setProgress(current);
      scheduled = false;
    };

    const onScrollOrResize = () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <div className="ambient" aria-hidden="true">
        <span className="particle" style={{ left: '9%', top: '16%' }} />
        <span className="particle" style={{ left: '22%', top: '69%' }} />
        <span className="particle" style={{ left: '82%', top: '23%' }} />
        <span className="particle" style={{ left: '91%', top: '76%' }} />
        <span className="particle" style={{ left: '15%', top: '44%' }} />
        <span className="particle" style={{ left: '75%', top: '91%' }} />

        <pre className="ambient-code left">{`const developer = {
  name: 'Emerson Santos',
  mindset: 'arte & código',
  color: '#0ea5e9'
};

function create(idea) {
  return idea.map(build);
}`}</pre>

        <pre className="ambient-code right">{`<Experience>
  <Design />
  <Code />
  <Human />
</Experience>

// always learning.
// always building.`}</pre>
      </div>

      <span className="desktop-note left" aria-hidden="true">
        ARTE + CÓDIGO
      </span>
      <span className="desktop-note right" aria-hidden="true">
        MACEIÓ, AL · BRASIL
      </span>
    </>
  );
}
