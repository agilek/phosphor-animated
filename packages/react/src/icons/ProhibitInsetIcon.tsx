import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,141.66a8,8,0,0,1-11.32,0l-64-64a8,8,0,0,1,11.32-11.32l64,64A8,8,0,0,1,165.66,165.66Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/></>,
};

export const ProhibitInsetIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
