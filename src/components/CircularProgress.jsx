import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CircularProgress({ value, max, label, description, size }) {
  const [ref, isVisible] = useScrollReveal(0.3)
  const responsiveSize = size || 150
  const mobileSize = Math.min(responsiveSize, 120)
  const strokeWidth = 8
  const radius = (responsiveSize - strokeWidth) / 2
  const mobileRadius = (mobileSize - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const mobileCircumference = 2 * Math.PI * mobileRadius
  const percentage = value / max
  const offset = circumference - (percentage * circumference)
  const mobileOffset = mobileCircumference - (percentage * mobileCircumference)

  return (
    <div ref={ref} className="flex flex-col items-center">
      {/* Mobile circle */}
      <div className="relative sm:hidden" style={{ width: mobileSize, height: mobileSize }}>
        <svg width={mobileSize} height={mobileSize} className="-rotate-90">
          <defs>
            <linearGradient id={`grad-m-${value}-${max}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#70CED3" />
              <stop offset="100%" stopColor="#4AABB0" />
            </linearGradient>
          </defs>
          <circle
            cx={mobileSize / 2}
            cy={mobileSize / 2}
            r={mobileRadius}
            fill="none"
            stroke="#1E1E1E"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={mobileSize / 2}
            cy={mobileSize / 2}
            r={mobileRadius}
            fill="none"
            stroke={`url(#grad-m-${value}-${max})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={mobileCircumference}
            strokeDashoffset={isVisible ? mobileOffset : mobileCircumference}
            className="transition-all duration-[1500ms] ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-xl font-bold text-white">
            {label}
          </span>
        </div>
      </div>

      {/* Desktop circle */}
      <div className="relative hidden sm:block" style={{ width: responsiveSize, height: responsiveSize }}>
        <svg width={responsiveSize} height={responsiveSize} className="-rotate-90">
          <defs>
            <linearGradient id={`grad-${value}-${max}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#70CED3" />
              <stop offset="100%" stopColor="#4AABB0" />
            </linearGradient>
          </defs>
          <circle
            cx={responsiveSize / 2}
            cy={responsiveSize / 2}
            r={radius}
            fill="none"
            stroke="#1E1E1E"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={responsiveSize / 2}
            cy={responsiveSize / 2}
            r={radius}
            fill="none"
            stroke={`url(#grad-${value}-${max})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? offset : circumference}
            className="transition-all duration-[1500ms] ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl sm:text-3xl font-bold text-white">
            {label}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm sm:text-base text-gray-400 text-center max-w-[220px] font-body leading-relaxed">
        {description}
      </p>
    </div>
  )
}
