import imgImageNatura from "figma:asset/dbe42be636cd0922b06ac4887b594d9377e6c09a.png";
import imgImageAvon from "figma:asset/734b4f1d7a8c5d80f572a6c735bb9d47e6ea1119.png";

function ImageNatura() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Image (Natura)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageNatura} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[56px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-[56px]">
        <ImageNatura />
      </div>
    </div>
  );
}

function ImageAvon() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[54px]" data-name="Image (Avon)">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 overflow-hidden pointer-events-none rounded-[999px]">
        <img alt="" className="absolute left-[-1.85%] max-w-none size-[103.7%] top-[-2.05%]" src={imgImageAvon} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[54px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#e6024d] relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-[56px]">
        <ImageAvon />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 top-[0.11px] w-[138px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Paragraph() {
  return <div className="absolute h-[19.5px] left-0 top-[64px] w-[226.094px]" data-name="Paragraph" />;
}

export default function Container3() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container2 />
      <Paragraph />
    </div>
  );
}