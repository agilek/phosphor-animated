import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><path d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M136,128a40,40,0,0,0,40,40h.32c7.83.3,14-1.46,21.24-6.11A12,12,0,0,1,216,172v36a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H200a16,16,0,0,1,16,16V84a12,12,0,0,1-18.47,10.1A40.23,40.23,0,0,0,136,128Z" fill="currentColor"/></>,
  duotone: <><path d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z" opacity="0.2" fill="currentColor"/><path d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const CodaLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
