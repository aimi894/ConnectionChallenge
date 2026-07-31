import svgPaths from "./svg-ixiaxtymeu";

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
          <path d={svgPaths.peef7880} fill="var(--fill-0, #0F345E)" id="Vector" />
          <path d={svgPaths.pc43dd80} fill="var(--fill-0, #0F345E)" id="Vector_2" />
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
    <div className="content-stretch flex items-end justify-center overflow-clip p-[12px] relative rounded-[180px] shrink-0" data-name="calendar">
      <Calendar1 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[4.17%]" data-name="Layer 2">
      <svg className="absolute block inset-0 size-full" fill="none" height="29.3333" preserveAspectRatio="none" viewBox="0 0 29.3333 29.3333" width="29.3333">
        <g id="Layer 2">
          <path d={svgPaths.p21f49180} fill="var(--fill-0, white)" id="Vector" />
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
    <div className="bg-[#0f345e] content-stretch flex items-center overflow-clip p-[10px] relative rounded-[180px] shrink-0" data-name="Add">
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
    <div className="bg-white relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f3460] text-[20px] w-[8px]">‹</p>
      </div>
      <div aria-hidden className="absolute border border-[#e3e7ee] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function WriteYourOwn() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[18px] top-[64px]" data-name="Write your own">
      <Frame />
      <p className="[word-break:break-word] font-['Montaga:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f3460] text-[24px] w-[165px]">Write your own</p>
    </div>
  );
}

function Frame2() {
  return <div className="h-[2px] relative shrink-0 w-px" data-name="Frame" />;
}

function Frame3() {
  return <div className="h-[10px] relative shrink-0 w-px" data-name="Frame" />;
}

function Frame4() {
  return <div className="h-[2px] relative shrink-0 w-px" data-name="Frame" />;
}

function Frame5() {
  return <div className="h-[10px] relative shrink-0 w-px" data-name="Frame" />;
}

function Frame6() {
  return <div className="h-[2px] relative shrink-0 w-px" data-name="Frame" />;
}

function Frame7() {
  return (
    <div className="bg-white h-[50px] relative rounded-[12px] shrink-0 w-[344px]" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a7adb8] text-[15px] w-[162px]">Name your challenge…</p>
      </div>
      <div aria-hidden className="absolute border-[#dfe4ea] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame8() {
  return <div className="h-[10px] relative shrink-0 w-px" data-name="Frame" />;
}

function Frame9() {
  return <div className="h-[2px] relative shrink-0 w-px" data-name="Frame" />;
}

function Frame10() {
  return (
    <div className="bg-white h-[100px] relative rounded-[12px] shrink-0 w-[344px]" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a7adb8] text-[15px] w-full">{`Describe what you'll do and why it matters to you…`}</p>
      </div>
      <div aria-hidden className="absolute border-[#dfe4ea] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[29px] overflow-clip top-[132px] w-[343px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#777a89] text-[12px] w-[min-content]">CATEGORY / TYPE</p>
      <Frame2 />
      <button className="bg-white content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[14px] relative rounded-[10px] shrink-0 w-[344px]" data-name="Type Select">
        <div aria-hidden className="absolute border-[#cdcdd2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="relative shrink-0 size-[11px]" data-name="Ellipse">
          <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
            <circle cx="5.5" cy="5.5" fill="var(--fill-0, #3AA25A)" id="Ellipse" r="5.5" />
          </svg>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13.5px] text-left">Community</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[10px] text-left whitespace-nowrap">▾</p>
      </button>
      <Frame3 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#777a89] text-[12px] w-[min-content]">DIFFICULTY</p>
      <Frame4 />
      <button className="bg-white content-stretch cursor-pointer flex gap-[8px] h-[44px] items-center px-[14px] relative rounded-[10px] shrink-0 w-[344px]" data-name="Difficulty Select">
        <div aria-hidden className="absolute border-[#cdcdd2] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#232327] text-[13.5px] text-left">Easy</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#6b6b70] text-[10px] text-left whitespace-nowrap">▾</p>
      </button>
      <Frame5 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#777a89] text-[12px] w-[min-content]">CHALLENGE NAME</p>
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#777a89] text-[12px] w-[min-content]">DESCRIPTION</p>
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function SaveButton({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bottom-0 h-[223px] left-[22px] pointer-events-none top-[651px]"}>
      <div className="bg-[#0f345e] content-stretch flex h-[48px] items-center justify-center overflow-clip pointer-events-auto px-[32px] py-[16px] rounded-[12px] sticky top-0 w-[349px]" data-name="save button">
        <p className="[word-break:break-word] font-['Montaga:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Add challenge</p>
      </div>
    </div>
  );
}

export default function WriteYourOwnChallenge() {
  return (
    <div className="bg-gradient-to-b from-[#e2edf0] relative size-full to-[#e9f3f7] to-[72%]" data-name="Write your own challenge">
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
      <WriteYourOwn />
      <Frame1 />
      <SaveButton />
    </div>
  );
}