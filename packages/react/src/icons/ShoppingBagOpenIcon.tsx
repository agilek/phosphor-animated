import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M168,112a40,40,0,0,1-80,0" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M168,112a40,40,0,0,1-80,0" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M168,112a40,40,0,0,1-80,0" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M168,124a40,40,0,0,1-80,0" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM128,160a48.05,48.05,0,0,1-48-48,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0A48.05,48.05,0,0,1,128,160ZM40,72V56H216V72Z" fill="currentColor"/></>,
  duotone: <><path d="M32,80H224V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8Z" opacity="0.2" fill="currentColor"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M168,112a40,40,0,0,1-80,0" strokeWidth="16" className="draw-line"/></>,
};

export const ShoppingBagOpenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
