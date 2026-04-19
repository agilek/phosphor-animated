import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M72,104V72a48,48,0,0,1,48-48h48a48,48,0,0,1,48,48v46.88a7.85,7.85,0,0,1-.31,2.2L200,176v40a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V176L33.75,138.19a8,8,0,0,1-1.75-5V104A24,24,0,0,1,56,80H72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M72,104V72a48,48,0,0,1,48-48h48a48,48,0,0,1,48,48v46.88a7.85,7.85,0,0,1-.31,2.2L200,176v40a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V176L33.75,138.19a8,8,0,0,1-1.75-5V104A24,24,0,0,1,56,80H72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M72,104V72a48,48,0,0,1,48-48h48a48,48,0,0,1,48,48v46.88a7.85,7.85,0,0,1-.31,2.2L200,176v40a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V176L33.75,138.19a8,8,0,0,1-1.75-5V104A24,24,0,0,1,56,80H72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M72,104V72a48,48,0,0,1,48-48h48a48,48,0,0,1,48,48v46.88a7.85,7.85,0,0,1-.31,2.2L200,176v40a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V176L33.75,138.19a8,8,0,0,1-1.75-5V104A24,24,0,0,1,56,80H72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M72,104V72a48,48,0,0,1,48-48h48a48,48,0,0,1,48,48v46.88a7.85,7.85,0,0,1-.31,2.2L200,176v40a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V176L33.75,138.19a8,8,0,0,1-1.75-5V104A24,24,0,0,1,56,80H72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BoxingGloveIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
