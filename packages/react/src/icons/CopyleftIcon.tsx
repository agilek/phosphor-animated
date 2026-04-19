import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><path d="M96,104a40,40,0,1,1,0,48" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><path d="M96,104a40,40,0,1,1,0,48" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><path d="M96,104a40,40,0,1,1,0,48" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><path d="M96,104a40,40,0,1,1,0,48" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,56a72,72,0,1,0,72,72A72.08,72.08,0,0,0,128,56Zm0,120a47.66,47.66,0,0,1-38.4-19.19,8,8,0,0,1,12.8-9.61,32,32,0,1,0,0-38.4,8,8,0,0,1-12.8-9.61A48,48,0,1,1,128,176Zm0-152A104,104,0,1,0,232,128,104,104,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><path d="M96,104a40,40,0,1,1,0,48" strokeWidth="16" className="draw-line"/></>,
};

export const CopyleftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
