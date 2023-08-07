import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useRegister } from "./useRegister";

export function Register() {
  const { handleSubmit, register, errors, isLoading } = useRegister();
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px] text-gray-900">
          Crie sua conta
        </h1>
        <p className="space-x-2">
          <span className="tracking-[-0.5px] text-gray-700">
            Já possui uma conta?
          </span>
          <Link
            to="/login"
            className="font-medium tracking-[-0.5px] text-teal-900"
          >
            Fazer login
          </Link>
        </p>
      </header>
      <form className="mt-[60px] flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          type="email"
          placeholder="E-mail"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register("password")}
        />
        <Button type="submit" className="mt-2" isLoading={isLoading}>
          Criar conta
        </Button>
      </form>
    </>
  );
}
