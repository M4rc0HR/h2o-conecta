import { Feature } from "@/types/feature";
import { FaRobot } from "react-icons/fa";
import { SiOrganicmaps } from "react-icons/si";


const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <div className="fill-current" style={{ fontSize: '40px' }}>
        <FaRobot />
      </div>


    ),
    title: "Chatbot AI",
    paragraph:
      "Un asistente inteligente que responde tus preguntas sobre recursos hídricos, ofreciendo recomendaciones prácticas y datos actualizados.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
        />
        <path d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" />
      </svg>
    ),
    title: "Fuentes de Información",
    paragraph:
      "Accede a información confiable sobre los recursos hídricos del Perú, respaldada por datos oficiales de la Autoridad Nacional del Agua (ANA). Descubre estadísticas, guías y artículos educativos.",
  },
  {
    id: 1,
    icon: (
      <div className="fill-current" style={{ fontSize: '40px' }}>
        <SiOrganicmaps />
      </div>
    ),
    title: "Mapas Interactivos",
    paragraph:
      "Explora mapas dinámicos que muestran la ubicación de los recursos hídricos en Perú, como cuencas, lagos, ríos y puntos de monitoreo.",
  },
];
export default featuresData;
