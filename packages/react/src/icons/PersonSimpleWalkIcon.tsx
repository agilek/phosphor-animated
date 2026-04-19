import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="152" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,129s56-52.65,88-24.87C153.94,119.67,168,144,208,144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 232 152 176 109.54 145.67" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="152" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,129s56-52.65,88-24.87C153.94,119.67,168,144,208,144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 232 152 176 109.54 145.67" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="152" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,129s56-52.65,88-24.87C153.94,119.67,168,144,208,144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 232 152 176 109.54 145.67" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="152" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,133s56-52.65,88-24.87C153.94,123.67,168,148,208,148" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 232 152 176 109.54 145.67" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="152" cy="48" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,129s56-52.65,88-24.87C153.94,119.67,168,144,208,144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 232 152 176 109.54 145.67" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const PersonSimpleWalkIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
