import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="48 160 128 80 208 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="48 160 128 80 208 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="48 160 128 80 208 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="48 160 128 80 208 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="48 160 128 80 208 160 48 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CaretUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
