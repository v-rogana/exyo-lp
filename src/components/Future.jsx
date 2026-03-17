const tags = [
  { name: 'Psicologia', active: true },
  { name: 'Medicina', active: false },
  { name: 'Nutrição', active: false },
  { name: 'Direito', active: false },
  { name: 'Pedagogia', active: false },
]

export default function Future() {
  return (
    <section className="relative z-[1] text-center py-24 sm:py-28 lg:py-32 px-6 lg:px-10" style={{ background: 'var(--bg2)' }}>
      {/* Ambient orb */}
      <div className="orb" style={{ width: 300, height: 300, top: '10%', right: '5%', background: 'var(--cyan)' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="section-tag reveal" data-reveal-dim="true">Expansão</div>
        <h2
          className="font-display font-bold text-exyo-white mb-5 reveal d1"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', lineHeight: 1.2 }}
        >
          Visão de Futuro
        </h2>

        <p className="text-exyo-gray max-w-[660px] mx-auto text-base leading-[1.8] reveal d2">
          A <span className="text-exyo-cyan">Exyo</span> já estuda formas de chegar a outras áreas como medicina e nutrição, partindo da psicologia para levar ao <strong className="text-exyo-white">ensino deliberado por meio da IA com supervisão</strong> para várias áreas...
        </p>

        {/* Tags */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap reveal d3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`px-5 sm:px-6 py-2.5 rounded-full font-display text-[0.8rem] font-medium cursor-default transition-all duration-300 ${
                tag.active
                  ? 'border-exyo-cyan text-exyo-cyan bg-[rgba(112,206,211,0.05)]'
                  : 'text-exyo-gray hover:border-exyo-cyan hover:text-exyo-cyan hover:bg-[rgba(112,206,211,0.05)]'
              }`}
              style={{ border: `1px solid ${tag.active ? 'var(--cyan)' : 'var(--gray-border)'}` }}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
