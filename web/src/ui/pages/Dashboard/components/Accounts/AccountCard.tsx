import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { BankAccountTypeIcon } from "../../../../components/icons/BankAccountTypeIcon";
import { iconsMap } from "../../../../components/icons/BankAccountTypeIcon/iconsMap";
import { useDashboard } from "../DashboardContext/useDashboard";

interface AccountCardProps {
  name: string;
  balance: number;
  color: string;
  type: keyof typeof iconsMap;
}

export function AccountCard({ name, balance, color, type }: AccountCardProps) {
  const { areValuesVisible } = useDashboard();
  return (
    <div
      className="flex h-[200px] flex-col justify-between rounded-2xl border-b-4 border-b-teal-950 bg-white p-4"
      style={{ borderBottomColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={type} />
        <span className="mt-4 block font-medium tracking-[-0.5px] text-gray-800">
          {name}
        </span>
      </div>
      <div>
        <span
          className={cn(
            "block font-medium tracking-[-0.5px] text-gray-800",
            !areValuesVisible && "blur-sm",
          )}
        >
          {formatCurrency(balance)}
        </span>
        <small className="text-sm text-gray-600">Saldo atual</small>
      </div>
    </div>
  );
}
