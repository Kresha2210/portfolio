import PropTypes from "prop-types";
import Image from "next/image";

export default function StatsCard({ title, value, image }) {
  return (
    <div className="glass p-4 rounded-xl text-center flex flex-col items-center">
      {image ? (
        <div className="w-12 h-12 mb-2">
          <Image src={image} alt={title} width={48} height={48} />
        </div>
      ) : null}
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-primary text-lg font-bold">{value}</p>
    </div>
  );
}

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  image: PropTypes.string,
};
