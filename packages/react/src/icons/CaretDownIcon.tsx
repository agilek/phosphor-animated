import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="208 96 128 176 48 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="208 96 128 176 48 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="208 96 128 176 48 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="208 96 128 176 48 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="208 96 128 176 48 96 208 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CaretDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
