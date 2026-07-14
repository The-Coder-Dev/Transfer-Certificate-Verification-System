import { Mail, PhoneCall, ArrowRight } from "lucide-react";
import Link from "next/link";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Button } from "../ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "svmkeshavdhamvbn@gmail.com",
    href: "mailto:svmkeshavdhamvbn@gmail.com",
    id: 1,
  },
  { icon: PhoneCall, label: "+91-8410641400", href: "tel:8410641400", id: 2 },
];

const Topbar = () => {
  return (
    <div className="w-full hidden md:flex bg-secondary py-3">
      <div className="px-5 mx-auto max-w-7xl w-full flex items-center justify-between">
        <div className="flex gap-3">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                href={item.href}
                key={item.id}
                className="text-primary flex items-center justify-center gap-1 text-sm"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-3">
          <Link href="https://svkd.vedicitsolutions.in/" className="flex items-center justify-center">
            <Button className="bg-accent text-primary hover:bg-accent/60 transition-colors duration-300">Go to School Website <ArrowRight /></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
