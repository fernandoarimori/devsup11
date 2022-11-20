import logoHeader from '../../assets/img/logo-header.svg';
import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logoHeader} alt="DSMeta" />
        <h1>SALES WITH SMS</h1>
        <p>
          Desenvolvido por
          <a href="https://github.com/fernandoarimori">github.com/fernandoarimori</a>
        </p>
      </div>
    </header>
  );
}
export default Header;
