import { useLayoutEffect, useRef, useState } from "react";

import Menu from "../imports/Menu/index";
import StatusDropdown from "../imports/StatusDropdown/index";
import TypeSelect from "../imports/TypeSelect/index";
import DifficultySelect from "../imports/DifficultySelect/index";

import DashboardScreen from "../imports/Dashboard-3/index";
import ChallengeDescriptionScreen from "../imports/ChallengeDescription-1/index";
import NewChallengeScreen from "../imports/NewChallenge-1/index";
import WriteYourOwnChallengeScreen from "../imports/WriteYourOwnChallenge-1/index";
import ReflectionsScreen from "../imports/Reflections-4/index";
import ReflectionFillOutFormsScreen from "../imports/ReflectionFillOutForms-2/index";
import SavedScreen from "../imports/Saved-2/index";
import ReflectionScreen from "../imports/Reflection-2/index";
import EditReflectionScreen from "../imports/EditReflection-3/index";
import CalendarScreen from "../imports/Calendar-2/index";
import CalendarJuneScreen from "../imports/CalendarJune-1/index";
import CalendarAugustScreen from "../imports/CalendarAugust-1/index";

type Screen =
  | "dashboard"
  | "challenge"
  | "new-challenge"
  | "write-own"
  | "reflections"
  | "reflection-form"
  | "saved"
  | "calendar-june"
  | "calendar"
  | "calendar-august"
  | "reflection"
  | "edit-reflection";

type Status = "In Progress" | "Completed" | "Cancelled";
type Category = "Community" | "Social" | "Solo" | "Outdoor";
type Difficulty = "Easy" | "Medium" | "Hard";
type OpenDropdown = "status" | "type" | "difficulty" | null;

type ReflectionFieldKey = "memorable" | "connection" | "mood" | "learning" | "again";

interface ReflectionFieldBounds {
  top: number;
  left: number;
  width: number;
  height: number;
}

const reflectionFieldConfig: Array<{ key: ReflectionFieldKey; label: string; placeholder: string }> = [
  { key: "memorable", label: "What made this experience memorable?", placeholder: "Type your answer…" },
  { key: "connection", label: "Did you do this with anyone?", placeholder: "Type your answer…" },
  { key: "mood", label: "What was your mood like before and after this experience?", placeholder: "Type your answer…" },
  { key: "learning", label: "What did you learn about yourself?", placeholder: "Type your answer…" },
  { key: "again", label: "Would you do this again?", placeholder: "Type your answer…" },
];

const filledReflectionDefaults: Record<ReflectionFieldKey, string> = {
  memorable: "Interacting with pets",
  connection: "I was the only one volunteer there. So I went there by myself and mostly talked with people working there",
  mood: "",
  learning: "",
  again: "",
};

interface HotspotProps {
  top: number;
  left: number;
  w: number;
  h: number;
  label: string;
  onClick: () => void;
  z?: number;
}

