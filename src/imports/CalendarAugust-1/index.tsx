import svgPaths from "./svg-dfivsc67fh";

function Battery() {
  return (
    <div className="absolute contents right-[32.57px] top-[22.6px]" data-name="Battery">
      <div className="absolute border border-solid border-white h-[13px] opacity-35 right-[34.8px] rounded-[4.3px] top-[22.6px] w-[25px]" data-name="Border" />
      <div className="absolute h-[4px] right-[32.57px] top-[27.27px] w-[1.328px]" data-name="Cap">
        <svg className="absolute block inset-0 size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 1.32804 4" width="1.32804">
          <path d={svgPaths.p32d253c0} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bg-white h-[9px] right-[37px] rounded-[2.5px] top-[24.6px] w-[21px]" data-name="Capacity" />
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute h-[22px] left-[43px] overflow-clip top-[18.5px] w-[54px]" data-name="Time Style">
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-0 right-0 text-[17px] text-black text-center top-[calc(50%-11px)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        5:30
      </p>
    </div>
  );
}

function Dashboard1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="dashboard">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="dashboard">
          <path d={svgPaths.p53eb700} fill="var(--fill-0, #0F345E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-[180px] shrink-0" data-name="Dashboard">
      <Dashboard1 />
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Layer 93">
      <svg className="absolute block inset-0 size-full" fill="none" height="26.6667" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667" width="26.6667">
        <g id="Layer 93">
          <path d={svgPaths.peef7880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pc43dd80} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Calendar1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="calendar">
      <Layer1 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="bg-[#0f345e] content-stretch flex items-end justify-center overflow-clip p-[12px] relative rounded-[180px] shrink-0" data-name="calendar">
      <Calendar1 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[4.17%]" data-name="Layer 2">
      <svg className="absolute block inset-0 size-full" fill="none" height="29.3333" preserveAspectRatio="none" viewBox="0 0 29.3333 29.3333" width="29.3333">
        <g id="Layer 2">
          <path d={svgPaths.p21f49180} fill="var(--fill-0, #0F345E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Add1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="add">
      <Layer />
    </div>
  );
}

function Add() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[10px] relative rounded-[180px] shrink-0" data-name="Add">
      <Add1 />
    </div>
  );
}

function Settings1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g clipPath="url(#clip0_14_416)" id="settings">
          <path d={svgPaths.p285beb80} fill="var(--fill-0, #0F345E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_416">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Settings() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[10px] relative rounded-[180px] shrink-0" data-name="Settings">
      <Settings1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_5.24%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 28.6439 32" width="28.6439">
        <g id="Group">
          <path d={svgPaths.p19705980} fill="var(--fill-0, #0F345E)" id="Vector" />
          <path d={svgPaths.p31786780} fill="var(--fill-0, #0F345E)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0_5.24%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_5.24%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Profile1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="profile">
      <Group />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex items-center overflow-clip p-[10px] relative rounded-[180px] shrink-0" data-name="Profile">
      <Profile1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex gap-[10px] h-[44px] items-center leading-[normal] left-0 not-italic overflow-clip px-[21px] text-[22px] top-[60px] w-[402px]" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#232327] whitespace-nowrap">‹</p>
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-px relative text-[#4a4a4a]">Calendar</p>
    </div>
  );
}

function Date() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex gap-[14px] h-[34px] items-center justify-center leading-[normal] left-[-2px] not-italic overflow-clip top-[137px] w-[402px] whitespace-nowrap" data-name="date">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b6b70] text-[18px]">‹</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#777a89] text-[20px]">August 2026</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#0f345e] text-[18px]">›</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-center justify-center overflow-clip relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[13px] whitespace-nowrap">Sun</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-center justify-center overflow-clip relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[13px] whitespace-nowrap">Mon</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-center justify-center overflow-clip relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[13px] whitespace-nowrap">Tue</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-center justify-center overflow-clip relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[13px] whitespace-nowrap">Wed</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-center justify-center overflow-clip relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[13px] whitespace-nowrap">Thu</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-center justify-center overflow-clip relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[13px] whitespace-nowrap">Fri</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-center justify-center overflow-clip relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[13px] whitespace-nowrap">Sat</p>
    </div>
  );
}

function Weekdays() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[19px] overflow-clip top-[195px] w-[360px]" data-name="weekdays">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[9px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #3AA25A)" id="Ellipse" r="4.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#232327] text-[13px] whitespace-nowrap">Community</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[9px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #3B82C4)" id="Ellipse" r="4.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#232327] text-[13px] whitespace-nowrap">Social</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[9px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #D6379B)" id="Ellipse" r="4.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#232327] text-[13px] whitespace-nowrap">Solo</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[9px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 9 9" width="9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #E8973A)" id="Ellipse" r="4.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#232327] text-[13px] whitespace-nowrap">Outdoor</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[21px] overflow-clip top-[671px]" data-name="Frame">
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame" />;
}

function Frame15() {
  return <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame" />;
}

function Frame16() {
  return <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame" />;
}

function Frame17() {
  return <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame" />;
}

function Frame18() {
  return <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame" />;
}

function Frame19() {
  return <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame" />;
}

