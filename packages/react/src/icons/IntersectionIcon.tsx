import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M56,200V120a72,72,0,0,1,144,0v80" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M56,200V120a72,72,0,0,1,144,0v80" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M56,200V120a72,72,0,0,1,144,0v80" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M56,200V120a72,72,0,0,1,144,0v80" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,176a8,8,0,0,1-16,0V120a40,40,0,0,0-80,0v56a8,8,0,0,1-16,0V120a56,56,0,0,1,112,0Z" fill="currentColor"/></>,
  duotone: <><path d="M56,200V120a72,72,0,0,1,144,0v80Z" opacity="0.2" fill="currentColor"/><path d="M56,200V120a72,72,0,0,1,144,0v80" strokeWidth="16" className="draw-line"/></>,
};

export const IntersectionIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
