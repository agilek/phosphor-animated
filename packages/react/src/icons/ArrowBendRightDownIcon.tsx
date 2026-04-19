import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="104 176 152 224 200 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,32a96,96,0,0,1,96,96v96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="104 176 152 224 200 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,32a96,96,0,0,1,96,96v96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="104 176 152 224 200 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,32a96,96,0,0,1,96,96v96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="104 176 152 224 200 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,32a96,96,0,0,1,96,96v96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="104 176 152 224 200 176 104 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,32a96,96,0,0,1,96,96v48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowBendRightDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
