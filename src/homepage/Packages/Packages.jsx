import "./packages.css";
import Package from "./Package/Package";

const Packages = ({ packages }) => {
  return (
    <section>
      <h1>Packages</h1>
      <div id="packages">
        {packages.map((pack) => (
          <Package pack={pack} key={pack.sys.id} />
        ))}
      </div>
    </section>
  );
};

export default Packages;
