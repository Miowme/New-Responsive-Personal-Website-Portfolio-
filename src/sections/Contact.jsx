import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "williamsusantolukman@gmail.com",
    href: "mailto:williamsusantolukman@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 896 9251 2288",
    href: "tel:+6289692512288",
  },
];

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/Miowme" },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/william-susanto-lukman",
  },
  { Icon: FaInstagram, href: "https://www.instagram.com/willi_s_l" },
];

export const Contact = () => {
  return (
    <footer
      id="contact"
      className="bg-background border-t border-border py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pb-12 border-b border-border/50">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground">
              Let's build{" "}
              <span className="font-serif italic font-normal text-white">
                something great.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto justify-center">
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-2xl glass border border-primary/10 hover:border-primary/30 hover:bg-surface/50 transition-all group shrink-0"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Made by{" "}
            <span className="text-white font-medium">William Susanto</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, idx) => (
              <a
                key={`social-${idx}`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass border border-border hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300 flex items-center justify-center"
              >
                <social.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
