type TypeSelectProps = {
  className?: string;
  state?: "Community" | "Social" | "Solo" | "Outdoor" | "Open";
};

export default function TypeSelect({ className, state = "Community" }: TypeSelectProps) {
  if (state === "Social") {
    return (
      <button className={className || "bg-white content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[14px] relative rounded-[10px] w-[344px]"} data-name="State=Social">
        <div aria-hidden className="absolute border-[#cdcdd2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="relative shrink-0 size-[11px]" data-name="Ellipse">
          <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
            <circle cx="5.5" cy="5.5" fill="var(--fill-0, #3B82C4)" id="Ellipse" r="5.5" />
          </svg>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13.5px] text-left">Social</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[10px] text-left whitespace-nowrap">▾</p>
      </button>
    );
  }
  if (state === "Solo") {
    return (
      <button className={className || "bg-white content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[14px] relative rounded-[10px] w-[344px]"} data-name="State=Solo">
        <div aria-hidden className="absolute border-[#cdcdd2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="relative shrink-0 size-[11px]" data-name="Ellipse">
          <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
            <circle cx="5.5" cy="5.5" fill="var(--fill-0, #D6379B)" id="Ellipse" r="5.5" />
          </svg>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13.5px] text-left">Solo</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[10px] text-left whitespace-nowrap">▾</p>
      </button>
    );
  }
  if (state === "Outdoor") {
    return (
      <button className={className || "bg-white content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[14px] relative rounded-[10px] w-[344px]"} data-name="State=Outdoor">
        <div aria-hidden className="absolute border-[#cdcdd2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="relative shrink-0 size-[11px]" data-name="Ellipse">
          <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
            <circle cx="5.5" cy="5.5" fill="var(--fill-0, #E8973A)" id="Ellipse" r="5.5" />
          </svg>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13.5px] text-left">Outdoor</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[10px] text-left whitespace-nowrap">▾</p>
      </button>
    );
  }
  if (state === "Open") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[6px] items-start relative"} data-name="State=Open">
        <button className="bg-white cursor-pointer h-[44px] relative rounded-[10px] shrink-0 w-[344px]" data-name="Frame">
          <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
            <div className="relative shrink-0 size-[11px]" data-name="Ellipse">
              <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
                <circle cx="5.5" cy="5.5" fill="var(--fill-0, #3AA25A)" id="Ellipse" r="5.5" />
              </svg>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13.5px] text-left">Community</p>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[10px] text-left whitespace-nowrap">▴</p>
          </div>
          <div aria-hidden className="absolute border-[#cdcdd2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </button>
        <div className="bg-white relative rounded-[10px] shrink-0 w-[344px]" data-name="menu">
          <div className="content-stretch cursor-pointer flex flex-col gap-[2px] items-start overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Community">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #3AA25A)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Community</p>
                </div>
              </div>
            </button>
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Social">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #3B82C4)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Social</p>
                </div>
              </div>
            </button>
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Solo">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #D6379B)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Solo</p>
                </div>
              </div>
            </button>
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Outdoor">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[10px] items-center px-[12px] py-[10px] relative size-full">
                  <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
                    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #E8973A)" id="Ellipse" r="5" />
                    </svg>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Outdoor</p>
                </div>
              </div>
            </button>
          </div>
          <div aria-hidden className="absolute border border-[#e3e3e7] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]" />
        </div>
      </div>
    );
  }
  return (
    <button className={className || "bg-white content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[14px] relative rounded-[10px] w-[344px]"} data-name="State=Community">
      <div aria-hidden className="absolute border-[#cdcdd2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="relative shrink-0 size-[11px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
          <circle cx="5.5" cy="5.5" fill="var(--fill-0, #3AA25A)" id="Ellipse" r="5.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13.5px] text-left">Community</p>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[10px] text-left whitespace-nowrap">▾</p>
    </button>
  );
}