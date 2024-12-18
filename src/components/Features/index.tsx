import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="">
        <div className="container">
          <SectionTitle
            title="El Reto del Agua en Perú"
            paragraph="En Cajamarca, el agua es vital para la vida y la economía local,
            pero enfrentamos desafíos críticos: contaminación, desperdicio y falta de
            educación en su manejo. Estas problemáticas afectan a las comunidades y
            limitan el acceso a este recurso esencial."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
