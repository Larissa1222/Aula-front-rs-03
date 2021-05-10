import { SignInButton } from '../SignInButtom';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" title="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active}href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton/>
      </div>
    </header>
  );
}
//o link serve para nao precisar carregar o
//projeto todo toda vez

//se usar o prefetch no link, ele pré carrega
//a pagina