import { cvData } from '../data/pages/cvData';
import { CvFeatureCard } from '../components/CvFeatureCard';
import { SEO } from '../components/SEO';

export function CvPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <SEO title={cvData.metadata.title} description={cvData.metadata.description} />

      {/* Header Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary text-sm font-bold uppercase tracking-widest font-label">
              {cvData.header.availability}
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-headline text-on-background leading-tight mb-2 tracking-tighter uppercase transition-all">
            {cvData.header.name.split(' ')[0]}{' '}
            <span className="text-primary-container text-glow-orange">
              {cvData.header.name.split(' ')[1]}
            </span>
          </h1>
          <p className="text-blue-500 font-black text-xl uppercase tracking-widest mb-6 font-headline">
            {cvData.header.title} | {cvData.header.subtitle}
          </p>
          <p className="text-xl text-on-surface-variant font-light mb-10 max-w-2xl leading-relaxed">
            {cvData.header.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="morph-button bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3"
              type="button"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                description
              </span>
              Exporter CV (PDF)
            </button>
            <button
              className="morph-button bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold flex items-center gap-3 border border-white/5"
              type="button"
            >
              <span className="material-symbols-outlined">mail</span>
              Me Contacter
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="morph-card rounded-3xl p-4 aspect-square flex items-center justify-center relative z-10 overflow-hidden">
            <img
              alt="Profile Photo"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc2_wSGbGrQFYS-FIvYYpt-DHbbcnpZaDyalg6v8X5pRCYt7NyEUwiVj9tRFQn2BKuAEkgQxj31SnrpGzt_k0uekYEeLTYBkDgg0cRSDy_erXLZNtL6-sfwjLd8EbA3f4pEVsEFZPpgaN4wOtUObXUEMa8UP2hUx9IdJGl_phQOpSbYu91ECqY1Sys4CJaJXDe8cJagkiiQKQSuYDk_4DgVhBSJUByuXm5V8FRGb9r5LAKw0O9sv04RDsxec8OXbBWshI49t99VCI"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/20 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* Skills Grid */}
      <section className="mb-32">
        <h2 className="text-4xl font-black font-headline mb-12 flex items-center gap-4">
          <span className="text-secondary tracking-tighter">01.</span> Arsenal Technique
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {cvData.skills.map((skill, index) => (
            <CvFeatureCard
              key={skill.title}
              className={`${index === 0 ? 'md:col-span-2' : index === 1 ? 'md:col-span-2' : 'md:col-span-2 lg:col-span-2'} flex flex-col justify-between group`}
            >
              <div
                className={`w-14 h-14 morph-card-inset rounded-2xl flex items-center justify-center ${skill.accent} mb-6 group-hover:scale-110 transition-transform`}
              >
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {skill.icon}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {skill.description}
                </p>
                {skill.bar && (
                  <div className="w-full h-1.5 morph-card-inset rounded-full mt-4 overflow-hidden">
                    <div
                      className={`h-full ${skill.accent.replace('text-', 'bg-')} ${skill.bar}`}
                    />
                  </div>
                )}
                {skill.chips && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skill.chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-3 py-1 morph-card-inset rounded-lg text-[10px] font-black uppercase tracking-widest text-secondary"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </CvFeatureCard>
          ))}
        </div>
      </section>

      {/* Experience & Education Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        <div>
          <h2 className="text-4xl font-black font-headline mb-12 flex items-center gap-4">
            <span className="text-primary-container tracking-tighter">02.</span> Expériences
          </h2>
          <div className="space-y-8">
            {cvData.experience.map((exp) => (
              <div
                key={exp.company + exp.period}
                className="relative pl-8 border-l border-white/5 group"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary-container group-hover:scale-150 transition-transform" />
                <span className="text-sm text-secondary font-bold uppercase tracking-widest mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <p className="text-on-surface-variant font-black mb-4 uppercase tracking-tighter text-sm">
                  {exp.company}
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed italic">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          <div>
            <h2 className="text-4xl font-black font-headline mb-12 flex items-center gap-4">
              <span className="text-tertiary tracking-tighter">03.</span> Formation
            </h2>
            <div className="space-y-6">
              {cvData.education.map((edu) => (
                <div
                  key={edu.title}
                  className="morph-card p-6 rounded-3xl border-l-4 border-tertiary/50 hover:border-tertiary transition-colors"
                >
                  <h3 className="text-xl font-black leading-tight mb-1">{edu.title}</h3>
                  <p className="text-tertiary font-bold text-xs uppercase tracking-widest mb-3">
                    {edu.school} | {edu.period}
                  </p>
                  <p className="text-on-surface-variant text-xs leading-relaxed opacity-70">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-black font-headline mb-6 flex items-center gap-4">
                <span className="text-blue-400">04.</span> Langues
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {cvData.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="morph-card-inset p-4 rounded-xl flex justify-between items-center"
                  >
                    <span className="font-bold text-on-surface">{lang.name}</span>
                    <span className="text-xs font-black text-blue-400 uppercase tracking-widest">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black font-headline mb-6 flex items-center gap-4">
                <span className="text-primary-container">05.</span> Soft Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {cvData.softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 bg-surface-container-high rounded-2xl text-[10px] font-black text-on-surface uppercase tracking-widest border border-white/5 morph-inset"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="mb-32">
        <h2 className="text-4xl font-black font-headline mb-12 flex items-center gap-4">
          <span className="text-glow-orange tracking-tighter">06.</span> Projets Stratégiques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cvData.majorProjects.map((project) => (
            <div
              key={project.title}
              className="group morph-card rounded-[2.5rem] overflow-hidden flex flex-col"
            >
              <div className="p-10 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-4 py-1.5 bg-primary-container/10 text-primary-container border border-primary-container/20 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {project.impact}
                  </span>
                  <div className="flex gap-2">
                    {project.tech.slice(0, 2).map((t) => (
                      <span key={t} className="w-2 h-2 rounded-full bg-secondary" />
                    ))}
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-primary-container transition-colors tracking-tighter italic">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-surface-container-high rounded-lg text-[10px] font-bold text-on-surface-variant"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-surface-container-low flex justify-end">
                <button className="text-secondary font-black text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-widest">
                  Détails <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="morph-card p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-black font-headline mb-8 max-w-4xl mx-auto tracking-tighter leading-[1.1] uppercase">
            Transformons vos données en{' '}
            <span className="text-secondary italic">Intégration Active</span>
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-xl mx-auto font-light">
            Mon expertise hybride entre médecine et ingénierie garantit une rigueur analytique hors
            pair.
          </p>
          <button
            className="morph-button bg-primary-container text-on-primary-container px-12 py-5 rounded-2xl font-black text-xl flex items-center gap-4 mx-auto hover:rotate-1"
            type="button"
          >
            <span
              className="material-symbols-outlined text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              download
            </span>
            Exporter le profil complet
          </button>
        </div>
      </section>
    </main>
  );
}
