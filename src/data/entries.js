import Japan_banner from "../assets/Japan_banner.png";
import Athens_banner from "../assets/Athens.png";
import Brasov_banner from "../assets/brasov.png";
import Rome_banner from "../assets/rome.png";
import Aegina_banner from "../assets/aegina.png";
import Zagreb_banner from "../assets/zagreb.png";

import mapMarkerIcon from '../assets/mapMakerIcon.png';

export default [
  {
    id: "japan",
    imageSrc: Japan_banner,
    imageAlt: "Mount Fuji",
    iconSrc: mapMarkerIcon,
    country: "Japan",
    locationLink: "https://www.google.com/maps/place/Mount+Fuji/",
    locationName: "Mount Fuji",
    dates: "12 Jan, 2021 - 24 Jan, 2021",
    description: "Mount Fuji is the tallest mountain in Japan..."
  },
  {
    id: "athens",
    imageSrc: Athens_banner,
    imageAlt: "Acropolis of Athens",
    iconSrc: mapMarkerIcon,
    country: "Greece",
    locationLink: "https://www.google.com/maps/place/Acropolis+of+Athens/",
    locationName: "Acropolis of Athens",
    dates: "10 Mar, 2022 - 15 Mar, 2022",
    description: "The Acropolis of Athens is an ancient citadel..."
  },
  // add the rest of your entries here
  {
    id: "brasov",
    imageSrc: Brasov_banner,
    imageAlt: "Brasov City Center",
    iconSrc: mapMarkerIcon,
    country: "Romania",
    locationLink: "https://www.google.com/maps/place/Brașov/",
    locationName: "Brașov",
    dates: "5 Dec, 2022 - 12 Dec, 2022",
    description: "Nestled in the heart of Transylvania, Brașov is known for its medieval charm, gothic architecture, and beautiful mountain views. The city is also a gateway to the famous Bran Castle (Dracula’s Castle)."
  },
  {
    id: "rome",
    imageSrc: Rome_banner,
    imageAlt: "Colosseum in Rome",
    iconSrc: mapMarkerIcon,
    country: "Italy",
    locationLink: "https://www.google.com/maps/place/Colosseum/",
    locationName: "Rome",
    dates: "1 Aug, 2021 - 10 Aug, 2021",
    description: "Rome, the Eternal City, is rich with ancient history, from the Colosseum to the Roman Forum and Vatican City. It's a timeless blend of awe-inspiring ruins, Renaissance art, and vibrant street life."
  },
  {
    id: "aegina",
    imageSrc: Aegina_banner,
    imageAlt: "Aegina Island",
    iconSrc: mapMarkerIcon,
    country: "Greece",
    locationLink: "https://www.google.com/maps/place/Aegina/",
    locationName: "Aegina Island",
    dates: "20 Jul, 2023 - 23 Jul, 2023",
    description: "Aegina is a charming island close to Athens, known for its pistachios, neoclassical buildings, and the ancient Temple of Aphaia. It’s a peaceful escape with a rich cultural and historical heritage."
  },
  {
    id: "zagreb",
    imageSrc: Zagreb_banner,
    imageAlt: "Zagreb Old Town",
    iconSrc: mapMarkerIcon,
    country: "Croatia",
    locationLink: "https://www.google.com/maps/place/Zagreb/",
    locationName: "Zagreb",
    dates: "18 Sep, 2023 - 25 Sep, 2023",
    description: "Zagreb, the capital of Croatia, offers a mix of 18th-century architecture, vibrant street culture, and museums. The charming upper town, quirky attractions, and welcoming vibe make it a hidden gem in Europe."
  }
  
];