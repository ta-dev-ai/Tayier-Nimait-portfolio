import { aboutData } from '../data/pages/aboutData';
import { SEO } from '../components/SEO';

export function AboutPage() {
  return (
    <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto space-y-32">
      <SEO title={aboutData.metadata.title} description={aboutData.metadata.description} />
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-container-highest text-secondary font-bold text-sm tracking-widest uppercase">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
            </span>
            {aboutData.badge}
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-none">
            {aboutData.name}{' '}
            <span className="text-orange-500 text-glow-orange">{aboutData.heroHighlight}</span>
          </h1>
          <p className="text-on-surface-variant text-xl leading-relaxed max-w-xl font-light">
            {aboutData.tagline}
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            {aboutData.cards.map((card) => (
              <div
                key={card.title}
                className={`morph-card bg-surface-container p-6 rounded-xl border-l-4 flex-1 min-w-[200px] ${card.borderClass}`}
              >
                <div className={`text-4xl font-black mb-1 ${card.titleClass}`}>{card.title}</div>
                <div className="text-on-surface-variant font-bold text-sm uppercase tracking-wider">
                  {card.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="morph-card rounded-2xl overflow-hidden relative z-10 aspect-[4/5]">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src={aboutData.heroImage}
              alt={aboutData.heroAlt}
            />
          </div>
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/10 blur-[100px] rounded-full" />
        </div>
      </section>

      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            {aboutData.coreValuesTitle}
          </h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutData.coreValues.map((value) => (
            <div
              key={value.title}
              className="morph-card bg-surface-container p-10 rounded-2xl space-y-6 group hover:-translate-y-2 transition-all duration-500"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center morph-inset ${value.iconClass}`}
              >
                <span className="material-symbols-outlined text-4xl">{value.icon}</span>
              </div>
              <h3 className="text-2xl font-black">{value.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-16">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-center">
          {aboutData.evolutionTitle}
        </h2>
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-surface-container-highest -translate-x-1/2 hidden md:block" />
          {aboutData.evolution.map((entry, index) => {
            const isEven = index % 2 === 1;
            const periodClass =
              index === 0 ? 'text-orange-500' : index === 1 ? 'text-secondary' : 'text-tertiary';

            return (
              <div
                key={entry.period}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index < aboutData.evolution.length - 1 ? 'mb-16' : ''}`}
              >
                {!isEven ? (
                  <div className="md:text-right space-y-2">
                    <span className={`text-sm font-black uppercase tracking-widest ${periodClass}`}>
                      {entry.period}
                    </span>
                    <h3 className="text-2xl font-black">{entry.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}

                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-surface z-10 hidden md:block">
                  <div className={`w-full h-full rounded-full ${entry.dot}`} />
                </div>

                {isEven ? (
                  <div className="space-y-2">
                    <span className={`text-sm font-black uppercase tracking-widest ${periodClass}`}>
                      {entry.period}
                    </span>
                    <h3 className="text-2xl font-black">{entry.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="morph-card bg-surface-container p-12 md:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[120px] rounded-full" />
        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter">
            Ready to scale your vision with <span className="text-secondary">Precision</span>?
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
            {aboutData.ctaDescription}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <button
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-on-primary-container font-black tracking-tight text-lg shadow-xl hover:scale-105 active:scale-95 transition-all"
              type="button"
            >
              {aboutData.ctaPrimary}
            </button>
            <button
              className="px-10 py-4 rounded-xl bg-surface-container-highest text-on-surface font-bold hover:bg-white/10 transition-all border border-white/5"
              type="button"
            >
              {aboutData.ctaSecondary}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
