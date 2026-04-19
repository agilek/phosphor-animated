import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="112 96 160 96 160 144" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="112 96 160 96 160 144" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="112 96 160 96 160 144" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="112 96 160 96 160 144" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,120a8,8,0,0,1-16,0V115.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L140.69,104H112a8,8,0,0,1,0-16h48a8,8,0,0,1,8,8Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="112 96 160 96 160 144" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowCircleUpRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
