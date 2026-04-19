import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M80,134.87,170.26,214a8,8,0,0,0,13.09-4.21L224,33.22a1,1,0,0,0-1.34-1.15L20,111.38A6.23,6.23,0,0,0,21,123.3Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M80,134.87,170.26,214a8,8,0,0,0,13.09-4.21L224,33.22a1,1,0,0,0-1.34-1.15L20,111.38A6.23,6.23,0,0,0,21,123.3Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M80,134.87,170.26,214a8,8,0,0,0,13.09-4.21L224,33.22a1,1,0,0,0-1.34-1.15L20,111.38A6.23,6.23,0,0,0,21,123.3Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M80,134.87,170.26,214a8,8,0,0,0,13.09-4.21L224,33.22a1,1,0,0,0-1.34-1.15L20,111.38A6.23,6.23,0,0,0,21,123.3Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M80,134.87,170.26,214a8,8,0,0,0,13.09-4.21L224,33.22a1,1,0,0,0-1.34-1.15L20,111.38A6.23,6.23,0,0,0,21,123.3Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const TelegramLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
