import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,208H88l96-104h40a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H168L72,152H32a8,8,0,0,0-8,8v40A8,8,0,0,0,32,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 176 200 152 224 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M32,208H88l96-104h40a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H168L72,152H32a8,8,0,0,0-8,8v40A8,8,0,0,0,32,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 176 200 152 224 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M32,208H88l96-104h40a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H168L72,152H32a8,8,0,0,0-8,8v40A8,8,0,0,0,32,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 176 200 152 224 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M32,208H88l96-104h40a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H168L72,152H32a8,8,0,0,0-8,8v40A8,8,0,0,0,32,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 176 200 152 224 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M32,208H88l96-104h40a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H168L72,152H32a8,8,0,0,0-8,8v40A8,8,0,0,0,32,208Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="176 176 200 152 224 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const EscalatorUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
