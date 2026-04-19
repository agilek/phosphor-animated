import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,16h0a64,64,0,0,1,64,64v96a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V80A64,64,0,0,1,128,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,184v48a16,16,0,0,1-16,16h0a16,16,0,0,1-16-16V184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M128,16h0a64,64,0,0,1,64,64v96a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V80a64,64,0,0,1,64-64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,184v48a16,16,0,0,1-16,16h0a16,16,0,0,1-16-16V184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M128,16h0a64,64,0,0,1,64,64v96a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V80A64,64,0,0,1,128,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,184v48a16,16,0,0,1-16,16h0a16,16,0,0,1-16-16V184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M128,16h0a64,64,0,0,1,64,64v96a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V80A64,64,0,0,1,128,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M148,184v40a20,20,0,0,1-20,20h0a20,20,0,0,1-20-20V184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,16h0a64,64,0,0,1,64,64v96a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V80A64,64,0,0,1,128,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,184v48a16,16,0,0,1-16,16h0a16,16,0,0,1-16-16V184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const PopsicleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
