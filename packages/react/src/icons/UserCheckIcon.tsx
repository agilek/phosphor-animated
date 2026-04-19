import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="108" cy="100" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="200 144 216 160 248 128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="108" cy="100" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="200 144 216 160 248 128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="108" cy="100" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="200 144 216 160 248 128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="108" cy="100" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="196 144 212 160 244 128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="108" cy="100" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="200 144 216 160 248 128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const UserCheckIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
