import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H240a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,229.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H240a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,229.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H240a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,229.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H236a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,225.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H240a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,229.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const HighHeelIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
