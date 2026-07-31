import svgPaths from "./svg-i3oho3x1e2";
import imgFrame from "./0872913e7dabd4ed519c0061d3a69dda3e94ec84.png";

function GoBackVector() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="go back vector">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="go back vector">
          <path d={svgPaths.p1c869300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 overflow-clip px-[24px] py-[12px] top-[58px] w-[402px]" data-name="Frame">
      <div className="bg-[rgba(212,212,216,0.54)] content-stretch flex items-center opacity-88 p-[8px] relative rounded-[50px] shrink-0 w-[40px]" data-name="go back button">
        <GoBackVector />
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Montaga:Regular',sans-serif] leading-[1.35] min-w-px not-italic relative text-[#0f3460] text-[20px]">Sat · Jul 25</p>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.35] not-italic relative shrink-0 text-[#3b82c4] text-[16px] w-[36px]">Edit</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#eafaef] h-[28px] relative rounded-[12px] shrink-0 w-[80px]" data-name="Frame">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.35] not-italic relative shrink-0 text-[#2f8f52] text-[11px] w-[59px]">Completed</p>
      </div>
      <div aria-hidden className="absolute border border-[#3aa25a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.35] min-w-px not-italic relative text-[#4a4a4a] text-[14px]">Animal shelter</p>
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-start p-[12px] relative size-full">
          <Frame3 />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.35] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[135px]">Community · Easy</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex h-[73px] items-center overflow-clip py-[12px] relative rounded-[10px] shrink-0 w-full" data-name="Frame">
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[156px] pointer-events-none relative rounded-[8px] shrink-0 w-[354px]" data-name="Frame">
      <div aria-hidden className="absolute inset-0 rounded-[8px]">
        <div className="absolute bg-[#eef2f6] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgFrame} />
      </div>
      <div aria-hidden className="absolute border border-[#cdcdd2] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] leading-[1.35] min-w-full not-italic relative shrink-0 text-[#232327] text-[16px] w-[min-content]">Photo</p>
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[17px] top-[135px] w-[354px]">
      <Frame1 />
      <Frame6 />
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="question">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[1.35] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[363px]">What made this experience memorable?</p>
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[#eaeaea] relative rounded-[6px] shrink-0 w-full" data-name="Input field">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.35] not-italic relative shrink-0 text-[#0f345e] text-[14px] w-[169px]">Interacting with pets</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[0.2px] border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Question1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[4px] relative shrink-0 w-full" data-name="question 1">
      <Question />
      <InputField />
    </div>
  );
}

function Question3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Question">
      <div className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[43px] leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[0px] w-[344px]">
        <p className="leading-[1.35] mb-0 text-[16px]">Did you do this with anyone?</p>
        <p className="leading-[1.35] text-[16px]">If not, did you meet anyone new by doing it?</p>
      </div>
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-[#f7e1d7] h-[80px] relative rounded-[6px] shrink-0 w-full" data-name="Input field">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.35] not-italic relative shrink-0 text-[#0f345e] text-[14px] w-full">I was the only one volunteer there. So I went there by myself and mostly talked with people working there</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[0.2px] border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Question2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[4px] relative shrink-0 w-full" data-name="question 2">
      <Question3 />
      <InputField1 />
    </div>
  );
}

function Question5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="question">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[65px] leading-[1.35] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[363px]">
        What was your mood like before this experience?
        <br aria-hidden />
        What was it like directly after?
      </p>
    </div>
  );
}

function InputFiels() {
  return (
    <div className="bg-[#d4e4e6] opacity-88 relative rounded-[6px] shrink-0 w-[363px]" data-name="Input fiels">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.35] not-italic relative shrink-0 text-[#0f345e] text-[14px] w-[336px]">{`I felt unsure as I got into scrolling loop again and felt that I wasted my time already. But after helping there, at rescue shelter, I felt energetic, and ready to help out `}</p>
      </div>
      <div aria-hidden className="absolute border-[0.2px] border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Question4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[4px] relative shrink-0 w-full" data-name="question 3">
      <Question5 />
      <InputFiels />
    </div>
  );
}

function QuestionsList() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[20px] top-[437px] w-[363px]" data-name="questions list 12">
      <Question1 />
      <Question2 />
      <Question4 />
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

export default function Reflection() {
  return (
    <div className="bg-gradient-to-b from-[#e2edf0] relative size-full to-[#e9f3f7] to-[72.117%]" data-name="Reflection">
      <Frame />
      <Frame7 />
      <QuestionsList />
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
    </div>
  );
}