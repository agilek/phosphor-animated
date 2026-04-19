import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="192" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="192" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="192" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="192" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="192" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const MedalMilitaryIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