function Frame20() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <div className="absolute left-[2px] size-[48px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="var(--fill-0, #E9EDF1)" id="Ellipse" r="22.6" stroke="var(--stroke-0, #3AA25A)" strokeWidth="2.8" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[22px] not-italic text-[#4a4a4f] text-[16px] top-[49px] whitespace-nowrap">1</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex h-[66px] items-start overflow-clip relative shrink-0 w-[360px]" data-name="Frame">
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[21px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">2</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[20px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <div className="absolute left-[2px] size-[48px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="var(--fill-0, #E9EDF1)" id="Ellipse" r="22.6" stroke="var(--stroke-0, #3B82C4)" strokeWidth="2.8" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[20px] not-italic text-[#4a4a4f] text-[16px] top-[49px] whitespace-nowrap">4</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[21px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">5</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[21px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">6</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[21px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">7</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <div className="absolute left-[2px] size-[48px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="var(--fill-0, #E9EDF1)" id="Ellipse" r="22.6" stroke="var(--stroke-0, #D6379B)" strokeWidth="2.8" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[21px] not-italic text-[#4a4a4f] text-[16px] top-[49px] whitespace-nowrap">8</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex h-[66px] items-start overflow-clip relative shrink-0 w-[360px]" data-name="Frame">
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[21px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">9</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">10</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[18px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">11</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <div className="absolute left-[2px] size-[48px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="var(--fill-0, #E9EDF1)" id="Ellipse" r="22.6" stroke="var(--stroke-0, #E8973A)" strokeWidth="2.8" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17px] not-italic text-[#4a4a4f] text-[16px] top-[49px] whitespace-nowrap">12</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">13</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">14</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <div className="absolute left-[2px] size-[48px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="var(--fill-0, #E9EDF1)" id="Ellipse" r="22.6" stroke="var(--stroke-0, #3AA25A)" strokeWidth="2.8" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17px] not-italic text-[#4a4a4f] text-[16px] top-[49px] whitespace-nowrap">15</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex h-[66px] items-start overflow-clip relative shrink-0 w-[360px]" data-name="Frame">
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">16</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">17</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">18</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <div className="absolute left-[2px] size-[48px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="var(--fill-0, #E9EDF1)" id="Ellipse" r="22.6" stroke="var(--stroke-0, #3B82C4)" strokeWidth="2.8" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17px] not-italic text-[#4a4a4f] text-[16px] top-[49px] whitespace-nowrap">19</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">20</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">21</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <div className="absolute left-[2px] size-[48px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="var(--fill-0, #E9EDF1)" id="Ellipse" r="22.6" stroke="var(--stroke-0, #3AA25A)" strokeWidth="2.8" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#4a4a4f] text-[16px] top-[49px] whitespace-nowrap">22</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex h-[66px] items-start overflow-clip relative shrink-0 w-[360px]" data-name="Frame">
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame41 />
      <Frame42 />
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">23</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">24</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">25</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <div className="absolute left-[2px] size-[48px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="var(--fill-0, #E9EDF1)" id="Ellipse" r="22.6" stroke="var(--stroke-0, #D6379B)" strokeWidth="2.8" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#4a4a4f] text-[16px] top-[49px] whitespace-nowrap">26</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">27</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">28</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <div className="absolute left-[2px] size-[48px] top-0" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="var(--fill-0, #E9EDF1)" id="Ellipse" r="22.6" stroke="var(--stroke-0, #E8973A)" strokeWidth="2.8" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[16px] not-italic text-[#4a4a4f] text-[16px] top-[49px] whitespace-nowrap">29</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex h-[66px] items-start overflow-clip relative shrink-0 w-[360px]" data-name="Frame">
      <Frame46 />
      <Frame47 />
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[15px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">30</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17px] not-italic text-[#5a5a60] text-[16px] top-[22px] whitespace-nowrap">31</p>
    </div>
  );
}

function Frame56() {
  return <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame" />;
}

function Frame57() {
  return <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame" />;
}

function Frame58() {
  return <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame" />;
}

function Frame59() {
  return <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame" />;
}

function Frame60() {
  return <div className="h-[66px] relative shrink-0 w-[51px]" data-name="Frame" />;
}

function Frame53() {
  return (
    <div className="content-stretch flex h-[66px] items-start overflow-clip relative shrink-0 w-[360px]" data-name="Frame">
      <Frame54 />
      <Frame55 />
      <Frame56 />
      <Frame57 />
      <Frame58 />
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Grid() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-[21px] overflow-clip top-[228px] w-[360px]" data-name="grid">
      <Frame13 />
      <Frame21 />
      <Frame29 />
      <Frame37 />
      <Frame45 />
      <Frame53 />
    </div>
  );
}

export default function CalendarAugust() {
  return (
    <div className="bg-gradient-to-b from-[#e2edf0] relative size-full to-[#e9f3f7] to-[72%]" data-name="Calendar August">
      <div className="absolute h-[53px] left-0 top-[5px] w-[402px]" data-name="Status Bar">
        <Battery />
        <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-name="Wifi">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.0992" preserveAspectRatio="none" viewBox="0 0 17.5342 12.0992" width="17.5342">
            <path d={svgPaths.p3bdb8600} fill="var(--fill-0, black)" id="Wifi" />
          </svg>
        </div>
        <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-name="Cellular Connection">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 19.6396 12" width="19.6396">
            <path d={svgPaths.p251b6b80} fill="var(--fill-0, black)" id="Cellular Connection" />
          </svg>
        </div>
        <TimeStyle />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex gap-[20px] items-center left-[4px] overflow-clip px-[24px] py-[12px] rounded-[40px] top-[769px]" data-name="menu">
        <Dashboard />
        <Calendar />
        <Add />
        <Settings />
        <Profile />
      </div>
      <Frame />
      <Date />
      <Weekdays />
      <Frame8 />
      <Grid />
    </div>
  );
}