import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="104 176 152 224 200 176" strokeWidth="8" className="draw-line"/><path d="M56,32a96,96,0,0,1,96,96v96" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="104 176 152 224 200 176" strokeWidth="12" className="draw-line"/><path d="M56,32a96,96,0,0,1,96,96v96" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="104 176 152 224 200 176" strokeWidth="16" className="draw-line"/><path d="M56,32a96,96,0,0,1,96,96v96" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="104 176 152 224 200 176" strokeWidth="24" className="draw-line"/><path d="M56,32a96,96,0,0,1,96,96v96" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M205.66,181.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,104,168h40V128A88.1,88.1,0,0,0,56,40a8,8,0,0,1,0-16A104.11,104.11,0,0,1,160,128v40h40a8,8,0,0,1,5.66,13.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="104 176 152 224 200 176 104 176" opacity="0.2" fill="currentColor"/><polygon points="104 176 152 224 200 176 104 176" strokeWidth="16" className="draw-line"/><path d="M56,32a96,96,0,0,1,96,96v48" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowBendRightDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
