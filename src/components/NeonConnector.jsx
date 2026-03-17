export default function NeonConnector({ variant = 'line' }) {
  if (variant === 'wide') {
    return (
      <div className="neon-connector wide">
        <div className="nc-arm" />
        <div className="nc-diamond" />
        <div className="nc-arm right" />
      </div>
    )
  }

  return (
    <div className="neon-connector">
      <div className="nc-line" />
    </div>
  )
}
