import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M229.66,141.66l-96,96a8,8,0,0,1-11.32,0l-96-96A8,8,0,0,1,32,128H72V48A16,16,0,0,1,88,32h80a16,16,0,0,1,16,16v80h40a8,8,0,0,1,5.66,13.66Z" fill="currentColor"/></>,
  duotone: <><path d="M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z" opacity="0.2" fill="currentColor"/><path d="M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const ArrowFatDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
