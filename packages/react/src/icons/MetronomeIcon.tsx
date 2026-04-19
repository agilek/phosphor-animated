import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,216a8,8,0,0,1-7.63-10.43l50.91-160A8,8,0,0,1,106.91,40h42.18a8,8,0,0,1,7.62,5.57l50.91,160A8,8,0,0,1,200,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,216a8,8,0,0,1-7.63-10.43l50.91-160A8,8,0,0,1,106.91,40h42.18a8,8,0,0,1,7.62,5.57l50.91,160A8,8,0,0,1,200,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M56,216a8,8,0,0,1-7.63-10.43l50.91-160A8,8,0,0,1,106.91,40h42.18a8,8,0,0,1,7.62,5.57l50.91,160A8,8,0,0,1,200,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,216a8,8,0,0,1-7.63-10.43l50.91-160A8,8,0,0,1,106.91,40h42.18a8,8,0,0,1,7.62,5.57l50.91,160A8,8,0,0,1,200,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,216a8,8,0,0,1-7.63-10.43l50.91-160A8,8,0,0,1,106.91,40h42.18a8,8,0,0,1,7.62,5.57l50.91,160A8,8,0,0,1,200,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const MetronomeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
