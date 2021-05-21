import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/navbar",
    text: "home",
  },
  {
    id: 2,
    url: "/navbar/videos",
    text: "videos",
  },
  {
    id: 3,
    url: "/navbar/projects",
    text: "projects",
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
