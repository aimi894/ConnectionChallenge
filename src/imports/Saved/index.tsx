import svgPaths from "./svg-wd0w6u4f4d";

function Frame1() {
  return (
    <div className="bg-[#eafaef] relative rounded-[34px] shrink-0 size-[64px]" data-name="Frame">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.35] not-italic relative shrink-0 text-[#3aa25a] text-[30px] w-[27px]">✓</p>
      </div>
      <div aria-hidden className="absolute border-2 border-[#3aa25a] border-solid inset-0 pointer-events-none rounded-[34px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[150px] items-center left-[44px] overflow-clip top-[250px] w-[314px]" data-name="Frame">
      <Frame1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.35] min-w-full not-italic relative shrink-0 text-[#777a89] text-[17px] text-center w-[min-content]">Reflection saved</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.35] min-w-full not-italic relative shrink-0 text-[#4a4a4a] text-[12.5px] text-center w-[min-content]">{`Nice — that's another real-world win!`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.35] min-w-px not-italic overflow-clip relative text-[#777a89]" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[12.5px] w-[134px]">Saved as ‘Community’</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[11.5px] w-[139px]">{`It's now on your calendar.`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(226,237,240,0.2)] content-stretch flex gap-[10px] items-center left-[73px] overflow-clip p-[14px] rounded-[10px] top-[416px] w-[282px]" data-name="Frame">
      <div className="relative shrink-0 size-[14px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
          <circle cx="7" cy="7" fill="var(--fill-0, #3AA25A)" id="Ellipse" r="7" />
        </svg>
      </div>
      <Frame3 />
    </div>
  );
}

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
          <path d={svgPaths.p53eb700} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="bg-[#0f345e] content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-[180px] shrink-0" data-name="Dashboard">
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
    <div className="content-stretch flex items-center overflow-clip p-[10px] relative rounded-[180px] shrink-0" data-name="calendar">
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

function Component() {
  return (
    <div className="absolute inset-[6.25%_10.67%_6.23%_10.67%]" data-name="28">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.5031" preserveAspectRatio="none" viewBox="0 0 15.7316 17.5031" width="15.7316">
        <g id="28">
          <path d={svgPaths.pedf2e00} fill="var(--fill-0, #777A89)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Fi() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="fi_2529521">
      <Component />
    </div>
  );
}

export default function Saved() {
  return (
    <div className="bg-gradient-to-b from-[#e2edf0] relative size-full to-[#e9f3f7] to-[72.117%]" data-name="Saved">
      <Frame />
      <Frame2 />
      <div className="absolute bg-[#0f345e] content-stretch flex h-[48px] items-center justify-center left-[26px] overflow-clip px-[32px] py-[16px] rounded-[12px] top-[519px] w-[349px]" data-name="save button">
        <p className="[word-break:break-word] font-['Montaga:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">View in calendar</p>
      </div>
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
      <div className="absolute content-stretch flex items-center justify-between left-px px-[36px] py-[4px] top-[74px] w-[402px]" data-name="Top">
        <div className="overflow-clip relative shrink-0 size-[36px]" data-name="logo">
          <div className="absolute inset-[9.74%_16.54%_64.18%_16.66%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="9.38872" preserveAspectRatio="none" viewBox="0 0 24.049 9.38872" width="24.049">
              <path d={svgPaths.p23c3f80} fill="var(--fill-0, #777A89)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[24.21%_16.98%_44.29%_17.1%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="11.3381" preserveAspectRatio="none" viewBox="0 0 23.734 11.3381" width="23.734">
              <path d={svgPaths.p1620ef80} fill="var(--fill-0, #777A89)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[44.4%_16.98%_10.26%_17.1%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="16.3211" preserveAspectRatio="none" viewBox="0 0 23.733 16.3211" width="23.733">
              <path d={svgPaths.p2338a00} fill="var(--fill-0, #777A89)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[360px] shrink-0 size-[36px]" data-name="notification">
          <Fi />
        </div>
      </div>
    </div>
  );
}