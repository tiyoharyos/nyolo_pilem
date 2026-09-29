import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { getPosterUrl } from '../api/tmdb';

const MovieCatalog = ({ eyebrow, title, description, movies, loading, error, retry }) => (
  <section className="catalog-section">
    <Container>
      <header className="catalog-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="catalog-description">{description}</p>
      </header>

      {loading && (
        <div className="catalog-state" role="status">
          <Spinner animation="border" variant="light" size="sm" className="me-2" />
          Memuat pilihan film...
        </div>
      )}

      {!loading && error && (
        <div className="catalog-state" role="alert">
          <p>{error}</p>
          <Button variant="outline-light" onClick={retry}>Coba lagi</Button>
        </div>
      )}

      {!loading && !error && movies.length === 0 && (
        <div className="catalog-state">Belum ada film untuk ditampilkan.</div>
      )}

      {!loading && !error && movies.length > 0 && (
        <Row className="movie-grid">
          {movies.map((movie) => {
            const posterUrl = getPosterUrl(movie.poster_path);
            const releaseDate = movie.release_date || movie.first_air_date;

            return (
              <Col key={movie.id} xs={6} sm={4} lg={3} xl={2}>
                <article className="movie-card">
                  <div className="movie-poster-wrap">
                    {posterUrl ? (
                      <img className="movie-poster" src={posterUrl} alt={`Poster ${movie.title || movie.name}`} loading="lazy" />
                    ) : (
                      <div className="movie-poster movie-poster-empty" aria-label="Poster tidak tersedia" />
                    )}
                    {movie.vote_average > 0 && (
                      <span className="movie-rating">★ {movie.vote_average.toFixed(1)}</span>
                    )}
                  </div>
                  <div className="movie-copy">
                    <h2>{movie.title || movie.name || 'Tanpa judul'}</h2>
                    <p>{movie.overview || 'Sinopsis belum tersedia.'}</p>
                    <time className="movie-date" dateTime={releaseDate || undefined}>
                      {releaseDate ? new Date(`${releaseDate}T00:00:00`).getFullYear() : 'Tahun tidak diketahui'}
                    </time>
                  </div>
                </article>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  </section>
);

export default MovieCatalog;