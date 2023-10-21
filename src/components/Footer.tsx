import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

const linkIcons: {
  icon: JSX.Element;
  link: string;
}[] = [
  {
    icon: <GitHubIcon />,
    link: "https://github.com/WesleyEdwards",
  },
  {
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/wesley.edwards.16144",
  },
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/wesley-edwards-047ab1240/",
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {linkIcons.map((linkIcon, index) => (
          <a
            key={index}
            href={linkIcon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkIcon.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
