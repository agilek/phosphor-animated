import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="72" cy="128" r="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="184" cy="128" rx="24" ry="56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="72" cy="128" r="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="184" cy="128" rx="24" ry="56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="72" cy="128" r="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="184" cy="128" rx="24" ry="56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="68" cy="128" r="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="184" cy="128" rx="24" ry="56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="72" cy="128" r="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="184" cy="128" rx="24" ry="56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const MediumLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
