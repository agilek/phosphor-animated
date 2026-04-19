import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M80,120h80a40,40,0,0,1,0,80H80V48h68a36,36,0,0,1,0,72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M80,120h80a40,40,0,0,1,0,80H80V48h68a36,36,0,0,1,0,72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M80,120h80a40,40,0,0,1,0,80H80V48h68a36,36,0,0,1,0,72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M80,120h80a40,40,0,0,1,0,80H80V48h68a36,36,0,0,1,0,72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M80,120h80a40,40,0,0,1,0,80H80V48h68a36,36,0,0,1,0,72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const TextBIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
