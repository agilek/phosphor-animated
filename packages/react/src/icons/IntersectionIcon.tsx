import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M56,200V120a72,72,0,0,1,144,0v80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M56,200V120a72,72,0,0,1,144,0v80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M56,200V120a72,72,0,0,1,144,0v80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M56,200V120a72,72,0,0,1,144,0v80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M56,200V120a72,72,0,0,1,144,0v80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const IntersectionIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
