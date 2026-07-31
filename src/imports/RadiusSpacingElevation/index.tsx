function RadiusXs() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="radius/xs">
      <div className="bg-[#e8edf2] h-[56px] relative rounded-[3px] shrink-0 w-[84px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">xs · 3</p>
    </div>
  );
}

function RadiusSm() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="radius/sm">
      <div className="bg-[#e8edf2] h-[56px] relative rounded-[6px] shrink-0 w-[84px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">sm · 6</p>
    </div>
  );
}

function RadiusMd() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="radius/md">
      <div className="bg-[#e8edf2] h-[56px] relative rounded-[8px] shrink-0 w-[84px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">md · 8</p>
    </div>
  );
}

function RadiusLg() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="radius/lg">
      <div className="bg-[#e8edf2] h-[56px] relative rounded-[12px] shrink-0 w-[84px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">lg · 12</p>
    </div>
  );
}

function RadiusXl() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="radius/xl">
      <div className="bg-[#e8edf2] h-[56px] relative rounded-[16px] shrink-0 w-[84px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">xl · 16</p>
    </div>
  );
}

function Radius2Xl() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="radius/2xl">
      <div className="bg-[#e8edf2] h-[56px] relative rounded-[20px] shrink-0 w-[84px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">2xl · 20</p>
    </div>
  );
}

function RadiusPill() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="radius/pill">
      <div className="bg-[#e8edf2] h-[56px] relative rounded-[28px] shrink-0 w-[84px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[28px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">pill · 40</p>
    </div>
  );
}

function RadiusFull() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-name="radius/full">
      <div className="bg-[#e8edf2] h-[56px] relative rounded-[28px] shrink-0 w-[84px]" data-name="Rectangle">
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[28px]" />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[10px] whitespace-nowrap">full · 360</p>
    </div>
  );
}

function Row() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[0px_16px] items-start overflow-clip relative shrink-0 w-[560px]" data-name="row">
      <RadiusXs />
      <RadiusSm />
      <RadiusMd />
      <RadiusLg />
      <RadiusXl />
      <Radius2Xl />
      <RadiusPill />
      <RadiusFull />
    </div>
  );
}

function Radius() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0" data-name="Radius">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#737373] text-[13px] whitespace-nowrap">Radius</p>
      <Row />
    </div>
  );
}

function Space() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="space/2">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] w-[90px]">2 · 2px</p>
      <div className="bg-[#0f335e] h-[16px] relative rounded-[3px] shrink-0 w-[2px]" data-name="Rectangle" />
    </div>
  );
}

function Space1() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="space/4">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] w-[90px]">4 · 4px</p>
      <div className="bg-[#0f335e] h-[16px] relative rounded-[3px] shrink-0 w-[4px]" data-name="Rectangle" />
    </div>
  );
}

function Space2() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="space/6">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] w-[90px]">6 · 6px</p>
      <div className="bg-[#0f335e] h-[16px] relative rounded-[3px] shrink-0 w-[6px]" data-name="Rectangle" />
    </div>
  );
}

function Space3() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="space/8">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] w-[90px]">8 · 8px</p>
      <div className="bg-[#0f335e] h-[16px] relative rounded-[3px] shrink-0 w-[8px]" data-name="Rectangle" />
    </div>
  );
}

function Space4() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="space/12">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] w-[90px]">12 · 12px</p>
      <div className="bg-[#0f335e] h-[16px] relative rounded-[3px] shrink-0 w-[12px]" data-name="Rectangle" />
    </div>
  );
}

function Space5() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="space/16">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] w-[90px]">16 · 16px</p>
      <div className="bg-[#0f335e] relative rounded-[3px] shrink-0 size-[16px]" data-name="Rectangle" />
    </div>
  );
}

function Space6() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="space/20">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] w-[90px]">20 · 20px</p>
      <div className="bg-[#0f335e] h-[16px] relative rounded-[3px] shrink-0 w-[20px]" data-name="Rectangle" />
    </div>
  );
}

function Space7() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="space/24">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] w-[90px]">24 · 24px</p>
      <div className="bg-[#0f335e] h-[16px] relative rounded-[3px] shrink-0 w-[24px]" data-name="Rectangle" />
    </div>
  );
}

function Space8() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="space/32">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] w-[90px]">32 · 32px</p>
      <div className="bg-[#0f335e] h-[16px] relative rounded-[3px] shrink-0 w-[32px]" data-name="Rectangle" />
    </div>
  );
}

function Spacing() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0" data-name="Spacing">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#737373] text-[13px] whitespace-nowrap">Spacing (4pt scale)</p>
      <Space />
      <Space1 />
      <Space2 />
      <Space3 />
      <Space4 />
      <Space5 />
      <Space6 />
      <Space7 />
      <Space8 />
    </div>
  );
}

function Frame() {
  return <div className="bg-white h-[84px] relative rounded-[12px] shadow-[0px_4px_16px_0px_rgba(15,33,61,0.1)] shrink-0 w-[140px]" data-name="Frame" />;
}

function ShadowCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-name="Shadow/Card">
      <Frame />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] whitespace-nowrap">Card</p>
    </div>
  );
}

function Frame1() {
  return <div className="bg-white h-[84px] relative rounded-[12px] shadow-[0px_1px_4px_0px_rgba(15,33,61,0.08)] shrink-0 w-[140px]" data-name="Frame" />;
}

function ShadowSoft() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-name="Shadow/Soft">
      <Frame1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[11px] whitespace-nowrap">Soft</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-white content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="row">
      <ShadowCard />
      <ShadowSoft />
    </div>
  );
}

function Elevation() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0" data-name="Elevation">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#737373] text-[13px] whitespace-nowrap">Elevation</p>
      <Row1 />
    </div>
  );
}

export default function RadiusSpacingElevation() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Radius, Spacing & Elevation">
      <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip p-[40px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#242424] text-[24px] whitespace-nowrap">{`Radius, Spacing & Elevation`}</p>
        <Radius />
        <Spacing />
        <Elevation />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}