import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><ellipse cx="128" cy="128" rx="110.47" ry="78.91" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M206.11,49.89c-24.51,5-66.9,22-78.11,78.11s-53.6,73.09-78.11,78.11" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><ellipse cx="128" cy="128" rx="110.47" ry="78.91" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M206.11,49.89c-24.51,5-66.9,22-78.11,78.11s-53.6,73.09-78.11,78.11" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><ellipse cx="128" cy="128" rx="110.47" ry="78.91" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M206.11,49.89c-24.51,5-66.9,22-78.11,78.11s-53.6,73.09-78.11,78.11" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><ellipse cx="128" cy="128" rx="110.47" ry="78.91" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M206.11,49.89c-24.51,5-66.9,22-78.11,78.11s-53.6,73.09-78.11,78.11" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><ellipse cx="128" cy="128" rx="110.47" ry="78.91" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M206.11,49.89c-24.51,5-66.9,22-78.11,78.11s-53.6,73.09-78.11,78.11" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CoffeeBeanIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
