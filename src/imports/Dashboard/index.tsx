import svgPaths from "./svg-k27jgf6srs";
import imgProfilePictture from "./e35514a783904bacf57b02cb3043f3427ff5ba78.png";

function HiText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Montaga:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 w-[197px]" data-name="Hi text">
      <p className="leading-[normal] min-w-full relative shrink-0 text-[#0f345e] text-[24px] w-[min-content]">Hello Frannie,</p>
      <p className="leading-[24px] relative shrink-0 text-[#777a89] text-[20px] w-[197px]">Are you ready for your offline challenge?</p>
    </div>
  );
}

function PhotoAndWelcoming() {
  return (
    <div className="content-stretch flex items-center justify-between px-[28px] relative shrink-0 w-[400px]" data-name="Photo and welcoming">
      <HiText />
      <div className="relative rounded-[360px] shrink-0 size-[60px]" data-name="Profile pictture">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[360px]">
          <div className="absolute bg-white inset-0 rounded-[360px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[360px] size-full" src={imgProfilePictture} />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Title">
      <div className="relative shrink-0 size-[16px]" data-name="challenge status">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <circle cx="8" cy="8" fill="var(--fill-0, #EABD23)" id="challenge status" r="8" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Montaga:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#777a89] text-[16px] w-[317px]">Volunteer at an Animal Rescue or Shelter</p>
    </div>
  );
}

function Descrition() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Descrition">
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#4a4a4f] text-[16px] whitespace-nowrap">
        <p className="leading-[1.4] mb-0 whitespace-pre">{`Spend an afternoon helping out at a local `}</p>
        <p className="leading-[1.4] mb-0 whitespace-pre">{`animal shelter — walking dogs, cleaning, `}</p>
        <p className="leading-[1.4] whitespace-pre">{`or  just keeping the animals company.`}</p>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip py-[12px] relative shrink-0 w-[402px]" data-name="Intro_section">
      <PhotoAndWelcoming />
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-center p-[20px] relative rounded-[20px] shrink-0" data-name="challenge card">
        <Title />
        <Descrition />
        <button className="content-stretch cursor-pointer flex gap-[8px] items-center px-[14px] py-[8px] relative rounded-[20px] shrink-0" data-name="Status Dropdown">
          <div aria-hidden className="absolute border border-[#eabd23] border-solid inset-0 pointer-events-none rounded-[20px]" />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#eabd23] text-[13px] text-left whitespace-nowrap">In Progress</p>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#e8973a] text-[10px] text-left whitespace-nowrap">▾</p>
        </button>
      </div>
    </div>
  );
}

function ProgressTitle() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[28px] py-[8px] relative shrink-0 w-full" data-name="Progress Title">
      <p className="[word-break:break-word] font-['Montaga:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4a4a] text-[20px] whitespace-nowrap">Your progress</p>
    </div>
  );
}

function ProgressCards() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[16px] items-center justify-center leading-[1.32] not-italic overflow-clip px-[24px] relative shrink-0 w-full whitespace-nowrap" data-name="progress cards">
      <div className="bg-white content-stretch flex flex-col gap-[4px] h-[68px] items-center justify-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-[112px]" data-name="mini-card">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#4a4a4a] text-[20px]">12</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b6b70] text-[10px]">Done</p>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[4px] h-[68px] items-center justify-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-[112px]" data-name="mini-card">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#4a4a4a] text-[20px]">5</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b6b70] text-[10px]">this month</p>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[4px] h-[68px] items-center justify-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-[112px]" data-name="mini-card">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#232327] text-[20px]">3</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b6b70] text-[10px]">streak weeks</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[70px] overflow-clip relative shrink-0 w-full" data-name="Frame">
      <div className="absolute bg-[#3aa25a] h-[60px] left-[30px] rounded-[3px] top-[10px] w-[30px]" data-name="Rectangle" />
      <div className="absolute bg-[#3b82c4] h-[40px] left-[84px] rounded-[3px] top-[30px] w-[30px]" data-name="Rectangle" />
      <div className="absolute bg-[#d6379b] h-[26px] left-[138px] rounded-[3px] top-[44px] w-[30px]" data-name="Rectangle" />
      <div className="absolute bg-[#e8973a] h-[48px] left-[192px] rounded-[3px] top-[22px] w-[30px]" data-name="Rectangle" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[7px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="7" preserveAspectRatio="none" viewBox="0 0 7 7" width="7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #3AA25A)" id="Ellipse" r="3.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.32] not-italic relative shrink-0 text-[#232327] text-[9px] w-[49px]">Community</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[7px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="7" preserveAspectRatio="none" viewBox="0 0 7 7" width="7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #3B82C4)" id="Ellipse" r="3.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.32] not-italic relative shrink-0 text-[#232327] text-[9px] w-[26px]">Social</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[7px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="7" preserveAspectRatio="none" viewBox="0 0 7 7" width="7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #D6379B)" id="Ellipse" r="3.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.32] not-italic relative shrink-0 text-[#232327] text-[9px] w-[19px]">Solo</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[7px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="7" preserveAspectRatio="none" viewBox="0 0 7 7" width="7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #E8973A)" id="Ellipse" r="3.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.32] not-italic relative shrink-0 text-[#232327] text-[9px] w-[35px]">Outdoor</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function YourProgress() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] h-[141px] items-start overflow-clip p-[10px] relative rounded-[10px] shrink-0 w-full" data-name="Your Progress">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.32] not-italic relative shrink-0 text-[#4a4a4a] text-[12px] w-[124px]">Past activity by type</p>
      <Frame />
      <Frame1 />
    </div>
  );
}

function ProgressCharts() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-full" data-name="Progress charts">
      <YourProgress />
    </div>
  );
}

