export function VXRTLogo({
  className = '',
  showText = true
}: {className?: string;showText?: boolean;}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/VXRT_Icon_Dark_1080x1080.png"
        alt="VXRT Logo"
        className="h-7 w-7 object-contain" />
      
      {showText &&
      <div className="flex flex-col">
          <span className="font-heading font-bold text-ghost-white text-lg leading-none tracking-wider">
            VXRT
          </span>
          <span className="font-sans text-[8px] text-exploit-red font-bold tracking-widest leading-none mt-[2px]">
            OFFENSIVE SECURITY
          </span>
        </div>
      }
    </div>);

}