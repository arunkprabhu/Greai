import {
  CALL_ICON,
  CALL_PAUSE_ICON,
  CALL_PAUSE_WHITE,
  CALL_WHITE,
  HOME_ICON,
  HOME_WHITE,
  PROFILE_ICON,
  PROFILE_WHITE,
} from "../../utils/Images";
export const progressData = [
  { id: 1, icon: HOME_ICON, activeIcon: HOME_WHITE, name: "home", label: "" },
  {
    id: 2,
    icon: CALL_ICON,
    activeIcon: CALL_WHITE,
    name: "call",
    label: "8 mins",
  },
  {
    id: 3,
    icon: CALL_PAUSE_ICON,
    activeIcon: CALL_PAUSE_WHITE,
    name: "call_pause",
    label: "12 min",
  },
  {
    id: 4,
    icon: PROFILE_ICON,
    activeIcon: PROFILE_WHITE,
    name: "profile",
    label: "",
  },
];
