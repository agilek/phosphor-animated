import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M56,80h48L76,120a28,28,0,1,1-20,47.6" strokeWidth="8" className="draw-line"/><path d="M136,176h24a48,48,0,0,0,0-96H136Z" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M56,80h48L76,120a28,28,0,1,1-20,47.6" strokeWidth="12" className="draw-line"/><path d="M136,176h24a48,48,0,0,0,0-96H136Z" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M56,80h48L76,120a28,28,0,1,1-20,47.6" strokeWidth="16" className="draw-line"/><path d="M136,176h24a48,48,0,0,0,0-96H136Z" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M52,80h48L72,120a28,28,0,1,1-20,47.6" strokeWidth="24" className="draw-line"/><path d="M140,176h24a48,48,0,0,0,0-96H140Z" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M184,128a32,32,0,0,1-32,32h-8V96h8A32,32,0,0,1,184,128Zm48-72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM112,144a32,32,0,0,0-18.31-28.92L110.4,92.8A8,8,0,0,0,104,80H64a8,8,0,0,0,0,16H88L73.6,115.2A8,8,0,0,0,80,128a16,16,0,1,1-10.66,27.93,8,8,0,1,0-10.68,11.92A32,32,0,0,0,112,144Zm88-16a48.05,48.05,0,0,0-48-48H136a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8h16A48.05,48.05,0,0,0,200,128Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="160" opacity="0.2" fill="currentColor"/><path d="M56,80h48L76,120a28,28,0,1,1-20,47.6" strokeWidth="16" className="draw-line"/><path d="M136,176h24a48,48,0,0,0,0-96H136Z" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const ThreeDIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
