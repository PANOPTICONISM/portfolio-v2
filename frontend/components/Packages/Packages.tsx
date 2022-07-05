import styles from "./packages.module.css";
import Package from "./Package/Package";

interface PackagesProps {
  packages: any[];
  handleScrollingToForm: Function;
}

const Packages = ({ packages, handleScrollingToForm }: PackagesProps) => {
  return (
    <section id="packages">
      <h1>Packages</h1>
      <div id={styles.packages}>
        {packages?.map((pack) => (
          <Package
            handleScrollingToForm={handleScrollingToForm}
            pack={pack}
            key={pack?.sys?.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Packages;
