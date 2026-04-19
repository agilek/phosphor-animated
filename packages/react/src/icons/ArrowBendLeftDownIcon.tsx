import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="152 176 104 224 56 176" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,32a96,96,0,0,0-96,96v96" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="152 176 104 224 56 176" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,32a96,96,0,0,0-96,96v96" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="152 176 104 224 56 176" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,32a96,96,0,0,0-96,96v96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="152 176 104 224 56 176" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,32a96,96,0,0,0-96,96v96" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,32a8,8,0,0,1-8,8,88.1,88.1,0,0,0-88,88v40h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,56,168H96V128A104.11,104.11,0,0,1,200,24,8,8,0,0,1,208,32Z" fill="currentColor"/></>,
  duotone: <><polygon points="152 176 104 224 56 176 152 176" opacity="0.2" fill="currentColor"/><polygon points="152 176 104 224 56 176 152 176" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M200,32a96,96,0,0,0-96,96v48" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowBendLeftDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
