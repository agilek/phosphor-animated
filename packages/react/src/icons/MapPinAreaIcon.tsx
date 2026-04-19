import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,155.14c19.72,7.28,32,17.52,32,28.86,0,22.09-46.56,40-104,40S24,206.09,24,184c0-11.34,12.28-21.58,32-28.86" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,155.14c19.72,7.28,32,17.52,32,28.86,0,22.09-46.56,40-104,40S24,206.09,24,184c0-11.34,12.28-21.58,32-28.86" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,155.14c19.72,7.28,32,17.52,32,28.86,0,22.09-46.56,40-104,40S24,206.09,24,184c0-11.34,12.28-21.58,32-28.86" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M204,156.69c17.37,7.15,28,16.75,28,27.31,0,22.09-46.56,40-104,40S24,206.09,24,184c0-10.56,10.63-20.16,28-27.31" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,155.14c19.72,7.28,32,17.52,32,28.86,0,22.09-46.56,40-104,40S24,206.09,24,184c0-11.34,12.28-21.58,32-28.86" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const MapPinAreaIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
