import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><polyline points="88 144 128 104 168 144" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><polyline points="88 144 128 104 168 144" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polyline points="88 144 128 104 168 144" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><polyline points="88 144 128 104 168 144" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,125.66a8,8,0,0,1-11.32,0L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0l40,40A8,8,0,0,1,173.66,149.66Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polyline points="88 144 128 104 168 144" strokeWidth="16" className="draw-line"/></>,
};

export const CaretCircleUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
