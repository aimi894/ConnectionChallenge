import svgPaths from "./svg-9gddwww99i";
import img90344071 from "./001dc6405df44cddc9e05282b9f8a3d607b0e8e8.png";

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

function Challenges() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[223px]" data-name="Challenges">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic opacity-88 relative shrink-0 text-[#777a89] text-[0px] text-center w-[225px]">
        <span className="font-['Montaga:Regular',sans-serif] leading-[1.35] text-[#0f3460] text-[20px]">
          Volunteer at an
          <br aria-hidden />
          Animal Rescue or Shelte
        </span>
        <span className="leading-[1.35] text-[15px]">{`r `}</span>
      </p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-0 px-[24px] top-[77px] w-[402px]" data-name="navbar">
      <div className="bg-[rgba(212,212,216,0.54)] content-stretch flex items-center justify-center opacity-88 p-[8px] relative rounded-[50px] shrink-0" data-name="go back button">
        <GoBackVector />
      </div>
      <Challenges />
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-white h-[88px] relative rounded-[6px] shrink-0 w-full" data-name="Input field">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.35] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[169px]">Interacting with pets</p>
        </div>
      </div>
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start py-[4px] relative shrink-0 w-full" data-name="question 1">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[33px] leading-[1.35] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-full">What made this experience memorable?</p>
      <InputField />
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-white h-[88px] relative rounded-[6px] shrink-0 w-full" data-name="Input field">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.35] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-full">I was the only one volunteer there. So I went there by myself and mostly talked with people working there</p>
        </div>
      </div>
    </div>
  );
}

function Question1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start py-[4px] relative shrink-0 w-full" data-name="question 2">
      <div className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[48px] leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[0px] w-full">
        <p className="leading-[1.35] mb-0 text-[16px]">Did you do this with anyone?</p>
        <p className="leading-[1.35] text-[16px]">If not, did you meet anyone new by doing it?</p>
      </div>
      <InputField1 />
    </div>
  );
}

function InputFiels() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[88px] items-start opacity-88 overflow-clip p-[10px] relative rounded-[6px] shrink-0 w-[363px]" data-name="Input fiels">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.35] not-italic relative shrink-0 text-[#777a89] text-[14px] w-[208px]">Type your answer…</p>
    </div>
  );
}

function Question2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="question 3">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[65px] leading-[1.35] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-[363px]">
        What was your mood like before this experience?
        <br aria-hidden />
        What was it like directly after?
      </p>
      <InputFiels />
    </div>
  );
}

function InputFiels1() {
  return (
    <div className="bg-white h-[88px] relative rounded-[6px] shrink-0 w-full" data-name="Input fiels">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.35] not-italic relative shrink-0 text-[#777a89] text-[14px] w-[134px]">Type your answer…</p>
        </div>
      </div>
    </div>
  );
}

function Question3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip py-[4px] relative shrink-0 w-full" data-name="question 4">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[50px] leading-[1.35] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-full">What is one thing that you learned about yourself through living this experience?</p>
      <InputFiels1 />
    </div>
  );
}

function Scale() {
  return (
    <div className="absolute bg-[#6799b5] h-[9px] left-0 overflow-clip right-0 rounded-[20px] top-[21px]" data-name="scale">
      <div className="absolute bg-[#eabd23] h-[9px] left-0 rounded-[20px] top-0 w-[213px]" />
    </div>
  );
}

function Numbers() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex font-['Montaga:Regular',sans-serif] h-[22px] items-center justify-between leading-[1.4] left-0 not-italic right-0 text-[#4a4a4a] text-[16px] top-[52px] whitespace-nowrap" data-name="numbers">
      <p className="relative shrink-0">1</p>
      <p className="relative shrink-0">5</p>
    </div>
  );
}

function Question5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[147px] items-start overflow-clip py-[4px] relative shrink-0 w-full" data-name="question 8">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[43px] leading-[1.35] min-w-full not-italic relative shrink-0 text-[#232327] text-[16px] w-[min-content]">On scale 1 to 5 how much did it reinforce your confidence</p>
      <div className="h-[52px] relative shrink-0 w-[353px]" data-name="scale">
        <Scale />
        <div className="absolute bg-[#6799b5] content-stretch flex items-center justify-center left-[198px] overflow-clip p-[4px] rounded-[180px] size-[24px] top-[14px]" data-name="drag butoton">
          <div className="relative shrink-0 size-[16px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
              <circle cx="8" cy="8" fill="var(--fill-0, #EABD23)" id="Ellipse 10" r="8" />
            </svg>
          </div>
        </div>
        <Numbers />
      </div>
    </div>
  );
}

function InputFiels2() {
  return (
    <div className="bg-white h-[88px] relative rounded-[6px] shrink-0 w-full" data-name="Input fiels">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.35] not-italic relative shrink-0 text-[#777a89] text-[14px] w-[134px]">Type your answer…</p>
        </div>
      </div>
    </div>
  );
}

