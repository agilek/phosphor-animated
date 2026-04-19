import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,130.42c72-89.55,104,84.71,176-4.84" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M40,130.42c72-89.55,104,84.71,176-4.84" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M40,130.42c72-89.55,104,84.71,176-4.84" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M40,130.42c72-89.55,104,84.71,176-4.84" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M40,130.42c72-89.55,104,84.71,176-4.84" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const TildeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
