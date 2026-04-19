import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 152 32 104 80 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 152 80 104 128 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,200a96,96,0,0,0-96-96H80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="80 152 32 104 80 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 152 80 104 128 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,200a96,96,0,0,0-96-96H80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="80 152 32 104 80 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 152 80 104 128 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,200a96,96,0,0,0-96-96H80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="80 152 32 104 80 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 152 88 104 136 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,200a96,96,0,0,0-96-96H88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="80 152 32 104 80 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 152 80 104 128 56 128 152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,200a96,96,0,0,0-96-96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowBendDoubleUpLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
