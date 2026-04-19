import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M88,48h80l-48,64a48,48,0,1,1-32,83.78" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M88,48h80l-48,64a48,48,0,1,1-32,83.78" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M88,48h80l-48,64a48,48,0,1,1-32,83.78" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M88,48h80l-48,64a48,48,0,1,1-32,83.78" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M88,48h80l-48,64a48,48,0,1,1-32,83.78" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const NumberThreeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
