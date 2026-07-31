export default function ChallengeCard({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col gap-[4px] h-[144px] items-start px-[20px] py-[16px] relative rounded-[20px]"} data-name="challenge card">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Title">
        <div className="relative shrink-0 size-[16px]" data-name="challenge status">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <circle cx="8" cy="8" fill="var(--fill-0, #EABD23)" id="challenge status" r="8" />
          </svg>
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#232327] text-[16px] w-[317px]">Volunteer at an Animal Rescue or Shelter</p>
      </div>
      <div className="content-stretch flex items-center overflow-clip py-[12px] relative shrink-0" data-name="Descrition">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] whitespace-nowrap">Here goes description</p>
      </div>
    </div>
  );
}