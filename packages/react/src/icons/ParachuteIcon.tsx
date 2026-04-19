import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M224,120a96,96,0,0,0-192,0Z" strokeWidth="8" className="draw-line"/><polyline points="224 120 128 192 32 120" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M128,192,88,120c0-72,40-96,40-96s40,24,40,96Z" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M224,120a96,96,0,0,0-192,0Z" strokeWidth="12" className="draw-line"/><polyline points="224 120 128 192 32 120" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M128,192,88,120c0-72,40-96,40-96s40,24,40,96Z" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M224,120a96,96,0,0,0-192,0Z" strokeWidth="16" className="draw-line"/><polyline points="224 120 128 192 32 120" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M128,192,88,120c0-72,40-96,40-96s40,24,40,96Z" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M224,120a96,96,0,0,0-192,0Z" strokeWidth="24" className="draw-line"/><polyline points="224 120 128 192 32 120" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M88,120c0-72,40-96,40-96s40,24,40,96" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M232,120A104.12,104.12,0,0,0,128,16h0A104.12,104.12,0,0,0,24,120a8,8,0,0,0,3.21,6.39h0L120,196v20h-8a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16h-8V196l92.8-69.6h0A8,8,0,0,0,232,120Zm-16.36-8H175.83c-1.54-37.95-13.91-62.43-25.11-77A88.2,88.2,0,0,1,215.64,112ZM154.4,128,128,175.53,101.6,128Zm-71.11,0,19.5,35.09L56,128Zm89.42,0H200l-46.79,35.09ZM105.28,35c-11.2,14.57-23.57,39.05-25.11,77H40.36A88.2,88.2,0,0,1,105.28,35Z" fill="currentColor"/></>,
  duotone: <><path d="M128,24a96,96,0,0,0-96,96H88C88,48,128,24,128,24Z" opacity="0.2" fill="currentColor"/><path d="M128,24s40,24,40,96h56A96,96,0,0,0,128,24Z" opacity="0.2" fill="currentColor"/><path d="M224,120a96,96,0,0,0-192,0Z" strokeWidth="16" className="draw-line"/><polyline points="224 120 128 192 32 120" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M128,192,88,120c0-72,40-96,40-96s40,24,40,96Z" strokeWidth="16" className="draw-line"/></>,
};

export const ParachuteIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