function Hotspot({ top, left, w, h, label, onClick, z = 10 }: HotspotProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="absolute cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f345e]"
      style={{ top, left, width: w, height: h, zIndex: z }}
      onClick={onClick}
    />
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("dashboard");
  const [status, setStatus] = useState<Status>("In Progress");
  const [category, setCategory] = useState<Category>("Community");
  const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
  const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null);
  const [hoveredStatus, setHoveredStatus] = useState<Status | null>(null);
  const [editScrollTop, setEditScrollTop] = useState(0);
  const [confidence, setConfidence] = useState(3.5);
  const [formScrollTop, setFormScrollTop] = useState(0);
  const [challengeScrollTop, setChallengeScrollTop] = useState(0);
  const prototypeRef = useRef<HTMLElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoRemoved, setPhotoRemoved] = useState(false);
  const [writeOwnScrollTop, setWriteOwnScrollTop] = useState(0);
  const [writeOwnFieldBounds, setWriteOwnFieldBounds] = useState<ReflectionFieldBounds[]>([]);
  const [writeOwnDraft, setWriteOwnDraft] = useState({ name: "", description: "" });
  const [reflectionFieldBounds, setReflectionFieldBounds] = useState<ReflectionFieldBounds[]>([]);
  const [reflectionAnswerTouched, setReflectionAnswerTouched] = useState<Record<ReflectionFieldKey, boolean>>({
    memorable: false,
    connection: false,
    mood: false,
    learning: false,
    again: false,
  });
  const [reflectionAnswers, setReflectionAnswers] = useState<Record<ReflectionFieldKey, string>>({
    memorable: "",
    connection: "",
    mood: "",
    learning: "",
    again: "",
  });
  const [editAnswers, setEditAnswers] = useState({
    memorable: "Interacting with pets",
    connection: "I was the only one volunteer there. So I went there by myself and mostly talked with people working there",
    mood: "Nervous before, but calm and kind of proud after.",
  });

  useLayoutEffect(() => {
    if (screen !== "reflections" && screen !== "reflection-form") {
      setReflectionFieldBounds([]);
      return;
    }

    const frame = prototypeRef.current;
    const questions = frame?.querySelector('[data-name="Questions"]');
    if (!frame || !questions) return;

    const frameRect = frame.getBoundingClientRect();
    const fields = Array.from(questions.querySelectorAll<HTMLElement>('[data-name="Input field"], [data-name="Input fiels"]'));
    setReflectionFieldBounds(fields.slice(0, reflectionFieldConfig.length).map((field) => {
      const rect = field.getBoundingClientRect();
      return { top: rect.top - frameRect.top, left: rect.left - frameRect.left, width: rect.width, height: rect.height };
    }));
  }, [screen, formScrollTop]);

  useLayoutEffect(() => {
    if (screen !== "write-own") {
      setWriteOwnFieldBounds([]);
      return;
    }

    const frame = prototypeRef.current;
    const root = frame?.querySelector<HTMLElement>('[data-name="Write your own challenge"]');
    if (!frame || !root) return;

    const frameRect = frame.getBoundingClientRect();
    const fieldPhrases = ["Name your challenge…", "Describe what you'll do and why it matters to you…"];
    const fields = fieldPhrases.map((phrase) => {
      const placeholder = Array.from(root.querySelectorAll("p")).find((paragraph) => paragraph.textContent?.trim() === phrase);
      return placeholder?.closest<HTMLElement>('[data-name="Frame"]');
    }).filter((field): field is HTMLElement => Boolean(field));

    setWriteOwnFieldBounds(fields.map((field) => {
      const rect = field.getBoundingClientRect();
      return { top: rect.top - frameRect.top, left: rect.left - frameRect.left, width: rect.width, height: rect.height };
    }));
  }, [screen, writeOwnScrollTop]);

  const go = (nextScreen: Screen) => {
    setScreen(nextScreen);
    setEditScrollTop(0);
    setFormScrollTop(0);
    setChallengeScrollTop(0);
    setWriteOwnScrollTop(0);
    setOpenDropdown(null);
    setHoveredStatus(null);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
    setHoveredStatus(null);
  };

  const statusDropdownState = (): Status | "Open" | "Open Hover In" | "Open Hover Completed" | "Open Hover Cancelled" => {
    if (openDropdown !== "status") return status;
    if (hoveredStatus === "In Progress") return "Open Hover In";
    if (hoveredStatus === "Completed") return "Open Hover Completed";
    if (hoveredStatus === "Cancelled") return "Open Hover Cancelled";
    return "Open";
  };

  const renderScreen = () => {
    switch (screen) {
      case "dashboard": return <DashboardScreen />;
      case "challenge": return <ChallengeDescriptionScreen />;
      case "new-challenge": return <NewChallengeScreen />;
      case "write-own": return <WriteYourOwnChallengeScreen />;
      case "reflections": return <ReflectionsScreen />;
      case "reflection-form": return <ReflectionFillOutFormsScreen />;
      case "saved": return <SavedScreen />;
      case "calendar-june": return <CalendarJuneScreen />;
      case "calendar": return <CalendarScreen />;
      case "calendar-august": return <CalendarAugustScreen />;
      case "reflection": return <ReflectionScreen />;
      case "edit-reflection": return <EditReflectionScreen />;
    }
  };

  const statusPosition = screen === "challenge"
    ? { top: 365 - challengeScrollTop, left: 246 }
    : screen === "reflections"
      ? { top: 150 - formScrollTop, left: 246 }
      : null;

  const menuState = screen === "calendar-june" || screen === "calendar" || screen === "calendar-august"
    ? "calendar"
    : screen === "new-challenge" || screen === "write-own"
      ? "Add"
      : "dashboard";

  return (
    <main className="min-h-screen bg-[#8fa8b8] p-6 flex items-center justify-center">
      <section
        aria-label="ConnectChallenge clickable prototype"
        className="relative h-[870px] w-[402px] overflow-hidden rounded-[44px] shadow-[0_0_0_2px_rgba(255,255,255,0.15),0_24px_64px_rgba(0,0,0,0.45)]"
      >
        <style>{`
          div[data-name="Dashboard"].size-full,
          div[data-name="Challenge description"].size-full,
          div[data-name="New challenge"].size-full,
          div[data-name="Write your own challenge"].size-full,
          div[data-name="Reflection"].size-full,
          div[data-name="Edit reflection"].size-full {
            overflow-x: hidden !important;
            overflow-y: auto !important;
            overscroll-behavior: contain;
            padding-bottom: 96px;
            scrollbar-width: none;
          }
          /* Hide Figma's decorative controls: the interactive overlays below replace them. */
          div[data-name="Dashboard"].size-full > [data-name="menu"],
          div[data-name="Challenge description"].size-full > [data-name="menu"],
          div[data-name="New challenge"].size-full > [data-name="menu"],
          div[data-name="Write your own challenge"].size-full > [data-name="menu"],
          div[data-name="Reflections"].size-full > [data-name="menu"],
          div[data-name="Reflection fill out forms"].size-full > [data-name="menu"],
          div[data-name="Saved"].size-full > [data-name="menu"],
          div[data-name="Calendar"].size-full > [data-name="menu"],
          div[data-name="Calendar June"].size-full > [data-name="menu"],
          div[data-name="Calendar August"].size-full > [data-name="menu"],
          div[data-name="Reflection"].size-full > [data-name="menu"],
          div[data-name="Edit reflection"].size-full > [data-name="menu"],
          div[data-name="Edit reflection"] [data-name="save button"],
          /* The imported status control belongs to the scrollable frame; the pinned app control replaces it. */
          [data-name="Status Dropdown"] {
            display: none !important;
          }
          /* Extra scroll room lets the final reflection answer clear the fixed navigation. */
          div[data-name="Reflection"].size-full::after,
          div[data-name="Edit reflection"].size-full::after {
            content: "";
            pointer-events: none;
            position: absolute;
            left: 0;
            top: calc(100% + 128px);
            height: 1px;
            width: 1px;
          }
          [data-name="question 3"] {
            scroll-margin-bottom: 132px;
          }
          /* Keep each confidence question in its form flow and replace only its static scale. */
          div[data-name="Reflections"] [data-name="question 7"] > [data-name="scale"],
          div[data-name="Reflection fill out forms"] [data-name="question 8"] > [data-name="scale"] {
            visibility: hidden !important;
          }
          .reflection-confidence-range {
            -webkit-appearance: none;
            appearance: none;
            cursor: pointer;
          }
          .reflection-confidence-range::-webkit-slider-runnable-track {
            height: 9px;
            border-radius: 999px;
            background: transparent;
          }
          .reflection-confidence-range::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            height: 24px;
            width: 24px;
            margin-top: -7.5px;
            border: 4px solid #6799b5;
            border-radius: 999px;
            background: #eabd23;
            box-shadow: 0 1px 3px rgba(15, 52, 94, 0.25);
          }
          .reflection-confidence-range::-moz-range-track {
            height: 9px;
            border-radius: 999px;
            background: transparent;
          }
          .reflection-confidence-range::-moz-range-thumb {
            height: 16px;
            width: 16px;
            border: 4px solid #6799b5;
            border-radius: 999px;
            background: #eabd23;
            box-shadow: 0 1px 3px rgba(15, 52, 94, 0.25);
          }
          [data-name="Questions"] {
            /* Keep the form above the fixed bottom menu and leave a clear finish area after Save reflection. */
            height: calc(100% - 302px) !important;
            overflow-x: hidden !important;
            overflow-y: auto !important;
            overscroll-behavior: contain;
            padding-bottom: 88px;
            scrollbar-width: none;
          }
          /* UX baseline: readable type, consistent field rhythm, and predictable card spacing. */
          [data-name="Questions"] [data-name^="question"] {
            gap: 12px !important;
          }
          [data-name="Questions"] [data-name^="question"] > p,
          [data-name="Questions"] [data-name^="question"] > div > p {
            line-height: 1.4 !important;
          }
          /* The imported paragraph marks are visual placeholders; real textareas are layered in the same bounds. */
          div[data-name="Reflections"] [data-name="Input field"] p,
          div[data-name="Reflections"] [data-name="Input fiels"] p,
          div[data-name="Reflection fill out forms"] [data-name="Input field"] p,
          div[data-name="Reflection fill out forms"] [data-name="Input fiels"] p {
            visibility: hidden !important;
          }
          div[data-name="Edit reflection"] [data-name="Input field"],
          div[data-name="Edit reflection"] [data-name="Input fiels"] {
            border: 1px solid #dfe4ea;
            border-radius: 8px;
            box-shadow: 0 1px 2px rgba(15, 52, 94, 0.04);
          }
          div[data-name="Edit reflection"] [data-name="Input field"] p,
          div[data-name="Edit reflection"] [data-name="Input fiels"] p {
            font-size: 15px !important;
            line-height: 1.45 !important;
          }
          div[data-name="Dashboard"].size-full::-webkit-scrollbar,
          div[data-name="Challenge description"].size-full::-webkit-scrollbar,
          div[data-name="New challenge"].size-full::-webkit-scrollbar,
          div[data-name="Write your own challenge"].size-full::-webkit-scrollbar,
          div[data-name="Reflection"].size-full::-webkit-scrollbar,
          div[data-name="Edit reflection"].size-full::-webkit-scrollbar,
          [data-name="Questions"]::-webkit-scrollbar { display: none; }
        `}</style>

        <div
          ref={prototypeRef}
          className="absolute inset-0"
          onScrollCapture={(event) => {
            const target = event.target as HTMLElement;
            if (screen === "edit-reflection" && target.dataset.name === "Edit reflection") {
              setEditScrollTop(target.scrollTop);
            }
            if (screen === "challenge" && target.dataset.name === "Challenge description") {
              setChallengeScrollTop(target.scrollTop);
            }
            if (screen === "write-own" && target.dataset.name === "Write your own challenge") {
              setWriteOwnScrollTop(target.scrollTop);
            }
            if ((screen === "reflections" || screen === "reflection-form") && target.dataset.name === "Questions") {
              setFormScrollTop(target.scrollTop);
            }
          }}
          onClick={(event) => {
            const target = event.target as HTMLElement;
            if ((screen === "reflections" || screen === "reflection-form") && target.closest('[data-name="save button"]')) go("saved");
          }}
        >
          {renderScreen()}
        </div>

        {(screen === "reflections" || screen === "reflection-form") && reflectionFieldBounds.map((bounds, index) => {
          const field = reflectionFieldConfig[index];
          const defaultValue = screen === "reflection-form" ? filledReflectionDefaults[field.key] : "";
          const value = reflectionAnswerTouched[field.key] ? reflectionAnswers[field.key] : defaultValue;
          return (
            <textarea
              key={`${screen}-${field.key}`}
              aria-label={field.label}
              placeholder={field.placeholder}
              value={value}
              onChange={(event) => {
                setReflectionAnswerTouched((touched) => ({ ...touched, [field.key]: true }));
                setReflectionAnswers((answers) => ({ ...answers, [field.key]: event.target.value }));
              }}
              onClick={(event) => event.stopPropagation()}
              className="absolute z-[25] resize-none rounded-[6px] border border-transparent bg-transparent p-[10px] font-['Inter:Regular',sans-serif] text-[14px] leading-[1.4] text-[#4a4a4a] outline-none transition-colors placeholder:text-[#777a89] focus:border-[#6799b5] focus:bg-white/55 focus:ring-2 focus:ring-[#6799b5]/25"
              style={{ top: bounds.top, left: bounds.left, width: bounds.width, height: bounds.height }}
            />
          );
        })}

        {statusPosition && (
          <div className="absolute pointer-events-auto" style={{ top: statusPosition.top, left: statusPosition.left, zIndex: openDropdown === "status" ? 60 : 50, position: "absolute" }}>
            <StatusDropdown state={statusDropdownState() as never} />
            {openDropdown !== "status" && (
              <button type="button" aria-label="Change challenge status" className="absolute inset-0 cursor-pointer" onClick={(event) => { event.stopPropagation(); setOpenDropdown("status"); }} />
            )}
            {openDropdown === "status" && (["In Progress", "Completed", "Cancelled"] as Status[]).map((option, index) => (
              <button
                key={option}
                type="button"
                aria-label={`Select ${option}`}
                className="absolute cursor-pointer"
                style={{ top: 44 + index * 35, left: 0, width: 200, height: 33 }}
                onMouseEnter={() => setHoveredStatus(option)}
                onMouseLeave={() => setHoveredStatus(null)}
                onClick={(event) => { event.stopPropagation(); setStatus(option); closeDropdowns(); }}
              />
            ))}
          </div>
        )}

        {screen === "write-own" && (
          <>
            <div className="absolute" style={{ top: 165, left: 29, zIndex: openDropdown === "type" ? 51 : 21 }}>
              <TypeSelect state={openDropdown === "type" ? "Open" : category} />
              {openDropdown !== "type" && <button type="button" aria-label="Choose challenge category" className="absolute inset-0 cursor-pointer" onClick={(event) => { event.stopPropagation(); setOpenDropdown("type"); }} />}
              {openDropdown === "type" && (["Community", "Social", "Solo", "Outdoor"] as Category[]).map((option, index) => (
                <button key={option} type="button" aria-label={`Select ${option}`} className="absolute cursor-pointer" style={{ top: 56 + index * 35, left: 0, width: 344, height: 33 }} onClick={(event) => { event.stopPropagation(); setCategory(option); closeDropdowns(); }} />
              ))}
            </div>
            <div className="absolute" style={{ top: 268, left: 29, zIndex: openDropdown === "difficulty" ? 51 : 21 }}>
              <DifficultySelect state={openDropdown === "difficulty" ? "Open" : difficulty} />
              {openDropdown !== "difficulty" && <button type="button" aria-label="Choose challenge difficulty" className="absolute inset-0 cursor-pointer" onClick={(event) => { event.stopPropagation(); setOpenDropdown("difficulty"); }} />}
              {openDropdown === "difficulty" && (["Easy", "Medium", "Hard"] as Difficulty[]).map((option, index) => (
                <button key={option} type="button" aria-label={`Select ${option}`} className="absolute cursor-pointer" style={{ top: 56 + index * 35, left: 0, width: 344, height: 33 }} onClick={(event) => { event.stopPropagation(); setDifficulty(option); closeDropdowns(); }} />
              ))}
            </div>
          </>
        )}

        {screen === "write-own" && writeOwnFieldBounds.map((bounds, index) => {
          const isName = index === 0;
          const key = isName ? "name" : "description";
          return (
            <textarea
              key={key}
              aria-label={isName ? "Challenge name" : "Challenge description"}
              placeholder={isName ? "Name your challenge…" : "Describe what you'll do and why it matters to you…"}
              value={writeOwnDraft[key]}
              onChange={(event) => setWriteOwnDraft((draft) => ({ ...draft, [key]: event.target.value }))}
              onClick={(event) => event.stopPropagation()}
              className="absolute z-[25] resize-none rounded-[12px] border border-transparent bg-white p-[14px] font-['Inter:Regular',sans-serif] text-[15px] leading-[1.4] text-[#232327] outline-none transition-colors placeholder:text-[#a7adb8] focus:border-[#6799b5] focus:ring-2 focus:ring-[#6799b5]/25"
              style={{ top: bounds.top, left: bounds.left, width: bounds.width, height: bounds.height }}
            />
          );
        })}

        {screen === "dashboard" && (
          <>
            <Hotspot top={272} left={20} w={362} h={141} label="Open reflection for your animal rescue challenge" onClick={() => go("reflections")} />
            <Hotspot top={746} left={24} w={362} h={97} label="Open suggested tennis meetup" onClick={() => go("challenge")} />
          </>
        )}
        {screen === "challenge" && (
          <>
            <Hotspot top={64} left={18} w={40} h={40} label="Back to dashboard" onClick={() => go("dashboard")} />
            <Hotspot top={510} left={21} w={360} h={64} label="Add a reflection" onClick={() => go("reflections")} />
          </>
        )}
        {screen === "new-challenge" && (
          <>
            <Hotspot top={64} left={18} w={40} h={40} label="Back to dashboard" onClick={() => go("dashboard")} />
            <Hotspot top={273} left={21} w={360} h={56} label="Choose animal rescue challenge" onClick={() => go("challenge")} />
            <Hotspot top={448} left={21} w={360} h={52} label="Write your own challenge" onClick={() => go("write-own")} />
            <Hotspot top={627} left={26} w={349} h={48} label="Start selected challenge" onClick={() => go("challenge")} />
          </>
        )}
        {screen === "write-own" && (
          <>
            <Hotspot top={64} left={18} w={40} h={40} label="Back to new challenges" onClick={() => go("new-challenge")} />
            <Hotspot top={651} left={22} w={349} h={48} label="Add your challenge" onClick={() => go("challenge")} />
          </>
        )}
        {(screen === "reflections" || screen === "reflection-form") && (() => {
          const isFilledForm = screen === "reflection-form";
          const scaleTop = (isFilledForm ? 987 : 970) - formScrollTop;
          const numbersTop = (isFilledForm ? 1018 : 1001) - formScrollTop;
          const isScaleInsideForm = scaleTop > 206 && numbersTop < 769;
          return (
            <>
              {screen === "reflections" && <Hotspot top={77} left={24} w={40} h={40} label="Back to challenge" onClick={() => go("challenge")} />}
              {isScaleInsideForm && <>
                <div
                  aria-hidden
                  className="absolute z-[19] h-[9px] w-[353px] rounded-full"
                  style={{
                    top: scaleTop,
                    left: 25,
                    background: `linear-gradient(to right, #eabd23 0%, #eabd23 ${((confidence - 1) / 4) * 100}%, #b3b3b8 ${((confidence - 1) / 4) * 100}%, #b3b3b8 100%)`,
                  }}
                />
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.1"
                  value={confidence}
                  aria-label="Confidence reinforcement score"
                  aria-valuetext={`${confidence.toFixed(1)} out of 5`}
                  onChange={(event) => setConfidence(Number(event.target.value))}
                  className="reflection-confidence-range absolute z-20 h-[48px] w-[353px] bg-transparent"
                  style={{ top: scaleTop - 21, left: 25 }}
                />
                <div aria-hidden className="absolute z-[19] flex w-[353px] justify-between font-['Montaga:Regular',sans-serif] text-[16px] leading-[1.4] text-[#4a4a4a]" style={{ top: numbersTop, left: 25 }}>
                  <span>1</span><span>5</span>
                </div>
              </>}
            </>
          );
        })()}
        {screen === "reflection-form" && <Hotspot top={77} left={24} w={40} h={40} label="Back to blank reflection form" onClick={() => go("reflections")} />}
        {screen === "saved" && <Hotspot top={599} left={27} w={349} h={58} label="View reflection in calendar" onClick={() => go("calendar")} />}
        {screen === "reflection" && (
          <>
            <Hotspot top={58} left={24} w={40} h={40} label="Back to calendar" onClick={() => go("calendar")} />
            <Hotspot top={58} left={324} w={60} h={40} label="Edit reflection" onClick={() => go("edit-reflection")} />
          </>
        )}
        {screen === "edit-reflection" && (
          <>
            <Hotspot top={58} left={24} w={40} h={40} label="Cancel editing" onClick={() => go("reflection")} />
            <Hotspot top={58} left={324} w={60} h={40} label="Save reflection changes" onClick={() => go("reflection")} />
            {[
              { key: "memorable", top: 501, label: "What made this experience memorable?" },
              { key: "connection", top: 672, label: "Did you do this with anyone?" },
              { key: "mood", top: 866, label: "What was your mood before and after?" },
            ].map((field) => (
              <textarea
                key={field.key}
                aria-label={field.label}
                value={reflectionAnswers[field.key as keyof typeof reflectionAnswers]}
                onChange={(event) => {
                setReflectionAnswerTouched((touched) => ({ ...touched, [field.key]: true }));
                setReflectionAnswers((answers) => ({ ...answers, [field.key]: event.target.value }));
              }}
                onClick={(event) => event.stopPropagation()}
                className="absolute z-20 resize-none rounded-[6px] border border-[#dfe4ea] bg-white p-[10px] font-['Inter:Regular',sans-serif] text-[15px] leading-[1.45] text-[#0f345e] outline-none transition-shadow placeholder:text-[#777a89] focus:border-[#6799b5] focus:ring-2 focus:ring-[#6799b5]/25"
                style={{ top: field.top - editScrollTop, left: 34, width: 343, height: 88 }}
              />
            ))}
          </>
        )}
        {(screen === "calendar-june" || screen === "calendar" || screen === "calendar-august") && (
          <>
            <Hotspot top={60} left={21} w={30} h={44} label="Back to dashboard" onClick={() => go("dashboard")} />
            {screen === "calendar-june" && <Hotspot top={112} left={254} w={40} h={70} label="Next month, July" onClick={() => go("calendar")} />}
            {screen === "calendar" && <>
              <Hotspot top={112} left={104} w={40} h={70} label="Previous month, June" onClick={() => go("calendar-june")} />
              <Hotspot top={112} left={258} w={40} h={70} label="Next month, August" onClick={() => go("calendar-august")} />
              <Hotspot top={425} left={322} w={60} h={76} label="Open July 25 reflection" onClick={() => go("reflection")} />
            </>}
            {screen === "calendar-august" && <Hotspot top={112} left={104} w={40} h={70} label="Previous month, July" onClick={() => go("calendar")} />}
          </>
        )}

        <div className="absolute z-[22]" style={{ top: 769, left: 4 }}>
          <Menu
            property1={menuState}
            className="relative flex items-center gap-[20px] overflow-hidden rounded-[40px] border border-white/65 bg-white/50 px-[24px] py-[12px] shadow-[0_8px_24px_rgba(15,52,94,0.14)] backdrop-blur-xl"
          />
          <button type="button" aria-label="Dashboard" title="Dashboard" className="absolute cursor-pointer" style={{ top: 0, left: 24, width: 56, height: 56 }} onClick={() => go("dashboard")} />
          <button type="button" aria-label="Calendar" title="Calendar" className="absolute cursor-pointer" style={{ top: 0, left: 100, width: 56, height: 56 }} onClick={() => go("calendar")} />
          <button type="button" aria-label="New challenge" title="New challenge" className="absolute cursor-pointer" style={{ top: 0, left: 176, width: 56, height: 56 }} onClick={() => go("new-challenge")} />
        </div>

        {openDropdown && <button type="button" aria-label="Close menu" className="absolute inset-0 z-40 cursor-default" onClick={closeDropdowns} />}
      </section>
    </main>
  );
}
