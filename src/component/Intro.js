import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroImage from '../asset/images/bg/main.jpg';

const Intro = () => (
  <section className="hero" style={{ '--hero-image': `url("${heroImage}")` }}>
    <Container className="hero-content">
      <p className="eyebrow">PILIHAN CERITA HARI INI</p>
      <h1>Temukan film yang bikin kamu <span>betah.</span></h1>
      <p className="hero-copy">
        Dari rilisan yang sedang ramai sampai aksi para superhero, cari tontonan berikutnya di sini.
      </p>
      <Button as={Link} to="/listfilm" className="hero-cta">
        Jelajahi semua film <span aria-hidden="true">↗</span>
      </Button>
    </Container>
    <div className="hero-index" aria-hidden="true">01 / 03</div>
  </section>
);

export default Intro