import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./TeamCard.css";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const platformIcons = {
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
  facebook: <FaFacebookF />,
  twitter: <FaXTwitter />,
  x: <FaXTwitter />,
  youtube: <FaYoutube />,
};

const socialLabels = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  twitter: "X",
  facebook: "Facebook",
  youtube: "YouTube",
};

const defaultSocial = {
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  twitter: "https://x.com/",
};

export default function TeamCard({ member, index = 0 }) {
  const [ref, visible] = useScrollAnimation();

  // Build social links from member.social or use defaults
  const socialEntries = member?.social
    ? Object.entries(member.social)
    : Object.entries(defaultSocial);

  return (
    <div
      ref={ref}
      className={`team-card ${visible ? "animate" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <Link to={`/team/${member.slug}`} className="team-card-link">
        <div className="team-card-image">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
          />
          {socialEntries.length > 0 && (
            <div className="team-card-social">
              {socialEntries.map(([key, url]) => {
                const platform = key.toLowerCase();
                if (!platformIcons[platform] || !url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    className={`social-icon ${platform}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on ${socialLabels[platform]}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {platformIcons[platform]}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div className="team-card-content">
          <h3 className="team-card-name">{member.name}</h3>
          <span className="team-card-role">{member.role}</span>
          {member.bio && <p className="team-card-bio">{member.bio}</p>}
        </div>
      </Link>
    </div>
  );
}