interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
  animationSpeed = 8,
  showBorder = false
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div className={`relative mx-auto flex w-fit items-center justify-center overflow-hidden rounded-[1.25rem] font-medium backdrop-blur-[10px] transition-shadow duration-500 ${className}`}>
      {showBorder && (
        <div className="pointer-events-none absolute inset-0 z-0 animate-gradient bg-[length:300%_100%]" style={{ ...gradientStyle, borderRadius: 'inherit' }}>
          <div className="absolute inset-px -z-10 bg-[#060010]" style={{ borderRadius: 'inherit' }} />
        </div>
      )}
      <div className="relative z-10 inline-block animate-gradient bg-[length:300%_100%] bg-clip-text text-transparent" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
