const stats = [
  { num: '85%', desc: 'dos estudantes preferem simulações práticas' },
  { num: '92%', desc: 'melhor retenção com IA personalizada' },
  { num: '78%', desc: 'das instituições buscam integração digital' },
]

export default function Efficacy() {
  return (
    <section className="relative z-[1] text-center py-24 sm:py-28 lg:py-32 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display font-bold text-exyo-cyan mb-5 reveal d1"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', lineHeight: 1.2 }}
        >
          Prova de Eficácia
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className={`glass-card p-8 sm:p-9 reveal d${i + 1}`}>
              <div className="proof-num">{stat.num}</div>
              <p className="text-exyo-gray text-[0.9rem] sm:text-base leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
