import ActiveSection from "../activeSection";
const Services = ({ children, animationIn, animationOut }) => {
  return (
    <div
      className={ActiveSection("services", animationIn, animationOut)}
      id="services"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Services;
