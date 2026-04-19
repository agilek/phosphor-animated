import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="232 128 232 184 128 184 128 72 24 72 24 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="232 128 232 184 128 184 128 72 24 72 24 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="232 128 232 184 128 184 128 72 24 72 24 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="232 128 232 184 128 184 128 72 24 72 24 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="232 128 232 184 128 184 128 72 24 72 24 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const WaveSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