function Question4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip py-[4px] relative shrink-0 w-full" data-name="question 5">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[21px] leading-[1.35] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-full">Would you do this again?</p>
      <InputFiels2 />
    </div>
  );
}

function ListOfQuestions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[1000px] items-start pb-[12px] pt-[8px] relative shrink-0 w-[364px]" data-name="List of questions">
      <Question />
      <Question1 />
      <Question2 />
      <Question3 />
      <Question5 />
      <Question4 />
    </div>
  );
}

function X() {
  return (
    <div className="absolute inset-[10%_18.12%]" data-name="_x35_6">
      <svg className="absolute block inset-0 size-full" fill="none" height="28.8" preserveAspectRatio="none" viewBox="0 0 22.956 28.8" width="22.956">
        <g id="_x35_6">
          <path d={svgPaths.p2e786ec0} fill="var(--fill-0, #4A4A4A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FileUpload() {
  return (
    <div className="overflow-clip relative shrink-0 size-[36px]" data-name="file upload">
      <X />
    </div>
  );
}

function Upload() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center py-[12px] relative shrink-0" data-name="upload">
      <FileUpload />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.35] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[178px]">Choose a file or document</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#4a4a4a] text-[12px] w-[193px]">JPEG, PNG, and PDF up to 50 MB.</p>
    </div>
  );
}

function BrowseFileButton() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-[161px]" data-name="Browse file button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">Browse File</p>
      </div>
      <div aria-hidden className="absolute border border-[#0f345e] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Photo() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[46px]" data-name="photo">
      <div className="relative shrink-0 size-[46px]" data-name="9034407 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img90344071} />
      </div>
    </div>
  );
}

function PetsTitle() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="pets title">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#4a4a4a] text-[12px] w-[254px]">pets_9</p>
    </div>
  );
}

function PetsTitle1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[50px]" data-name="pets title">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#777a89] text-[12px] w-[52px]">1.32 MB</p>
    </div>
  );
}

function Completed1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="completed">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.9999" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999" width="19.9999">
        <g id="å¾å±_x0020_1">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p13641980} fill="var(--fill-0, #3AA25A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Completed() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Completed">
      <Completed1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#777a89] text-[12px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Weight() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="weight">
      <PetsTitle1 />
      <Completed />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="info">
      <PetsTitle />
      <Weight />
    </div>
  );
}

function Questions() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1497px] items-center left-[5px] overflow-x-auto overflow-y-clip pb-[80px] px-[20px] top-[215px] w-[397px]" data-name="Questions">
      <ListOfQuestions />
      <div className="bg-[#f5f6f4] h-[195px] relative rounded-[8px] shrink-0 w-[357px]" data-name="Add Photo">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip px-[12px] py-[16px] relative rounded-[inherit] size-full">
          <Upload />
          <BrowseFileButton />
        </div>
        <div aria-hidden className="absolute border-[#0f345e] border-[1.5px] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="h-[86px] relative rounded-[6px] shrink-0 w-[357px]" data-name="Photo uploaded">
        <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
          <Photo />
          <Info />
          <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#777a89] text-[13px] w-[13px]">✕</p>
        </div>
        <div aria-hidden className="absolute border-[#0f345e] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-[#0f345e] content-stretch flex h-[54px] items-center justify-center overflow-clip px-[32px] py-[16px] relative rounded-[12px] shrink-0 w-[349px]" data-name="save button">
        <p className="[word-break:break-word] font-['Montaga:Regular',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Save reflection</p>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center py-[4px] relative shrink-0" data-name="Status">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.35] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] text-center whitespace-nowrap">Status:</p>
    </div>
  );
}

function Completed2() {
  return (
    <div className="h-[36px] relative rounded-[20px] shrink-0 w-[112px]" data-name="Completed">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.35] not-italic relative shrink-0 text-[#3aa25a] text-[12px] text-center whitespace-nowrap">Completed</p>
      </div>
      <div aria-hidden className="absolute border border-[#3aa25a] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[-1px] px-[24px] py-[12px] top-[150px] w-[402px]" data-name="Status bar">
      <Status />
      <Completed2 />
    </div>
  );
}

function Dashboard1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="dashboard">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="dashboard">
          <path d={svgPaths.p53eb700} fill="var(--fill-0, white)" id="Vector" />
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

export default function ReflectionFillOutForms() {
  return (
    <div className="bg-gradient-to-b from-[#e2edf0] relative size-full to-[#e9f3f7] to-[72.117%]" data-name="Reflection fill out forms">
      <Navbar />
      <Questions />
      <StatusBar />
      <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex gap-[20px] items-center left-[4px] overflow-clip px-[24px] py-[12px] rounded-[40px] top-[769px]" data-name="menu">
        <Dashboard />
        <Calendar />
        <Add />
        <Settings />
        <Profile />
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
    </div>
  );
}