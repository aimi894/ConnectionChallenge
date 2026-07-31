import svgPaths from "./svg-iulu3zxnll";
import imgFrame from "./0872913e7dabd4ed519c0061d3a69dda3e94ec84.png";

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

function Frame() {
  return (
    <div className="absolute bg-white left-[18px] rounded-[20px] size-[40px] top-[64px]" data-name="Frame">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#0f3460] text-[20px] w-[8px]">‹</p>
      </div>
      <div aria-hidden className="absolute border border-[#e3e7ee] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[156px] pointer-events-none relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute inset-0 rounded-[8px]">
        <div className="absolute bg-[#eef2f6] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgFrame} />
      </div>
      <div aria-hidden className="absolute border border-[#cdcdd2] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#eafaef] relative rounded-[12px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[11px] py-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#2f8f52] text-[12px] w-[67px]">Community</p>
      </div>
      <div aria-hidden className="absolute border-[#3aa25a] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#eef0f2] relative rounded-[12px] shrink-0" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip px-[11px] py-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#5a5a60] text-[12px] w-[28px]">Easy</p>
      </div>
      <div aria-hidden className="absolute border-[#c8ccd4] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[12px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
          <circle cx="6" cy="6" fill="var(--fill-0, #3AA25A)" id="Ellipse" r="6" />
        </svg>
      </div>
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#232327] text-[15px]">Status</p>
      <button className="content-stretch cursor-pointer flex gap-[8px] items-center px-[14px] py-[8px] relative rounded-[20px] shrink-0" data-name="Status Dropdown">
        <div aria-hidden className="absolute border border-[#eabd23] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#eabd23] text-[13px] text-left whitespace-nowrap">In Progress</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#e8973a] text-[10px] text-left whitespace-nowrap">▾</p>
      </button>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f2f8f4] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex font-normal gap-[10px] items-center leading-[1.45] not-italic p-[14px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] relative shrink-0 text-[#2f8f52] text-[15px] w-[16px]">✎</p>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] min-w-px relative text-[#39403b] text-[13px]">{`When you're done, you'll add a short reflection.`}</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#d6e6dc] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-[21px] overflow-x-clip overflow-y-auto top-[130px] w-[360px]" data-name="Frame">
      <Frame2 />
      <p className="[word-break:break-word] font-['Montaga:Regular',sans-serif] leading-[1.28] min-w-full not-italic relative shrink-0 text-[#232327] text-[22px] w-[min-content]">Volunteer at an Animal Rescue or Shelter</p>
      <Frame3 />
      <Frame6 />
      <p className="[word-break:break-word] font-['Montaga:Regular',sans-serif] leading-[1.28] min-w-full not-italic relative shrink-0 text-[#3a3a3e] text-[20px] w-[min-content]">About this challenge</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#4a4a4f] text-[16px] w-[min-content]">Spend an afternoon helping out at a local animal shelter — walking dogs, cleaning, or just keeping the animals company. A calm, low-pressure way to be around people while doing something that matters.</p>
      <p className="[word-break:break-word] font-['Montaga:Regular',sans-serif] leading-[1.28] min-w-full not-italic relative shrink-0 text-[#3a3a3e] text-[20px] w-[min-content]">{`What you'll do`}</p>
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#4a4a4f] text-[15px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[1.45] mb-0">{`•  Find a shelter near you and check drop-in hours`}</p>
        <p className="leading-[1.45] mb-0">{`•  Introduce yourself — tell them you'd like to help`}</p>
        <p className="leading-[1.45]">{`•  Stay for as long as feels comfortable`}</p>
      </div>
      <Frame7 />
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
          <path d={svgPaths.p21f49180} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
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
        <g clipPath="url(#clip0_2_378)" id="settings">
          <path d={svgPaths.p285beb80} fill="var(--fill-0, #0F345E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_378">
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

export default function ChallengeDescription() {
  return (
    <div className="bg-gradient-to-b from-[#e2edf0] relative size-full to-[#e9f3f7] to-[72%]" data-name="Challenge description">
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
      <Frame />
      <p className="[word-break:break-word] absolute font-['Montaga:Regular',sans-serif] leading-[1.28] left-[70px] not-italic text-[#0f3460] text-[24px] top-[70px] w-[106px]">Challenge</p>
      <Frame1 />
      <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex gap-[20px] items-center left-[4px] overflow-clip px-[24px] py-[12px] rounded-[40px] top-[769px]" data-name="menu">
        <Dashboard />
        <Calendar />
        <Add />
        <Settings />
        <Profile />
      </div>
    </div>
  );
}