import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="96 48 176 128 96 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="96 48 176 128 96 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="96 48 176 128 96 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="96 48 176 128 96 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="96 48 176 128 96 208 96 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CaretRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
