const stats = [
  { label: '8/10', description: 'alunos já não demonstram interesse em permanecer em sala de aula', da: 326.73, off: 65.35 },
  { label: '9/10', description: 'adolescentes no mundo consideram não ingressar na universidade', da: 326.73, off: 32.67 },
  { label: '6/10', description: 'jovens universitários preferem aprendizado digital à experiência tradicional', da: 326.73, off: 130.69 },
]

export default function CurrentScenario() {
  return (
    <section className="relative z-[1] py-24 sm:py-28 lg:py-32 px-6 lg:px-10" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="section-tag reveal" data-reveal-dim="true">O cenário atual</div>
        <h2
          className="font-display font-bold text-exyo-white mb-5 reveal d1"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', lineHeight: 1.2 }}
        >
          Estatísticas de Alerta
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-11 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center reveal d${i + 1}`}>
              <div className="ring-box">
                <svg viewBox="0 0 120 120">
                  <circle className="rk-track" cx="60" cy="60" r="52" />
                  <circle
                    className="rk-fill"
                    cx="60" cy="60" r="52"
                    style={{ '--da': stat.da, '--off': stat.off, strokeDasharray: stat.da }}
                  />
                </svg>
                <div className="ring-num">{stat.label}</div>
              </div>
              <div
                className="mx-auto rounded-[10px] p-3 sm:p-4 text-sm text-exyo-gray leading-relaxed"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid var(--gray-border)', maxWidth: 260 }}
              >
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
