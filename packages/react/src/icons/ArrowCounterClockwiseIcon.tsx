import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="24 56 24 104 72 104" strokeWidth="8" className="draw-line"/><path d="M67.59,192A88,88,0,1,0,65.77,65.77L24,104" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="24 56 24 104 72 104" strokeWidth="12" className="draw-line"/><path d="M67.59,192A88,88,0,1,0,65.77,65.77L24,104" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="24 56 24 104 72 104" strokeWidth="16" className="draw-line"/><path d="M67.59,192A88,88,0,1,0,65.77,65.77L24,104" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="24 56 24 104 72 104" strokeWidth="24" className="draw-line"/><path d="M67.59,192A88,88,0,1,0,65.77,65.77L24,104" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L60.63,81.29l17,17A8,8,0,0,1,72,112H24a8,8,0,0,1-8-8V56A8,8,0,0,1,29.66,50.3L49.31,70,60.25,60A96,96,0,0,1,224,128Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="88" opacity="0.2" fill="currentColor"/><polyline points="24 56 24 104 72 104" strokeWidth="16" className="draw-line"/><path d="M67.59,192A88,88,0,1,0,65.77,65.77L24,104" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowCounterClockwiseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
