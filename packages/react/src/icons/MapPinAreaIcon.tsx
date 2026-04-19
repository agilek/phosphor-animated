import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="80" r="12" fill="currentColor"/><path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,155.14c19.72,7.28,32,17.52,32,28.86,0,22.09-46.56,40-104,40S24,206.09,24,184c0-11.34,12.28-21.58,32-28.86" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="80" r="14" fill="currentColor"/><path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,155.14c19.72,7.28,32,17.52,32,28.86,0,22.09-46.56,40-104,40S24,206.09,24,184c0-11.34,12.28-21.58,32-28.86" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="80" r="16" fill="currentColor"/><path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,155.14c19.72,7.28,32,17.52,32,28.86,0,22.09-46.56,40-104,40S24,206.09,24,184c0-11.34,12.28-21.58,32-28.86" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="80" r="20" fill="currentColor"/><path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M204,156.69c17.37,7.15,28,16.75,28,27.31,0,22.09-46.56,40-104,40S24,206.09,24,184c0-10.56,10.63-20.16,28-27.31" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M124,175a8,8,0,0,0,7.94,0c2.45-1.41,60-35,60-94.95A64,64,0,0,0,64,80C64,140,121.58,173.54,124,175ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56ZM240,184c0,31.18-57.71,48-112,48S16,215.18,16,184c0-14.59,13.22-27.51,37.23-36.37a8,8,0,0,1,5.54,15C42.26,168.74,32,176.92,32,184c0,13.36,36.52,32,96,32s96-18.64,96-32c0-7.08-10.26-15.26-26.77-21.36a8,8,0,0,1,5.54-15C226.78,156.49,240,169.41,240,184Z" fill="currentColor"/></>,
  duotone: <><path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="80" r="16" fill="currentColor"/><path d="M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,155.14c19.72,7.28,32,17.52,32,28.86,0,22.09-46.56,40-104,40S24,206.09,24,184c0-11.34,12.28-21.58,32-28.86" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const MapPinAreaIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
