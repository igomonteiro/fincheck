import { Dialog } from "../../../../components/Dialog";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Select } from "../../../../components/Select";
import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal() {
  const { isNewAccountModalOpen, closeNewAccountModal } =
    useNewAccountModalController();
  return (
    <Dialog
      title="Nova conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form>
        <div>
          <span className="text-xs tracking-[-0.5px] text-gray-600">Saldo</span>
          <div className="flex items-center gap-2">
            <span className="text-lg tracking-[-0.5px] text-gray-600">R$</span>
            <InputCurrency />
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          <Input type="text" name="name" placeholder="Nome da conta" />
          <Select error="Selecione uma fruta" />
        </div>
      </form>
    </Dialog>
  );
}
