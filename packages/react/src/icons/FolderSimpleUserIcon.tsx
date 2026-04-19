import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" strokeWidth="8" className="draw-line"/><circle cx="192" cy="176" r="24" strokeWidth="8" className="draw-line"/><path d="M120,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v32" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" strokeWidth="12" className="draw-line"/><circle cx="192" cy="176" r="24" strokeWidth="12" className="draw-line"/><path d="M120,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v32" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" strokeWidth="16" className="draw-line"/><circle cx="192" cy="176" r="24" strokeWidth="16" className="draw-line"/><path d="M120,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v32" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" strokeWidth="24" className="draw-line"/><circle cx="192" cy="176" r="24" strokeWidth="24" className="draw-line"/><path d="M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v20" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M231.73,221.94A8,8,0,0,1,224,232H160A8,8,0,0,1,152.27,222a40,40,0,0,1,17.11-23.33,32,32,0,1,1,45.24,0A40,40,0,0,1,231.73,221.94ZM216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16h80a8,8,0,0,0,0-16H40V64H93.33l27.74,20.8a16.12,16.12,0,0,0,9.6,3.2H216v32a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72Z" fill="currentColor"/></>,
  duotone: <><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" strokeWidth="16" className="draw-line"/><circle cx="192" cy="176" r="24" opacity="0.2" fill="currentColor"/><circle cx="192" cy="176" r="24" strokeWidth="16" className="draw-line"/><path d="M120,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v32" strokeWidth="16" className="draw-line"/></>,
};

export const FolderSimpleUserIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
