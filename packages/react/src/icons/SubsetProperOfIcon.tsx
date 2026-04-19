import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const SubsetProperOfIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
