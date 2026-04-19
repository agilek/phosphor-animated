import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><circle cx="92" cy="108" r="8" fill="currentColor"/><circle cx="164" cy="108" r="8" fill="currentColor"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><circle cx="92" cy="108" r="10" fill="currentColor"/><circle cx="164" cy="108" r="10" fill="currentColor"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><circle cx="92" cy="108" r="12" fill="currentColor"/><circle cx="164" cy="108" r="12" fill="currentColor"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><circle cx="92" cy="108" r="16" fill="currentColor"/><circle cx="164" cy="108" r="16" fill="currentColor"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm76,72H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm-4-48a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><circle cx="92" cy="108" r="12" fill="currentColor"/><circle cx="164" cy="108" r="12" fill="currentColor"/></>,
};

export const SmileyMehIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
