import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M200,64v80a72,72,0,0,1-144,0V64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M200,64v80a72,72,0,0,1-144,0V64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M200,64v80a72,72,0,0,1-144,0V64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M200,64v80a72,72,0,0,1-144,0V64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M200,64v80a72,72,0,0,1-144,0V64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const UnionIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
