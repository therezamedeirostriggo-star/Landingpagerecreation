import svgPaths from "./svg-ifao7qzdyx";

function ConsultoriadebelezaV2AOfficialPtBr() {
  return (
    <div className="h-[32px] relative shrink-0 w-[192px]" data-name="consultoriadebeleza_v2-a-official-pt-br">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 32">
        <g id="consultoriadebeleza_v2-a-official-pt-br">
          <g id="Vector">
            <path d={svgPaths.p31b0b580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1be15800} fill="var(--fill-0, white)" />
            <path d={svgPaths.pcfed400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20efd200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p367684b0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1e57c500} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa32a7c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b3e1700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d769810} fill="var(--fill-0, white)" />
            <path d={svgPaths.p22c04fc0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1ae80e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pcaa240} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b0b2680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2992e1c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18d4d880} fill="var(--fill-0, white)" />
            <path d={svgPaths.p211c3d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3bd2d800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d618780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p365c9280} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23a6a400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23149300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1acbee00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p25585b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p155c4900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p35c31300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2aea0900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p31b6d4b0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p39c63780} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MainColumn() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="mainColumn">
      <ConsultoriadebelezaV2AOfficialPtBr />
    </div>
  );
}

function ButtonV3UtilsBase() {
  return (
    <div className="min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name=".button (v3) - utils - base">
      <div className="flex flex-row items-center justify-center min-h-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center min-h-inherit px-[8px] py-0 relative w-full">
          <div className="absolute inset-0 rounded-[4px]" data-name="surface">
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[0.112px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.5] whitespace-pre">quero participar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GayaButtonV() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[4px] shrink-0" data-name="✅  gayaButton (v3)">
      <ButtonV3UtilsBase />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="button group">
      <GayaButtonV />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between max-w-[1280px] min-h-px min-w-px relative shrink-0" data-name="headerContainer">
      <MainColumn />
      <ButtonGroup />
    </div>
  );
}

export default function Header() {
  return (
    <div className="relative size-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[24px] py-0 relative size-full">
          <HeaderContainer />
        </div>
      </div>
    </div>
  );
}