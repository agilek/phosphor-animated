import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M33.6,145.55a128,128,0,0,1,188.8,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M119.8,223.65,97.94,165.2a8,8,0,0,0-7.49-5.2h-53" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M136.15,223.66l21.9-58.47a8,8,0,0,1,7.5-5.19h53" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M33.6,145.55a128,128,0,0,1,188.8,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M119.8,223.65,97.94,165.2a8,8,0,0,0-7.49-5.2h-53" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M136.15,223.66l21.9-58.47a8,8,0,0,1,7.5-5.19h53" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M33.6,145.55a128,128,0,0,1,188.8,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M119.8,223.65,97.94,165.2a8,8,0,0,0-7.49-5.2h-53" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M136.15,223.66l21.9-58.47a8,8,0,0,1,7.5-5.19h53" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M33.6,145.55a128,128,0,0,1,188.8,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M139.26,223.35l18.79-50.16a8,8,0,0,1,7.5-5.19H215.3" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M116.69,223.34,97.94,173.2a8,8,0,0,0-7.49-5.2H40.7" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M33.6,145.55a128,128,0,0,1,188.8,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M119.8,223.65,97.94,165.2a8,8,0,0,0-7.49-5.2h-53" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M136.15,223.66l21.9-58.47a8,8,0,0,1,7.5-5.19h53" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const SteeringWheelIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
