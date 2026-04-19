import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="53.87" y="34.21" width="148.27" height="187.59" rx="8" transform="translate(24.22 -20.31) rotate(10.02)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="53.87" y="34.21" width="148.27" height="187.59" rx="8" transform="translate(24.22 -20.31) rotate(10.02)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="53.87" y="34.21" width="148.27" height="187.59" rx="8" transform="translate(24.22 -20.31) rotate(10.02)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="53.87" y="34.21" width="148.27" height="187.59" rx="8" transform="translate(24.22 -20.31) rotate(10.02)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="103.71 69.08 128 73.37 170.94 80.96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="53.87" y="34.21" width="148.27" height="187.59" rx="8" transform="translate(24.22 -20.31) rotate(10.02)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ReadCvLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
