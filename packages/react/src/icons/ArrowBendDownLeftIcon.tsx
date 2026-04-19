import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 104 32 152 80 200" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M224,56a96,96,0,0,1-96,96H32" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="80 104 32 152 80 200" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M224,56a96,96,0,0,1-96,96H32" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="80 104 32 152 80 200" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M224,56a96,96,0,0,1-96,96H32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="80 104 32 152 80 200" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M224,56a96,96,0,0,1-96,96H32" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M232,56A104.11,104.11,0,0,1,128,160H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,104v40h40a88.1,88.1,0,0,0,88-88,8,8,0,0,1,16,0Z" fill="currentColor"/></>,
  duotone: <><polygon points="80 104 32 152 80 200 80 104" opacity="0.2" fill="currentColor"/><polygon points="80 104 32 152 80 200 80 104" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M224,56a96,96,0,0,1-96,96H80" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowBendDownLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
