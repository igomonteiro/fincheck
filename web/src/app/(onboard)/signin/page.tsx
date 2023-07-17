import { Button } from '@/app/components/Button';
import { Input } from '@/app/components/Input';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-1 items-center content-center mb-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Entre em sua conta</h1>
        <span className="text-gray-700">
          Novo por aqui?{' '}
          <Link href="/signup" className="text-teal-900 font-medium">
            Crie uma conta
          </Link>
        </span>
      </div>
      <div className="w-full flex flex-col">
        <Input label="E-mail" type="email" />
        <Input label="Senha" type="password" />
        <Button>Entrar</Button>
      </div>
    </div>
  );
}
