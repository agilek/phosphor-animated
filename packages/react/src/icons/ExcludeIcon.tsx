import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><circle cx="96" cy="96" r="72" strokeWidth="8" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><circle cx="96" cy="96" r="72" strokeWidth="12" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="96" cy="96" r="72" strokeWidth="16" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="96" cy="96" r="72" strokeWidth="24" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M240,160A80,80,0,0,1,81.36,174.64a80,80,0,0,0,93.28-93.28A80,80,0,0,1,240,160ZM160,80a80.29,80.29,0,0,1,14.64,1.36,80,80,0,1,0-93.28,93.28A80,80,0,0,1,160,80Z" fill="currentColor"/></>,
  duotone: <><path d="M88,160a72,72,0,0,1,72-72,73.37,73.37,0,0,1,7.6.4,72,72,0,1,0-79.2,79.2A73.37,73.37,0,0,1,88,160Z" opacity="0.2" fill="currentColor"/><path d="M167.6,88.4A73.37,73.37,0,0,1,168,96a72,72,0,0,1-72,72,73.37,73.37,0,0,1-7.6-.4,72,72,0,1,0,79.2-79.2Z" opacity="0.2" fill="currentColor"/><circle cx="96" cy="96" r="72" strokeWidth="16" className="draw-line"/><circle cx="160" cy="160" r="72" strokeWidth="16" className="draw-line"/></>,
};

export const ExcludeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
