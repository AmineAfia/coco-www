import Image from "next/image";

export const Logo = () => (
  <div className="flex items-center gap-3">
    <Image
      src="/coco-logo.png"
      alt="Coco Logo"
      width={33}
      height={33}
      className="w-8 h-8"
    />
    <span className="text-xl font-bold text-foreground">Coco AI</span>
  </div>
);
