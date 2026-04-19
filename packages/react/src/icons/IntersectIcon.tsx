import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="96" cy="96" r="72" strokeWidth="8" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="96" cy="96" r="72" strokeWidth="12" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="96" cy="96" r="72" strokeWidth="16" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="96" cy="96" r="72" strokeWidth="24" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM32,96a64,64,0,0,1,126-16A80.08,80.08,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96ZM160,224A64.11,64.11,0,0,1,98,176,80.08,80.08,0,0,0,176,98,64,64,0,0,1,160,224Z" fill="currentColor"/></>,
  duotone: <><path d="M88,160a73.37,73.37,0,0,0,.4,7.6,73.37,73.37,0,0,0,7.6.4,72,72,0,0,0,72-72,73.37,73.37,0,0,0-.4-7.6A73.37,73.37,0,0,0,160,88,72,72,0,0,0,88,160Z" opacity="0.2" fill="currentColor"/><circle cx="96" cy="96" r="72" strokeWidth="16" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="16" className="draw-line"/></>,
};

export const IntersectIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
