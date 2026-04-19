import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><circle cx="76" cy="76" r="28" strokeWidth="8" className="draw-line"/><circle cx="180" cy="180" r="28" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><circle cx="76" cy="76" r="28" strokeWidth="12" className="draw-line"/><circle cx="180" cy="180" r="28" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><circle cx="76" cy="76" r="28" strokeWidth="16" className="draw-line"/><circle cx="180" cy="180" r="28" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><circle cx="76" cy="76" r="28" strokeWidth="24" className="draw-line"/><circle cx="180" cy="180" r="28" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M176,172a12,12,0,1,1-12-12A12,12,0,0,1,176,172ZM92,96A12,12,0,1,0,80,84,12,12,0,0,0,92,96ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM64,84A28,28,0,1,0,92,56,28,28,0,0,0,64,84Zm128,88a28,28,0,1,0-28,28A28,28,0,0,0,192,172ZM189.66,66.34a8,8,0,0,0-11.32,0l-112,112a8,8,0,0,0,11.32,11.32l112-112A8,8,0,0,0,189.66,66.34Z" fill="currentColor"/></>,
  duotone: <><circle cx="76" cy="76" r="28" opacity="0.2" fill="currentColor"/><circle cx="180" cy="180" r="28" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><circle cx="76" cy="76" r="28" strokeWidth="16" className="draw-line"/><circle cx="180" cy="180" r="28" strokeWidth="16" className="draw-line"/></>,
};

export const PercentIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
