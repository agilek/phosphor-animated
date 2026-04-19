import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,200H187.72a8,8,0,0,0,6.65-3.56L240,128,194.37,59.56A8,8,0,0,0,187.72,56H32l48,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M32,200H187.72a8,8,0,0,0,6.65-3.56L240,128,194.37,59.56A8,8,0,0,0,187.72,56H32l48,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M32,200H187.72a8,8,0,0,0,6.65-3.56L240,128,194.37,59.56A8,8,0,0,0,187.72,56H32l48,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M32,200H187.72a8,8,0,0,0,6.65-3.56L240,128,194.37,59.56A8,8,0,0,0,187.72,56H32l48,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M32,200H187.72a8,8,0,0,0,6.65-3.56L240,128,194.37,59.56A8,8,0,0,0,187.72,56H32l48,72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const TagChevronIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
