export default function TheProblem() {
  return (
    <section className="relative z-[1] py-24 sm:py-28 lg:py-32 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="font-display font-bold text-exyo-white mb-5 reveal d1"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', lineHeight: 1.2 }}
        >
          O Abismo
        </h2>

        <p className="text-exyo-gray max-w-[640px] mx-auto mb-12 text-base leading-relaxed reveal d2">
          Não devemos esquecer a lacuna existente entre a teoria e a prática em disciplinas como a <span className="text-exyo-cyan">Psicologia</span>, onde essa distância é particularmente evidente.
        </p>

        {/* Big stat */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap px-4">
          <div className="reveal-left d1">
            <span
              className="font-display font-extrabold text-exyo-cyan block"
              style={{ fontSize: 'clamp(5rem, 13vw, 8.5rem)', lineHeight: 1, textShadow: '0 0 50px rgba(112,206,211,0.2)' }}
            >
              50<span className="text-exyo-white" style={{ fontSize: '0.45em' }}>%</span>
            </span>
          </div>

          <div className="max-w-[330px] text-left reveal-right d2">
            <p className="text-exyo-gray text-base leading-relaxed break-words">
              dos psicólogos no Brasil <strong className="text-exyo-white">não atuam exclusivamente</strong> na área da Psicologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
