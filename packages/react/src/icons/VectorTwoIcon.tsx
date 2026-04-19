import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="224 192 80 192 80 40" strokeWidth="8" className="draw-line"/><polyline points="192 160 224 192 192 224" strokeWidth="8" className="draw-line"/><polyline points="48 72 80 40 112 72" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="224 192 80 192 80 40" strokeWidth="12" className="draw-line"/><polyline points="192 160 224 192 192 224" strokeWidth="12" className="draw-line"/><polyline points="48 72 80 40 112 72" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="224 192 80 192 80 40" strokeWidth="16" className="draw-line"/><polyline points="192 160 224 192 192 224" strokeWidth="16" className="draw-line"/><polyline points="48 72 80 40 112 72" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="224 192 80 192 80 40" strokeWidth="24" className="draw-line"/><polyline points="192 160 224 192 192 224" strokeWidth="24" className="draw-line"/><polyline points="48 72 80 40 112 72" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M229.66,197.66l-32,32A8,8,0,0,1,184,224V200H80a8,8,0,0,1-8-8V80H48a8,8,0,0,1-5.66-13.66l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,112,80H88V184h96V160a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,229.66,197.66Z" fill="currentColor"/></>,
  duotone: <><path d="M80,40H208a16,16,0,0,1,16,16V192a0,0,0,0,1,0,0H80a0,0,0,0,1,0,0V40A0,0,0,0,1,80,40Z" opacity="0.2" fill="currentColor"/><polyline points="224 192 80 192 80 40" strokeWidth="16" className="draw-line"/><polyline points="192 160 224 192 192 224" strokeWidth="16" className="draw-line"/><polyline points="48 72 80 40 112 72" strokeWidth="16" className="draw-line"/></>,
};

export const VectorTwoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
