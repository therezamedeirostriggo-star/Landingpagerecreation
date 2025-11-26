import svgPaths from "../imports/svg-zxfzfhbk2p";

function ConsultoriadebelezaLogo() {
  return (
    <div className="h-[24px] relative w-[144px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 32">
        <g>
          <g>
            <path d={svgPaths.p31b0b580} fill="white" />
            <path d={svgPaths.p1be15800} fill="white" />
            <path d={svgPaths.pcfed400} fill="white" />
            <path d={svgPaths.p20efd200} fill="white" />
            <path d={svgPaths.p367684b0} fill="white" />
            <path d={svgPaths.p1e57c500} fill="white" />
            <path d={svgPaths.pa32a7c0} fill="white" />
            <path d={svgPaths.p3b3e1700} fill="white" />
            <path d={svgPaths.p3d769810} fill="white" />
            <path d={svgPaths.p22c04fc0} fill="white" />
            <path d={svgPaths.p1ae80e00} fill="white" />
            <path d={svgPaths.pcaa240} fill="white" />
            <path d={svgPaths.p3b0b2680} fill="white" />
            <path d={svgPaths.p2992e1c0} fill="white" />
            <path d={svgPaths.p18d4d880} fill="white" />
            <path d={svgPaths.p211c3d80} fill="white" />
            <path d={svgPaths.p3bd2d800} fill="white" />
            <path d={svgPaths.p3d618780} fill="white" />
            <path d={svgPaths.p365c9280} fill="white" />
            <path d={svgPaths.p23a6a400} fill="white" />
            <path d={svgPaths.p23149300} fill="white" />
            <path d={svgPaths.p1acbee00} fill="white" />
            <path d={svgPaths.p25585b00} fill="white" />
            <path d={svgPaths.p155c4900} fill="white" />
            <path d={svgPaths.p35c31300} fill="white" />
            <path d={svgPaths.p2aea0900} fill="white" />
            <path d={svgPaths.p31b6d4b0} fill="white" />
            <path d={svgPaths.p39c63780} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function HeaderNatura() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 w-full">
      <div className="flex items-center justify-between px-6 lg:px-24 py-4">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <ConsultoriadebelezaLogo />
        </div>

        {/* CTA Button */}
        <a
          href="#formulario"
          className="px-6 py-2 text-white text-sm font-medium border-2 border-white rounded hover:bg-white hover:text-gray-900 transition-all duration-300"
          style={{
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: '0.112px',
            background: 'transparent'
          }}
        >
          cadastre-se
        </a>
      </div>
    </header>
  );
}