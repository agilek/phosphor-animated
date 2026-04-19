import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="56" y="112" width="144" height="72" rx="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,72a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="56" y="112" width="144" height="72" rx="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,72a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="56" y="112" width="144" height="72" rx="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,72a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="56" y="108" width="144" height="80" rx="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M20,72a24,24,0,0,1,48,0H188a24,24,0,0,1,48,0v76a76,76,0,0,1-76,76H96a76,76,0,0,1-76-76Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="56" y="112" width="144" height="72" rx="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,72a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FinnTheHumanIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
