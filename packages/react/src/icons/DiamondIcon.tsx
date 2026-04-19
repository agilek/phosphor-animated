import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const DiamondIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
