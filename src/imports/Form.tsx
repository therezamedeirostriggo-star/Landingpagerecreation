export default function Form() {
  return (
    <div className="relative rounded-[16px] size-full" data-name="Form">
      <div aria-hidden="true" className="absolute border border-pink-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start leading-[20px] p-[40px] relative size-full text-[#4a5565]">
          <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 text-[16px] w-full">Agradecemos pela inscrição!</p>
          <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">{`Em breve entraremos em contato para indicar os próximos passos. `}</p>
          <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[11px] w-full">Dúvidas, entrar em contato através do e-mail thaissilva.triggo@natura.net</p>
        </div>
      </div>
    </div>
  );
}