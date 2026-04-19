import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ComputerTowerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
