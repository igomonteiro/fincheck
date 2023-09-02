import { useSwiper } from "swiper/react";
import { cn } from "../../../../../app/utils/cn";

interface SliderOptionProps {
  isActive: boolean;
  month: string;
  index: number;
}

export function SliderOption({ isActive, month, index }: SliderOptionProps) {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cn(
        "text-small h-12 w-full rounded-full font-medium tracking-[-0.5px] text-gray-800",
        isActive && "bg-white",
      )}
    >
      {month}
    </button>
  );
}
