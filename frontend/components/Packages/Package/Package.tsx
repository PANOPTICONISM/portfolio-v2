interface PackageProp {
  pack: {
    fields: {
      title: string;
      additional: string;
      feature1: any[];
    };
  };
  handleScrollingToForm: any;
}

const Package = ({ pack, handleScrollingToForm }: PackageProp) => {
  const { title, additional, feature1 } = pack?.fields;
  return (
    <article>
      <div className="top_box">
        <h5>{title}</h5>
        <p>{additional}</p>
        <ul>
          {feature1.map((feature, index) => (
            <li key={index}>&#10004; {feature}</li>
          ))}
        </ul>
      </div>
      <button className="request" onClick={handleScrollingToForm}>
        Request a quote
      </button>
    </article>
  );
};

export default Package;
