import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM168,96v64a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h64A8,8,0,0,1,168,96Z" fill="currentColor"/></>,
  duotone: <><rect x="96" y="96" width="64" height="64" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const SquareLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
