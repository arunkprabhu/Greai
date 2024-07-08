import {
  BsEmojiExpressionlessFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
  BsFillEmojiFrownFill,
  BsFillEmojiLaughingFill,
} from "react-icons/bs";
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
  {
    id: 1,
    icon: HOME_ICON,
    activeIcon: HOME_WHITE,
    name: "home",
    label: "",
    loading: false,
  },
  {
    id: 2,
    icon: CALL_ICON,
    activeIcon: CALL_WHITE,
    name: "call",
    label: "8 mins",
    loading: false,
  },
  {
    id: 3,
    icon: CALL_PAUSE_ICON,
    activeIcon: CALL_PAUSE_WHITE,
    name: "call_pause",
    label: "12 min",
    loading: false,
  },
  {
    id: 4,
    icon: PROFILE_ICON,
    activeIcon: PROFILE_WHITE,
    name: "profile",
    label: "",
    loading: true,
  },
];
export const chatData = [
  {
    id: 1,
    isUser: false,
    message: ["hi,I'm Good Rob! Choose yours option so we can help you!"],
  },
  {
    id: 2,
    isUser: true,
    message: ["Option 1"],
  },
];
export const ratingData = [
  {
    id: 1,
    icon: "level1",
  },
  {
    id: 2,
    icon: "level2",
  },
  {
    id: 3,
    icon: "level3",
  },
  {
    id: 4,
    icon: "level4",
  },
  {
    id: 5,
    icon: "level5",
  },
];
