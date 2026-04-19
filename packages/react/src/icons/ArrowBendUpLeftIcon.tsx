import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 152 32 104 80 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,200a96,96,0,0,0-96-96H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="80 152 32 104 80 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,200a96,96,0,0,0-96-96H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="80 152 32 104 80 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,200a96,96,0,0,0-96-96H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="80 152 32 104 80 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,200a96,96,0,0,0-96-96H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="80 152 32 104 80 56 80 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,200a96,96,0,0,0-96-96H80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowBendUpLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
