import { useState } from "react";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactions() {
  const { areValuesVisible } = useDashboard();
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return {
    sliderState,
    setSliderState,
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    transactions: [],
  };
}
