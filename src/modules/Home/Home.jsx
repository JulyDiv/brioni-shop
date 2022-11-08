import Link from "next/link";
import { useRouter } from "next/router";

export const Home = () => {
  const router = useRouter();
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
            <button onClick={() => router.push("/catalog")} className="button-dark home-info__button">
              Start Shopping
            </button>
          </div>
        </div>
        <div className="home__image"></div>
      </div>
    </section>
  );
};
