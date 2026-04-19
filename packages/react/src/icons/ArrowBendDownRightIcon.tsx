import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 104 224 152 176 200" strokeWidth="8" className="draw-line"/><path d="M32,56a96,96,0,0,0,96,96h96" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="176 104 224 152 176 200" strokeWidth="12" className="draw-line"/><path d="M32,56a96,96,0,0,0,96,96h96" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="176 104 224 152 176 200" strokeWidth="16" className="draw-line"/><path d="M32,56a96,96,0,0,0,96,96h96" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="176 104 224 152 176 200" strokeWidth="24" className="draw-line"/><path d="M32,56a96,96,0,0,0,96,96h96" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M229.66,157.66l-48,48A8,8,0,0,1,168,200V160H128A104.11,104.11,0,0,1,24,56a8,8,0,0,1,16,0,88.1,88.1,0,0,0,88,88h40V104a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,229.66,157.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="176 104 224 152 176 200 176 104" opacity="0.2" fill="currentColor"/><polygon points="176 104 224 152 176 200 176 104" strokeWidth="16" className="draw-line"/><path d="M32,56a96,96,0,0,0,96,96h48" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowBendDownRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
