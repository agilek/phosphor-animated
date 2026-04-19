import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="128 160 176 216 80 216 128 160" strokeWidth="8" className="draw-line"/><path d="M56,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-8" strokeWidth="8" className="draw-line"/></>,
  light: <><polygon points="128 160 176 216 80 216 128 160" strokeWidth="12" className="draw-line"/><path d="M56,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-8" strokeWidth="12" className="draw-line"/></>,
  regular: <><polygon points="128 160 176 216 80 216 128 160" strokeWidth="16" className="draw-line"/><path d="M56,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-8" strokeWidth="16" className="draw-line"/></>,
  bold: <><polygon points="128 160 176 216 80 216 128 160" strokeWidth="24" className="draw-line"/><path d="M52,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-4" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M174.15,210.88A8,8,0,0,1,168,224H88a8,8,0,0,1-6.15-13.12l40-48a8,8,0,0,1,12.29,0ZM208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H68.22a4,4,0,0,0,3.07-1.44l38.28-45.92a24,24,0,0,1,21-8.51,24.68,24.68,0,0,1,16.25,8.94l37.91,45.49a4,4,0,0,0,3.07,1.44H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Z" fill="currentColor"/></>,
  duotone: <><path d="M208,48H48A16,16,0,0,0,32,64V176a16,16,0,0,0,16,16h52.57L128,160l27.43,32H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Z" opacity="0.2" fill="currentColor"/><polygon points="128 160 176 216 80 216 128 160" strokeWidth="16" className="draw-line"/><path d="M56,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-8" strokeWidth="16" className="draw-line"/></>,
};

export const AirplayIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
