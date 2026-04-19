import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><polyline points="160 152 88 152 144 80 144 176" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><polyline points="160 152 88 152 144 80 144 176" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polyline points="160 152 88 152 144 80 144 176" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><polyline points="160 152 88 152 144 80 144 176" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M104.36,144,136,103.32V144ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-64,24a8,8,0,0,0-8-8h-8V80a8,8,0,0,0-14.31-4.91l-56,72A8,8,0,0,0,88,160h48v16a8,8,0,0,0,16,0V160h8A8,8,0,0,0,168,152Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polyline points="160 152 88 152 144 80 144 176" strokeWidth="16" className="draw-line"/></>,
};

export const NumberCircleFourIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
