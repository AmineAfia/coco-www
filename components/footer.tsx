import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Baby,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getTranslations, type Locale } from "@/lib/translations";

interface FooterProps {
  locale: Locale;
}

const Footer = ({ locale }: FooterProps) => {
  const t = getTranslations(locale);
  return (
    <footer className="mt-40 bg-warm-gradient border-t border-coral-direct">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <div className="py-6 xs:py-8 sm:py-10 px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/coco-logo.png"
                    alt="Coco Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-foreground">Coco</h3>
                  <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1">

            </div>

            {/* Newsletter & Contact */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-foreground mb-3">{t.footer.stayUpdated}</h4>
              <p className="text-muted-foreground mb-3">
                {t.footer.newsletterDescription}
              </p>
              <form className="space-y-2">
                <Input 
                  type="email" 
                  placeholder={t.footer.emailPlaceholder} 
                  className="rounded-full"
                />
                <Button 
                  type="submit" 
                  className="w-full btn-primary rounded-full"
                >
                  <Baby className="w-4 h-4 mr-2" />
                  {t.footer.getUpdates}
                </Button>
              </form>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />
        
        <div className="py-3 flex flex-col sm:flex-row items-center justify-between gap-3 px-6 xl:px-0">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" className="text-foreground hover-text-coral-direct transition-colors">
                Coco
              </Link>
              . {t.footer.copyright}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {t.footer.taglineBottom}
            </p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-6">
            {/* <Link 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover-text-coral-direct transition-colors duration-200 focus-warm"
              aria-label="Folge uns auf Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover-text-coral-direct transition-colors duration-200 focus-warm"
              aria-label="Folge uns auf Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link> */}
            <Link 
              href="https://www.tiktok.com/@getcoco.life?_r=1&_d=emf6a16kbb9gb0&sec_uid=MS4wLjABAAAACBEPD_VvApVgxHqmanFcJjlm7yOwiJ5qYnoXxPsF7aBp_xQZoIuaEKgNPED1xAoN&share_author_id=7556599852315477014&sharer_language=en&source=h5_m&u_code=emijh9ckkccj0m&item_author_type=1&utm_source=whatsapp&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=5D50A7FA-C9CA-4ADD-8758-7331F1B510E4&user_id=7556599852315477014&sec_user_id=MS4wLjABAAAACBEPD_VvApVgxHqmanFcJjlm7yOwiJ5qYnoXxPsF7aBp_xQZoIuaEKgNPED1xAoN&social_share_type=5&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover-text-coral-direct transition-colors duration-200 focus-warm"
              aria-label={t.footer.visitTikTok}
            >
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-label="TikTok">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </Link>
            <Link 
              href="https://wa.me/+15558876420?text=Hallo%20Coco" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover-text-coral-direct transition-colors duration-200 focus-warm"
              aria-label={t.footer.chatWhatsApp}
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
