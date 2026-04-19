import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M146,90l54,54s-72,92-176,68L198.2,37.8a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M146,90l54,54s-72,92-176,68L198.2,37.8a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M146,90l54,54s-72,92-176,68L198.2,37.8a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M146,90l54,54s-72,92-176,68L198.2,37.8a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M146,90l54,54s-72,92-176,68L198.2,37.8a19.8,19.8,0,0,1,28,0h0a19.8,19.8,0,0,1,0,28L174,118" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const KnifeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
