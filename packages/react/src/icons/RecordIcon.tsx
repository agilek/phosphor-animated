import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><circle cx="128" cy="128" r="64" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><circle cx="128" cy="128" r="64" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="64" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><circle cx="128" cy="128" r="52" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" fill="currentColor"/><circle cx="128" cy="128" r="72" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="64" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="64" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/></>,
};

export const RecordIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
