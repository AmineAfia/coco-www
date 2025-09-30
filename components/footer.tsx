import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Instagram,
  Facebook,
  Youtube,
  Baby,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="mt-40 bg-warm-gradient border-t border-border/50">
      <div className="max-w-screen-xl mx-auto">
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
                  <p className="text-sm text-muted-foreground">Deine Schwangerschaftsbegleitung</p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1">

            </div>

            {/* Newsletter & Contact */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-foreground mb-3">Bleib auf dem Laufenden</h4>
              <p className="text-muted-foreground mb-3">
                Erhalte wöchentliche Schwangerschaftstipps und Updates direkt in dein WhatsApp.
              </p>
              <form className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="Deine E-Mail-Adresse" 
                  className="rounded-full"
                />
                <Button 
                  type="submit" 
                  className="w-full btn-primary rounded-full"
                >
                  <Baby className="w-4 h-4 mr-2" />
                  Updates erhalten
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
              <Link href="/" className="text-foreground hover:text-coral transition-colors">
                Coco
              </Link>
              . Alle Rechte vorbehalten.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Deine vertrauensvolle Schwangerschaftsbegleitung
            </p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-6">
            <Link 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-coral transition-colors duration-200 focus-warm"
              aria-label="Folge uns auf Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-coral transition-colors duration-200 focus-warm"
              aria-label="Folge uns auf Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-coral transition-colors duration-200 focus-warm"
              aria-label="Besuche unseren YouTube Kanal"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link 
              href="https://wa.me/+15558876420?text=Hallo%20Coco" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-coral transition-colors duration-200 focus-warm"
              aria-label="Chat mit Coco auf WhatsApp"
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
