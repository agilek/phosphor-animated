import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="72" y="40" width="72" height="128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,168v72a72,72,0,0,1-72-72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M144,168h8a64,64,0,0,0,0-128h-8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="72" y="40" width="72" height="128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,168v72a72,72,0,0,1-72-72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M144,168h8a64,64,0,0,0,0-128h-8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="72" y="40" width="72" height="128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,168v72a72,72,0,0,1-72-72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M144,168h8a64,64,0,0,0,0-128h-8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="72" y="40" width="72" height="128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,168v72a72,72,0,0,1-72-72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M144,168h8a64,64,0,0,0,0-128h-8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="72" y="40" width="72" height="128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,168v72a72,72,0,0,1-72-72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M144,168h8a64,64,0,0,0,0-128h-8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const PhosphorLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
