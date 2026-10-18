"use client";

import { useState } from "react";
import { WhatsappIcon } from "@/app/icons";
import { LinkedinIcon } from "@/app/icons";
import { GlobeIcon } from "@/app/icons";
import { TelegramIcon } from "@/app/icons";
import Link from "next/link";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  
  // Capitalized component variables
  const LinkedIn = LinkedinIcon;
  const Whatsapp = WhatsappIcon;
  const Telegram = TelegramIcon;
  const Web = GlobeIcon;

  const hreflinkedin = "https://www.linkedin.com/in/mebrukamohammed";
  const hrefwhatsapp = "https://wa.me/251993092854";
  const hreftelegram = "https://t.me/Mebubliss";
  const hrefweb = "http://192.168.137.1:3000";
  
  const email = "mebrukamohammedahmed@gmail.com";
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("couldnt copy text");
    }
  };
   
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <p className="text-zinc-400 text-sm">Glad to talk with you.</p>
      
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-all text-sm font-medium border border-zinc-700 cursor-pointer"
      >
        <span>{email}</span>
        <span className="text-zinc-400">|</span>
        <span className="text-blue-400 font-semibold">
          {copied ? "Copied!" : "Copy"}
        </span>
      </button>

      <h2 className="text-xl font-bold text-white mt-4">Social Links</h2>
      
      {/* Social Links Row / List */}
      <div className="flex items-center gap-6 mt-2">
        {/* LinkedIn Link */}
        <Link 
          href={hreflinkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
        >
          <LinkedIn className="w-6 h-6" />
        </Link>

        {/* WhatsApp Link */}
        <Link 
          href={hrefwhatsapp} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition-colors"
        >
          <Whatsapp className="w-6 h-6" />
        </Link>

        {/* Telegram Link */}
        <Link 
          href={hreftelegram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-sky-400 transition-colors"
        >
          <Telegram className="w-6 h-6" />
        </Link>

        {/* Website Link */}
        <Link 
          href={hrefweb} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-zinc-300 transition-colors"
        >
          <Web className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;