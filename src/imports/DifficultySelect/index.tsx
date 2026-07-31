type DifficultySelectProps = {
  className?: string;
  state?: "Easy" | "Medium" | "Hard" | "Open";
};

export default function DifficultySelect({ className, state = "Easy" }: DifficultySelectProps) {
  if (state === "Medium") {
    return (
      <button className={className || "bg-white content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[14px] relative rounded-[10px] w-[344px]"} data-name="State=Medium">
        <div aria-hidden className="absolute border-[#cdcdd2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13.5px] text-left">Medium</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[10px] text-left whitespace-nowrap">▾</p>
      </button>
    );
  }
  if (state === "Hard") {
    return (
      <button className={className || "bg-white content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[14px] relative rounded-[10px] w-[344px]"} data-name="State=Hard">
        <div aria-hidden className="absolute border-[#cdcdd2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13.5px] text-left">Hard</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[10px] text-left whitespace-nowrap">▾</p>
      </button>
    );
  }
  if (state === "Open") {
    return (
      <div className={className || "content-stretch flex flex-col gap-[6px] items-start relative"} data-name="State=Open">
        <button className="bg-white cursor-pointer h-[44px] relative rounded-[10px] shrink-0 w-[344px]" data-name="Frame">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] not-italic overflow-clip px-[14px] relative rounded-[inherit] size-full text-left">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-w-px relative text-[#232327] text-[13.5px]">Easy</p>
            <p className="font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold relative shrink-0 text-[#6b6b70] text-[10px] whitespace-nowrap">▴</p>
          </div>
          <div aria-hidden className="absolute border-[#cdcdd2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </button>
        <div className="bg-white relative rounded-[10px] shrink-0 w-[344px]" data-name="menu">
          <div className="content-stretch cursor-pointer flex flex-col gap-[2px] items-start overflow-clip p-[6px] relative rounded-[inherit] size-full">
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Easy">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Easy</p>
                </div>
              </div>
            </button>
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Medium">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Medium</p>
                </div>
              </div>
            </button>
            <button className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="opt Hard">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13px] text-left">Hard</p>
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
    <button className={className || "bg-white content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[14px] relative rounded-[10px] w-[344px]"} data-name="State=Easy">
      <div aria-hidden className="absolute border-[#cdcdd2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13.5px] text-left">Easy</p>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[10px] text-left whitespace-nowrap">▾</p>
    </button>
  );
}