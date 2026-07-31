type StatusDropdownProps = {
  className?: string;
  state?: "In Progress" | "Completed" | "Cancelled" | "Open" | "Open Hover In" | "Open Hover Completed" | "Open Hover Cancelled";
};

export default function StatusDropdown({ className, state = "In Progress" }: StatusDropdownProps) {
  if (state === "Completed") {
    return (
      <button className={className || "content-stretch cursor-pointer flex gap-[8px] items-center px-[14px] py-[8px] relative rounded-[20px]"} data-name="State=Completed">
        <div aria-hidden className="absolute border-[#2f8f52] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2f8f52] text-[13px] text-left whitespace-nowrap">Completed</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2f8f52] text-[10px] text-left whitespace-nowrap">▾</p>
      </button>
    );
  }
  if (state === "Cancelled") {
    return (
      <button className={className || "content-stretch cursor-pointer flex gap-[8px] items-center px-[14px] py-[8px] relative rounded-[20px]"} data-name="State=Cancelled">
        <div aria-hidden className="absolute border-[#c0392b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#c0392b] text-[13px] text-left whitespace-nowrap">Cancelled</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#c0392b] text-[10px] text-left whitespace-nowrap">▾</p>
      </button>
    );
  }
  if (state === "Open") {
    return (
      <div className={className || "content-stretch cursor-pointer flex flex-col gap-[6px] items-start relative"} data-name="State=Open">
        <button className="relative rounded-[20px] shrink-0" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex font-semibold gap-[8px] items-center leading-[normal] not-italic overflow-clip px-[14px] py-[8px] relative rounded-[inherit] size-full text-left whitespace-nowrap">
            <p className="font-['Inter:Semi_Bold',sans-serif] relative shrink-0 text-[#eabd23] text-[13px]">In Progress</p>
            <p className="font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] relative shrink-0 text-[#e8973a] text-[10px]">▴</p>
          </div>
          <div aria-hidden className="absolute border border-[#eabd23] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </button>
        <div className="absolute bg-white content-stretch flex flex-col gap-[2px] items-start left-0 overflow-clip p-[6px] rounded-[12px] top-[38px] w-[200px]" data-name="menu">
          <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt In Progress">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                  <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                    <circle cx="5" cy="5" fill="var(--fill-0, #EABD23)" id="Ellipse" r="5" />
                  </svg>
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">In Progress</p>
              </div>
            </div>
          </button>
          <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Completed">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                  <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                    <circle cx="5" cy="5" fill="var(--fill-0, #2F8F52)" id="Ellipse" r="5" />
                  </svg>
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Completed</p>
              </div>
            </div>
          </button>
          <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Cancelled">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                  <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                    <circle cx="5" cy="5" fill="var(--fill-0, #C0392B)" id="Ellipse" r="5" />
                  </svg>
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Cancelled</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }
  if (state === "Open Hover In") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[6px] items-start relative"} data-name="State=Open Hover In">
        <button className="cursor-pointer relative rounded-[20px] shrink-0" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex font-semibold gap-[8px] items-center leading-[normal] not-italic overflow-clip px-[14px] py-[8px] relative rounded-[inherit] size-full text-left whitespace-nowrap">
            <p className="font-['Inter:Semi_Bold',sans-serif] relative shrink-0 text-[#eabd23] text-[13px]">In Progress</p>
            <p className="font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] relative shrink-0 text-[#e8973a] text-[10px]">▴</p>
          </div>
          <div aria-hidden className="absolute border-[#eabd23] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </button>
        <div className="absolute bg-white left-0 rounded-[12px] top-[38px] w-[200px]" data-name="menu">
          <div className="content-stretch cursor-pointer flex flex-col gap-[2px] items-start overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <button className="bg-[rgba(234,189,35,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="opt In Progress">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #EABD23)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">In Progress</p>
                </div>
              </div>
            </button>
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Completed">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #2F8F52)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Completed</p>
                </div>
              </div>
            </button>
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Cancelled">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #C0392B)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Cancelled</p>
                </div>
              </div>
            </button>
          </div>
          <div aria-hidden className="absolute border border-[#e3e3e7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]" />
        </div>
      </div>
    );
  }
  if (state === "Open Hover Completed") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[6px] items-start relative"} data-name="State=Open Hover Completed">
        <button className="bg-white cursor-pointer relative rounded-[20px] shrink-0" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex font-semibold gap-[8px] items-center leading-[normal] not-italic overflow-clip px-[14px] py-[8px] relative rounded-[inherit] size-full text-left whitespace-nowrap">
            <p className="font-['Inter:Semi_Bold',sans-serif] relative shrink-0 text-[#eabd23] text-[13px]">In Progress</p>
            <p className="font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] relative shrink-0 text-[#e8973a] text-[10px]">▴</p>
          </div>
          <div aria-hidden className="absolute border-[#eabd23] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </button>
        <div className="absolute bg-white left-0 rounded-[12px] top-[38px] w-[200px]" data-name="menu">
          <div className="content-stretch cursor-pointer flex flex-col gap-[2px] items-start overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt In Progress">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #EABD23)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">In Progress</p>
                </div>
              </div>
            </button>
            <button className="bg-[rgba(47,143,82,0.14)] relative rounded-[8px] shrink-0 w-full" data-name="opt Completed">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #2F8F52)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Completed</p>
                </div>
              </div>
            </button>
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Cancelled">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #C0392B)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Cancelled</p>
                </div>
              </div>
            </button>
          </div>
          <div aria-hidden className="absolute border border-[#e3e3e7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]" />
        </div>
      </div>
    );
  }
  if (state === "Open Hover Cancelled") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[6px] items-start relative"} data-name="State=Open Hover Cancelled">
        <button className="bg-white cursor-pointer relative rounded-[20px] shrink-0" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex font-semibold gap-[8px] items-center leading-[normal] not-italic overflow-clip px-[14px] py-[8px] relative rounded-[inherit] size-full text-left whitespace-nowrap">
            <p className="font-['Inter:Semi_Bold',sans-serif] relative shrink-0 text-[#eabd23] text-[13px]">In Progress</p>
            <p className="font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] relative shrink-0 text-[#e8973a] text-[10px]">▴</p>
          </div>
          <div aria-hidden className="absolute border-[#eabd23] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </button>
        <div className="absolute bg-white left-0 rounded-[12px] top-[38px] w-[200px]" data-name="menu">
          <div className="content-stretch cursor-pointer flex flex-col gap-[2px] items-start overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt In Progress">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #EABD23)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">In Progress</p>
                </div>
              </div>
            </button>
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Completed">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #2F8F52)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Completed</p>
                </div>
              </div>
            </button>
            <button className="bg-[rgba(192,57,43,0.14)] relative rounded-[8px] shrink-0 w-full" data-name="opt Cancelled">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #C0392B)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Cancelled</p>
                </div>
              </div>
            </button>
          </div>
          <div aria-hidden className="absolute border border-[#e3e3e7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]" />
        </div>
      </div>
    );
  }
  return (
    <button className={className || "content-stretch cursor-pointer flex gap-[8px] items-center px-[14px] py-[8px] relative rounded-[20px]"} data-name="State=In Progress">
      <div aria-hidden className="absolute border border-[#eabd23] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#eabd23] text-[13px] text-left whitespace-nowrap">In Progress</p>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#e8973a] text-[10px] text-left whitespace-nowrap">▾</p>
    </button>
  );
}