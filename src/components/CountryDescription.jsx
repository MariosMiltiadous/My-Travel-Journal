import { useParams } from "react-router-dom";
import entries from "../data/entries";

export default function CountryDescription() {
  const { id } = useParams();
  const entry = entries.find((e) => e.id === id);

  if (!entry) return <p>Country not found!</p>;

  return (
    <div className="p-6 max-w-3xl w-full mx-auto">
      <img
        src={entry.imageSrc}
        alt={entry.imageAlt}
        className="desciption-img w-full rounded-xl mb-4 object-cover"
      />
      <h1 className="text-3xl font-bold mb-2">
        {entry.locationName}, {entry.country}
      </h1>
      <p className="text-sm text-gray-500 mb-4">{entry.dates}</p>
      <p className="text-lg">{entry.description}</p>

      <hr className="my-6" />

      <div className="text-base leading-relaxed text-gray-700">
        {/* Sample travel article */}
        <p>
          It was early morning when I wandered through the narrow streets of{" "}
          {entry.locationName}, still quiet before the world woke up. The scent
          of coffee drifted out of cafés, and history whispered through every
          stone.
        </p>
        <p className="mt-3">
          As I explored {entry.country}, I found not just sights, but stories —
          stories carved into ruins, painted in alleyways, and etched in the
          faces of strangers who smiled in passing.
        </p>
        <p className="mt-3">
          {entry.locationName} wasn’t just a destination. It became a part of
          me.
        </p>
      </div>
    </div>
  );
}
