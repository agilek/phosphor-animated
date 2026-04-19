import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 152 32 104 80 56" strokeWidth="8" className="draw-line"/><path d="M224,200a96,96,0,0,0-96-96H32" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="80 152 32 104 80 56" strokeWidth="12" className="draw-line"/><path d="M224,200a96,96,0,0,0-96-96H32" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="80 152 32 104 80 56" strokeWidth="16" className="draw-line"/><path d="M224,200a96,96,0,0,0-96-96H32" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="80 152 32 104 80 56" strokeWidth="24" className="draw-line"/><path d="M224,200a96,96,0,0,0-96-96H32" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,56V96h40A104.11,104.11,0,0,1,232,200Z" fill="currentColor"/></>,
  duotone: <><polygon points="80 152 32 104 80 56 80 152" opacity="0.2" fill="currentColor"/><polygon points="80 152 32 104 80 56 80 152" strokeWidth="16" className="draw-line"/><path d="M224,200a96,96,0,0,0-96-96H80" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowBendUpLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