function Progress() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] relative shrink-0 w-full" data-name="Progress">
      <ProgressTitle />
      <ProgressCards />
      <ProgressCharts />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-center px-[28px] py-[8px] relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Montaga:Regular',sans-serif] leading-[1.32] not-italic relative shrink-0 text-[#4a4a4a] text-[20px] whitespace-nowrap">Suggested for you</p>
    </div>
  );
}

function ColourCode() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="colour code">
      <svg className="absolute block inset-0 size-full" fill="none" height="42" preserveAspectRatio="none" viewBox="0 0 42 42" width="42">
        <g id="colour code">
          <rect fill="var(--fill-0, #E2EDF0)" height="42" rx="8" width="42" />
          <circle cx="21" cy="21" fill="var(--fill-0, #E8973A)" id="Ellipse" r="5" />
        </g>
      </svg>
    </div>
  );
}

function ActivityTitle() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.32] min-w-px not-italic overflow-clip relative text-[12px]" data-name="activity title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#777a89] w-[145px]">Beginner tennis meetup</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#4a4a4a] w-[164px]">Sat 10:00 AM · in your area</p>
    </div>
  );
}

function ColourCode1() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="colour code">
      <svg className="absolute block inset-0 size-full" fill="none" height="42" preserveAspectRatio="none" viewBox="0 0 42 42" width="42">
        <g id="colour code">
          <rect fill="var(--fill-0, #E2EDF0)" height="42" rx="8" width="42" />
          <circle cx="21" cy="21" fill="var(--fill-0, #3B82C4)" id="Ellipse" r="5" />
        </g>
      </svg>
    </div>
  );
}

function ActivityTitle1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.32] min-w-px not-italic overflow-clip relative" data-name="activity title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#777a89] text-[12.5px] w-[145px]">Community book club</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b6b70] text-[12px] w-[164px]">Thu 6:00 PM · 0.4 mi away</p>
    </div>
  );
}

function Activities1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative shrink-0 w-full" data-name="Activities">
      <div className="bg-white content-stretch flex gap-[10px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-[362px]" data-name="activity">
        <ColourCode />
        <ActivityTitle />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.32] not-italic relative shrink-0 text-[#6b6b70] text-[18px] w-[7px]">›</p>
      </div>
      <div className="bg-white content-stretch flex gap-[10px] items-center overflow-clip p-[12px] relative rounded-[10px] shrink-0 w-[362px]" data-name="activity">
        <ColourCode1 />
        <ActivityTitle1 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.32] not-italic relative shrink-0 text-[#6b6b70] text-[18px] w-[7px]">›</p>
      </div>
    </div>
  );
}

function Activities() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[294px] items-start pb-[44px] relative shrink-0 w-full" data-name="Activities">
      <Title1 />
      <Activities1 />
    </div>
  );
}

function DashboardContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[963px] items-start left-0 top-[134px] w-[404px]" data-name="dashboard content">
      <IntroSection />
      <Progress />
      <Activities />
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

function Dashboard2() {
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

function Dashboard1() {
  return (
    <div className="bg-[#0f345e] content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-[180px] shrink-0" data-name="Dashboard">
      <Dashboard2 />
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

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-b from-[#e2edf0] relative size-full to-[#e9f3f7] to-[72.117%]" data-name="Dashboard">
      <DashboardContent />
      <div className="absolute content-stretch flex items-center justify-between left-0 px-[36px] py-[4px] top-[74px] w-[402px]" data-name="Top">
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
        <Dashboard1 />
        <Calendar />
        <Add />
        <Settings />
        <Profile />
      </div>
    </div>
  );
}