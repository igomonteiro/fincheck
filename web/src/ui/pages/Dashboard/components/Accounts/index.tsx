import { AccountCard } from "./AccountCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AccountsSliderNavigation } from "./AccountsSliderNavigation";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { useAccounts } from "./useAccounts";

export function Accounts() {
  const { sliderState, setSliderState } = useAccounts();
  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      <div>
        <span className="block tracking-[-0.5px] text-white">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 100,00
          </strong>
          <button className="flex h-8 w-8 items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={2.1}
            onSlideChange={(swiper) => {
              setSliderState({
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd,
              });
            }}
          >
            <div
              slot="container-start"
              className="mb-4 flex items-center justify-between"
            >
              <strong className="text-lg font-bold tracking-[-1px] text-white">
                Minhas contas
              </strong>
              <AccountsSliderNavigation
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
              />
            </div>
            <SwiperSlide>
              <AccountCard
                name="Nubank"
                color="#7950F2"
                balance={1000.23}
                type="checking"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountCard
                name="XP"
                color="#7950F2"
                balance={1000.23}
                type="investiment"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountCard
                name="Carteira"
                color="#7950F2"
                balance={1000.23}
                type="cash"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
