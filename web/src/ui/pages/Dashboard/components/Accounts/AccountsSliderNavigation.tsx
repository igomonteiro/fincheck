import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

interface AccountsSliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function AccountsSliderNavigation({
  isBeginning,
  isEnd,
}: AccountsSliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div>
      <button
        className="rounded-full py-3 pl-2.5 pr-3.5 transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button
        className="rounded-full py-3 pl-2.5 pr-3.5 transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
