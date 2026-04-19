import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 104 32 152 80 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,56a96,96,0,0,1-96,96H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="80 104 32 152 80 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,56a96,96,0,0,1-96,96H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="80 104 32 152 80 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,56a96,96,0,0,1-96,96H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="80 104 32 152 80 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,56a96,96,0,0,1-96,96H32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="80 104 32 152 80 200 80 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,56a96,96,0,0,1-96,96H80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowBendDownLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
