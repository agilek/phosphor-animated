import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="108" cy="100" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="108" cy="100" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="108" cy="100" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="108" cy="100" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="108" cy="100" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const UserPlusIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
