import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 152 224 104 176 56" strokeWidth="8" className="draw-line"/><path d="M32,200a96,96,0,0,1,96-96h96" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="176 152 224 104 176 56" strokeWidth="12" className="draw-line"/><path d="M32,200a96,96,0,0,1,96-96h96" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="176 152 224 104 176 56" strokeWidth="16" className="draw-line"/><path d="M32,200a96,96,0,0,1,96-96h96" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="176 152 224 104 176 56" strokeWidth="24" className="draw-line"/><path d="M32,200a96,96,0,0,1,96-96h96" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M229.66,109.66l-48,48A8,8,0,0,1,168,152V112H128a88.1,88.1,0,0,0-88,88,8,8,0,0,1-16,0A104.11,104.11,0,0,1,128,96h40V56a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,229.66,109.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="176 152 224 104 176 56 176 152" opacity="0.2" fill="currentColor"/><polygon points="176 152 224 104 176 56 176 152" strokeWidth="16" className="draw-line"/><path d="M32,200a96,96,0,0,1,96-96h48" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowBendUpRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
