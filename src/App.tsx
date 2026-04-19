import { checklist, contactLinks, highlights, projects } from './content';

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero__badge">Portfolio 2.4 · Version recrutement</div>
        <div className="hero__grid">
          <section className="hero__copy">
            <p className="eyebrow">Développeur Python · IA · Orchestration</p>
            <h1>
              Un portfolio pensé pour
              <span> décrocher un entretien</span>
            </h1>
            <p className="lead">
              Je conçois des outils, des automatisations et des prototypes IA.
              Cette version est volontairement simple, rapide à lire et facile à
              déployer gratuitement.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                Voir les projets
              </a>
              <a className="button button--secondary" href="#contact">
                Me contacter
              </a>
            </div>
          </section>

          <aside className="hero__panel" aria-label="Résumé du profil">
            <div className="panel-card panel-card--accent">
              <span className="panel-card__label">Positionnement</span>
              <strong>Python + IA orienté produit</strong>
              <p>Je livre des solutions utiles, pas seulement des idées.</p>
            </div>
            <div className="panel-card">
              <span className="panel-card__label">Déploiement</span>
              <strong>Gratuit</strong>
              <p>GitHub + React + architecture statique.</p>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section section--highlights" id="profile">
          {highlights.map((item) => (
            <article className="stat-card" key={item.label}>
              <span className="stat-card__label">{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </section>

        <section className="section" id="projects">
          <div className="section__heading">
            <p className="eyebrow">Projets sélectionnés</p>
            <h2>Une vitrine qui montre la preuve, pas seulement le style</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card__top">
                  <span>{project.domain}</span>
                  <strong>{project.title}</strong>
                </div>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--split" id="strategy">
          <div>
            <p className="eyebrow">Standard 2026</p>
            <h2>Ce que le portfolio doit faire en 2026</h2>
            <ul className="checklist">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="strategy-card">
            <p className="eyebrow">Lecture rapide</p>
            <p>
              Un recruteur doit comprendre en quelques secondes que tu sais
              cadrer un besoin, produire proprement et parler de tes projets sans
              flou.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Simple, direct, prêt pour le marché</h2>
          <p>
            Cette base est faite pour être publiée gratuitement et servir de
            support à ta recherche d’emploi.
          </p>
        </div>
        <div className="footer__links">
          {contactLinks.map((link) => (
            <a className="footer__link" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
