import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useLogin } from "./useLogin";

export function Login() {
  const { handleSubmit, register, errors, isLoading } = useLogin();

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px] text-gray-900">
          Entre em sua conta
        </h1>
        <p className="space-x-2">
          <span className="tracking-[-0.5px] text-gray-700">
            Novo por aqui?
          </span>
          <Link
            to="/register"
            className="font-medium tracking-[-0.5px] text-teal-900"
          >
            Crie uma conta
          </Link>
        </p>
      </header>
      <form className="mt-[60px] flex flex-col gap-4" onSubmit={handleSubmit}>
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
          Entrar
        </Button>
      </form>
    </>
  );
}
