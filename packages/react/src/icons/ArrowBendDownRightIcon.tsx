import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 104 224 152 176 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,56a96,96,0,0,0,96,96h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="176 104 224 152 176 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,56a96,96,0,0,0,96,96h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="176 104 224 152 176 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,56a96,96,0,0,0,96,96h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="176 104 224 152 176 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,56a96,96,0,0,0,96,96h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="176 104 224 152 176 200 176 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,56a96,96,0,0,0,96,96h48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowBendDownRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
