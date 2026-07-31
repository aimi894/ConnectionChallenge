import svgPaths from "./svg-yfe27240ac";
type MenuProps = {
  className?: string;
  property1?: "dashboard" | "calendar" | "Add";
};

export default function Menu({ className, property1 = "dashboard" }: MenuProps) {
  const isAdd = property1 === "Add";
  const isCalendar = property1 === "calendar";
  const isCalendarOrAdd = ["calendar", "Add"].includes(property1);
  return (
    <div className={className || "bg-[rgba(0,0,0,0)] content-stretch flex gap-[20px] items-center overflow-clip px-[24px] py-[12px] relative rounded-[40px]"}>
      <div className={`content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-[180px] shrink-0 ${isCalendarOrAdd ? "" : "bg-[#0f345e]"}`} data-name="Dashboard">
        <div className="relative shrink-0 size-[32px]" data-name="dashboard">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <g id="dashboard">
              <path d={svgPaths.p53eb700} fill={isCalendarOrAdd ? "var(--fill-0, #0F345E)" : "var(--fill-0, white)"} fillOpacity={property1 === "dashboard" ? "0.6" : undefined} id="Vector" />
            </g>
          </svg>
        </div>
      </div>
      <div className={`content-stretch flex overflow-clip relative rounded-[180px] shrink-0 ${isAdd ? "items-end justify-center p-[12px]" : isCalendar ? "bg-[#0f345e] items-end justify-center p-[12px]" : "items-center p-[10px]"}`} data-name="calendar">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="calendar">
          <div className="absolute inset-[8.33%]" data-name="Layer 93">
            <svg className="absolute block inset-0 size-full" fill="none" height="26.6667" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667" width="26.6667">
              <g id="Layer 93">
                <path d={svgPaths.peef7880} fill={isCalendar ? "var(--fill-0, white)" : "var(--fill-0, #0F345E)"} fillOpacity={isCalendar ? "0.6" : undefined} id="Vector" />
                <path d={svgPaths.pc43dd80} fill={isCalendar ? "var(--fill-0, white)" : "var(--fill-0, #0F345E)"} fillOpacity={isCalendar ? "0.6" : undefined} id="Vector_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={`content-stretch flex items-center overflow-clip p-[10px] relative rounded-[180px] shrink-0 ${isAdd ? "bg-[#0f345e]" : ""}`} data-name="Add">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="add">
          <div className="absolute inset-[4.17%]" data-name="Layer 2">
            <svg className="absolute block inset-0 size-full" fill="none" height="29.3333" preserveAspectRatio="none" viewBox="0 0 29.3333 29.3333" width="29.3333">
              <g id="Layer 2">
                <path d={svgPaths.p21f49180} fill={isAdd ? "var(--fill-0, white)" : "var(--fill-0, #0F345E)"} fillOpacity={isAdd ? "0.6" : undefined} id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center overflow-clip p-[10px] relative rounded-[180px] shrink-0" data-name="Settings">
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
      </div>
      <div className="content-stretch flex items-center overflow-clip p-[10px] relative rounded-[180px] shrink-0" data-name="Profile">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="profile">
          <div className="absolute contents inset-[0_5.24%]" data-name="Group">
            <div className="absolute contents inset-[0_5.24%]" data-name="Group">
              <div className="absolute inset-[0_5.24%]" data-name="Group">
                <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 28.6439 32" width="28.6439">
                  <g id="Group">
                    <path d={svgPaths.p19705980} fill="var(--fill-0, #0F345E)" id="Vector" />
                    <path d={svgPaths.p31786780} fill="var(--fill-0, #0F345E)" id="Vector_2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}