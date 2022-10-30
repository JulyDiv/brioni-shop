import Link from "next/link";

export const Home = () => {
  return (
    <section className="home">
      <div className="home-wrapper">
        <div className="home-info">
          <div className="home-info__block">
            <h1 className="home-info__title">
              Discover your personal
              <Link href="/catalog" className="home-info__link">
                {" "}Brioni
              </Link>
            </h1>
            <button className="button-dark home-info__button">
              Start Shopping
            </button>
          </div>
        </div>
        <div className="home__image"></div>
      </div>
    </section>
  );
};
