import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Entry({
  id,
  imageSrc,
  imageAlt,
  iconSrc,
  country,
  locationLink,
  locationName,
  dates,
  description,
}) {
  return (
    <motion.article
      className="journal-entry flex gap-4 p-4 shadow-md rounded-xl bg-white hover:shadow-lg transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="main-image-container w-1/3">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="main-image w-full h-auto rounded-lg"
        />
      </div>

      <div className="details w-2/3">
        <div className="location flex items-center gap-2 text-sm text-gray-700">
          <img src={iconSrc} alt="Map marker icon" className="w-4 h-4" />
          <span className="uppercase font-semibold tracking-wide">
            {country}
          </span>
          {/* Move this outside of <Link> by avoiding nested <a> */}
          <a
            href={locationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline ml-2"
            onClick={(e) => e.stopPropagation()} // prevent conflict with routing
          >
            View on Google Maps
          </a>
        </div>

        <Link
          to={`/country/${id}`}
          className="block no-underline text-inherit mt-2"
        >
          <h2 className="text-2xl font-bold">{locationName}</h2>
          <p className="text-sm font-semibold text-gray-600 mt-1">{dates}</p>
          <p className="text-base mt-2 text-gray-800">{description}</p>
        </Link>
      </div>
    </motion.article>
  );
}
