const Package = ({ pack }) => {
  const { title, additional, feature1 } = pack.fields;
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
      <button className="request">Request a quote</button>
    </article>
  );
};

export default Package;
