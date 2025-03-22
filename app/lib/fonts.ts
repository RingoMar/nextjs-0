import localFont from "next/font/local";

export const firaSans = localFont({
  src: [
    { path: "../../fonts/Fira_Sans/FiraSans-Thin.ttf", weight: "100", style: "normal" },
    { path: "../../fonts/Fira_Sans/FiraSans-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "../../fonts/Fira_Sans/FiraSans-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../../fonts/Fira_Sans/FiraSans-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "../../fonts/Fira_Sans/FiraSans-Light.ttf", weight: "300", style: "normal" },
    { path: "../../fonts/Fira_Sans/FiraSans-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../../fonts/Fira_Sans/FiraSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../fonts/Fira_Sans/FiraSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../fonts/Fira_Sans/FiraSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../fonts/Fira_Sans/FiraSans-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../../fonts/Fira_Sans/FiraSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../fonts/Fira_Sans/FiraSans-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../../fonts/Fira_Sans/FiraSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../fonts/Fira_Sans/FiraSans-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../../fonts/Fira_Sans/FiraSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../fonts/Fira_Sans/FiraSans-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "../../fonts/Fira_Sans/FiraSans-Black.ttf", weight: "900", style: "normal" },
    { path: "../../fonts/Fira_Sans/FiraSans-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-fira-sans",
});
