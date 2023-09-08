import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { useTransactions } from "./useTransactions";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { cn } from "../../../../../app/utils/cn";
import { Spinner } from "../../../../components/Spinner";
import EmptyStateImage from "../../../../../assets/empty-state.svg";
import { TransactionTypeDropdown } from "./TransactionTypeDropdown";
import { FiltersDialog } from "./FiltersDialog";

export function Transactions() {
  const {
    setSliderState,
    sliderState,
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions,
    isFiltersModalOpen,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
  } = useTransactions();
  const hasTransactions = transactions.length > 0;

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 py-8 md:p-10">
      {isInitialLoading && (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner className="h-10 w-10" />
        </div>
      )}
      {!isInitialLoading && (
        <>
          <FiltersDialog
            open={isFiltersModalOpen}
            onClose={handleCloseFiltersModal}
          />
          <header>
            <div className="flex items-center justify-between">
              <TransactionTypeDropdown />
              <button onClick={handleOpenFiltersModal}>
                <FilterIcon />
              </button>
            </div>
            <div className="relative mt-6">
              <Swiper
                slidesPerView={3}
                centeredSlides
                onSlideChange={(swiper) => {
                  setSliderState({
                    isBeginning: swiper.isBeginning,
                    isEnd: swiper.isEnd,
                  });
                }}
              >
                <SliderNavigation
                  isBeginning={sliderState.isBeginning}
                  isEnd={sliderState.isEnd}
                />
                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <SliderOption
                        index={index}
                        isActive={isActive}
                        month={month}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>
          {hasTransactions && !isLoading && (
            <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
                <div className="flex flex-1 items-center gap-3">
                  <CategoryIcon type="expense" />
                  <div>
                    <strong className="block font-bold tracking-[-0.5px]">
                      Almoço
                    </strong>
                    <span className="text-small text-gray-600">02/06/2023</span>
                  </div>
                </div>
                <span
                  className={cn(
                    "font-medium tracking-[-0.5px] text-red-800",
                    !areValuesVisible && "blur-sm",
                  )}
                >
                  {formatCurrency(-123)}
                </span>
              </div>
            </div>
          )}
          {isLoading && (
            <div className="flex flex-1 flex-col items-center justify-center">
              <Spinner className="h-10 w-10" />
            </div>
          )}
          {!hasTransactions && !isLoading && (
            <div className="flex flex-1 flex-col items-center justify-center">
              <img src={EmptyStateImage} alt="No transactions" />
              <span className="text-gray-700">
                Não encontramos nenhuma transação!
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
