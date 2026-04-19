import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><ellipse cx="128" cy="128" rx="64" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><ellipse cx="128" cy="128" rx="64" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><ellipse cx="128" cy="128" rx="64" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><ellipse cx="128" cy="128" rx="64" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><ellipse cx="128" cy="128" rx="64" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const NumberZeroIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
