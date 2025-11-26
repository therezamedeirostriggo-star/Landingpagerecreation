import imgImageNatura from "figma:asset/dbe42be636cd0922b06ac4887b594d9377e6c09a.png";
import imgImageAvon from "figma:asset/734b4f1d7a8c5d80f572a6c735bb9d47e6ea1119.png";
import { Trophy } from "lucide-react";

function ImageNatura() {
  return (
    <div className="relative shrink-0 size-[56px]">
      <img 
        alt="Natura" 
        className="absolute inset-0 size-full object-cover rounded-[8px]" 
        src={imgImageNatura} 
      />
    </div>
  );
}

function NaturaContainer() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[56px]">
      <div className="flex items-center justify-center overflow-clip relative rounded-[inherit] size-[56px]">
        <ImageNatura />
      </div>
    </div>
  );
}

function ImageAvon() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[54px]">
      <div className="absolute inset-0 overflow-hidden rounded-[999px]">
        <img 
          alt="Avon" 
          className="absolute left-[-1.85%] max-w-none size-[103.7%] top-[-2.05%]" 
          src={imgImageAvon} 
        />
      </div>
    </div>
  );
}

function AvonContainer() {
  return (
    <div className="bg-[#e6024d] relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[56px]">
      <div className="flex items-center justify-center overflow-clip relative rounded-[inherit] size-[56px]">
        <ImageAvon />
      </div>
    </div>
  );
}

export function BrandBadges() {
  return (
    <div className="inline-flex items-center gap-3 mt-8">
      {/* Badges Container */}
      <div className="flex gap-3">
        <NaturaContainer />
        <AvonContainer />
      </div>
      
      {/* Trophy Icon + Text */}
      <div className="flex items-center gap-2">
        <Trophy className="w-5 h-5 text-white" strokeWidth={2} />
        <p 
          className="text-white font-[Montserrat]"
          style={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '1.4'
          }}
        >
          Marcas líderes em beleza no Brasil
        </p>
      </div>
    </div>
  );
}