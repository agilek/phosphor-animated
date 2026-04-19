import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="80" y="64" width="96" height="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="160" rx="8" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="80" y="64" width="96" height="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="160" rx="8" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="80" y="64" width="96" height="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="160" rx="8" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="8" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="80" y="64" width="96" height="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48.01" width="192" height="160" rx="8" transform="translate(256.01 0.01) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CalculatorIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
