import Image from 'next/image';

export function Preview() {
  return (
    <div className="flex flex-col">
      <Image
        width={0}
        height={0}
        layout="responsive"
        objectFit="cover"
        src="/images/fincheck-preview.png"
        alt="Fincheck preview"
      ></Image>
      <div className="bg-white p-12 flex flex-col gap-6 rounded-t-none rounded-br-[32px] rounded-bl-[32px] -mt-5">
        <span className="text-teal-900 text-2xl font-medium">fincheck</span>
        <span>
          Gerencie suas finanças pessoas de uma forma simples com o fincheck, e
          o melhor, totalmente de graça!
        </span>
      </div>
    </div>
  );
}
