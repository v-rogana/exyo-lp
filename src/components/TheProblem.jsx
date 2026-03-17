import logoExyoTriste from '../assets/images/logo-exyo-triste.png'

export default function TheProblem() {
  return (
    <section className="relative z-[1] py-24 sm:py-28 lg:py-32 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <div className="section-tag reveal" data-reveal-dim="true">O problema</div>
        <h2
          className="font-display font-bold text-exyo-white mb-5 reveal d1"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', lineHeight: 1.2 }}
        >
          O Abismo
        </h2>

        <p className="text-exyo-gray max-w-[640px] mx-auto mb-12 text-base leading-relaxed reveal d2">
          Não vamos nos esquecer do abismo. Em disciplinas em que o abismo entre teoria e prática é mais evidente, como a <span className="text-exyo-cyan">Psicologia</span>:
        </p>

        {/* Big stat */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
          <div className="reveal-left d1">
            <span
              className="font-display font-extrabold text-exyo-cyan block"
              style={{ fontSize: 'clamp(5rem, 13vw, 8.5rem)', lineHeight: 1, textShadow: '0 0 50px rgba(112,206,211,0.2)' }}
            >
              50<span className="text-exyo-white" style={{ fontSize: '0.45em' }}>%</span>
            </span>
          </div>

          <div className="max-w-[330px] text-left reveal-right d2">
            <p className="text-exyo-gray text-base leading-relaxed">
              dos psicólogos no Brasil <strong className="text-exyo-white">não atuam exclusivamente</strong> na área da Psicologia.
            </p>
          </div>
        </div>

        {/* Sad mascot */}
        <div className="mt-12 text-center reveal d3">
          <img
            src={logoExyoTriste}
            alt="Exyo triste"
            className="w-24 mx-auto"
            style={{ filter: 'drop-shadow(0 0 14px rgba(112,206,211,0.08))' }}
          />
          <p className="text-exyo-cyan font-display font-medium text-sm italic opacity-[0.65] mt-3">
            O Exyo fica triste com esta estatística.
          </p>
        </div>
      </div>
    </section>
  )
}
