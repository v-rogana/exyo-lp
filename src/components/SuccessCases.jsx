import logoAllos from '../assets/images/logo-allos.png'
import logoLucasAlbertoni from '../assets/images/logo-lucas-albertoni.avif'
import logoExyoFeliz from '../assets/images/logo-exyo-feliz.png'

export default function SuccessCases() {
  return (
    <section className="relative z-[1] text-center py-24 sm:py-28 lg:py-32 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="section-tag reveal" data-reveal-dim="true">Implementação</div>
        <h2
          className="font-display font-bold text-exyo-white mb-5 reveal d1"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', lineHeight: 1.2 }}
        >
          Casos de Sucesso
        </h2>

        <p className="text-exyo-gray max-w-[660px] mx-auto mb-10 text-base leading-relaxed reveal d2">
          O <span className="text-exyo-cyan">Exyo</span> já foi implementado na formação da Associação Allos e da Comunidade Lucas Albertoni, com mecanismo de feedback entre alunos e supervisores clínicos e treino prático a partir da IA.
        </p>

        {/* Partner logos */}
        <div className="flex justify-center items-center gap-10 sm:gap-14 flex-wrap mb-10 reveal d2">
          <img
            src={logoAllos}
            alt="Associação Allos"
            className="h-16 sm:h-[66px] opacity-[0.85] hover:opacity-100 hover:scale-105 transition-all duration-300"
          />
          <img
            src={logoLucasAlbertoni}
            alt="Lucas Albertoni"
            className="h-16 sm:h-[66px] opacity-[0.85] hover:opacity-100 hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* Method box */}
        <div
          className="inline-flex items-center gap-4 px-6 sm:px-8 py-5 rounded-[14px] reveal d3"
          style={{ background: 'linear-gradient(135deg, rgba(112,206,211,0.06), rgba(112,206,211,0.015))', border: '1px solid rgba(112,206,211,0.1)' }}
        >
          <img
            src={logoExyoFeliz}
            alt="Exyo feliz"
            className="w-10 sm:w-[42px]"
          />
          <p className="text-exyo-white font-display font-medium text-sm sm:text-[0.92rem] text-left">
            A <span className="text-exyo-cyan font-semibold">IA enquanto paciente</span>, auxiliando o terapeuta,
            <br className="hidden sm:block" /> não enquanto competidor.
          </p>
        </div>
      </div>
    </section>
  )
}
