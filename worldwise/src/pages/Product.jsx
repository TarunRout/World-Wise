import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Discover the perfect companion for your wanderlust with our
            meticulously crafted travel notebook.
          </p>
          <p>
            Designed for adventurers who cherish documenting their journeys with
            precision and flair, our notebook offers a seamless blend of
            functionality and elegance. Capture every moment in vivid detail
            with dedicated sections for locations, dates, and personalized notes
          </p>
        </div>
      </section>
    </main>
  );
}
