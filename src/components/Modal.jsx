import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    cargo: '',
    mensagem: '',
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Obrigado! Entraremos em contato em breve.')
    setFormData({ nome: '', email: '', empresa: '', cargo: '', mensagem: '' })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-exyo-card border border-exyo-border rounded-2xl p-5 sm:p-8 w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-2xl leading-none focus:outline-none focus:ring-2 focus:ring-exyo-cyan"
              aria-label="Fechar"
            >
              &times;
            </button>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Agendar Reunião
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Encontre-nos no <span className="text-exyo-cyan font-semibold">Web Summit</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-exyo-dark border border-exyo-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-exyo-cyan focus:border-exyo-cyan transition-colors font-body text-sm sm:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-exyo-dark border border-exyo-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-exyo-cyan focus:border-exyo-cyan transition-colors font-body text-sm sm:text-base"
              />
              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-exyo-dark border border-exyo-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-exyo-cyan focus:border-exyo-cyan transition-colors font-body text-sm sm:text-base"
              />
              <input
                type="text"
                name="cargo"
                placeholder="Cargo"
                value={formData.cargo}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-exyo-dark border border-exyo-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-exyo-cyan focus:border-exyo-cyan transition-colors font-body text-sm sm:text-base"
              />
              <textarea
                name="mensagem"
                placeholder="Mensagem"
                rows={3}
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-exyo-dark border border-exyo-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-exyo-cyan focus:border-exyo-cyan transition-colors font-body resize-none text-sm sm:text-base"
              />
              <button
                type="submit"
                className="w-full py-3 bg-exyo-cyan text-exyo-dark font-display font-bold rounded-full hover:bg-opacity-90 transition-all pulse-cyan focus:outline-none focus:ring-2 focus:ring-exyo-cyan focus:ring-offset-2 focus:ring-offset-exyo-dark"
              >
                Enviar
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
