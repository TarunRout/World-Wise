// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Discover the perfect companion for your wanderlust with our
            meticulously crafted travel notebook. Designed for adventurers who
            cherish documenting their journeys with precision and flair, our
            notebook offers a seamless blend of functionality and elegance.
            Capture every moment in vivid detail with dedicated sections for
            locations, dates, and personalized notes.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
