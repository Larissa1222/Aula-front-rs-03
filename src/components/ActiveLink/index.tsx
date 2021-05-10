import Link, { LinkProps } from "next/link";
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

//função para nao precisar fazer ternario no active

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  //asPath vê a rota acessada
  //o classname checa qual rota é acessada
  //o rest pega todas as propriedades q sao passadas para o active link
  //que nao sao children nem activeclassname e repassa pro link

  //o cloneElement serve para clonar um children, e ainda complementa-lo
  const { asPath } = useRouter();
  const className = asPath === rest.href
    ? activeClassName
    : '';
  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  )
}