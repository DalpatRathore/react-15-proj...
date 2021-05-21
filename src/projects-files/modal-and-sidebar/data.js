import React from "react";
import {
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaVideo,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/modal-and-sidebar",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/modal-and-sidebar/videos",
    text: "videos",
    icon: <FaVideo />,
  },
  {
    id: 3,
    url: "/modal-and-sidebar/projects",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/modal-and-sidebar",
    text: "calendar",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/modal-and-sidebar",
    text: "documents",
    icon: <FaWpforms />,
  },
  {
    id: 6,
    url: "/modal-and-sidebar",
    text: "team",
    icon: <FaUserFriends />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA",
    icon: <FaYoutube />,
  },
  {
    id: 2,
    url: "https://twitter.com/john_smilga?lang=en",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/john-smilga-659100177",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://github.com/john-smilga",
    icon: <FaGithub />,
  },
];
