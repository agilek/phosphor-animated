import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="144 192 80 56 16 192" strokeWidth="8" className="draw-line"/><ellipse cx="200" cy="164" rx="32" ry="28" strokeWidth="8" className="draw-line"/><path d="M232,192V132c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="144 192 80 56 16 192" strokeWidth="12" className="draw-line"/><ellipse cx="200" cy="164" rx="32" ry="28" strokeWidth="12" className="draw-line"/><path d="M232,192V132c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="144 192 80 56 16 192" strokeWidth="16" className="draw-line"/><ellipse cx="200" cy="164" rx="32" ry="28" strokeWidth="16" className="draw-line"/><path d="M232,192V132c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="144 192 80 56 16 192" strokeWidth="24" className="draw-line"/><ellipse cx="200" cy="164" rx="32" ry="28" strokeWidth="24" className="draw-line"/><path d="M232,192V124c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M200,156c0,6.5-7.33,12-16,12s-16-5.5-16-12,7.33-12,16-12S200,149.5,200,156ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM143.37,172.88l-44-104a8,8,0,0,0-14.74,0l-44,104a8,8,0,0,0,14.74,6.24L66.84,152h50.32l11.47,27.12a8,8,0,0,0,14.74-6.24ZM216,124c0-15.44-14.36-28-32-28a34.86,34.86,0,0,0-20.78,6.68,8,8,0,0,0,9.56,12.83A18.84,18.84,0,0,1,184,112c8.56,0,15.8,5.36,16,11.76v8A35.24,35.24,0,0,0,184,128c-17.64,0-32,12.56-32,28s14.36,28,32,28a35.13,35.13,0,0,0,16.93-4.26A8,8,0,0,0,216,176ZM73.61,136h36.78L92,92.53Z" fill="currentColor"/></>,
  duotone: <><ellipse cx="200" cy="164" rx="32" ry="28" opacity="0.2" fill="currentColor"/><polygon points="125.18 152 34.82 152 80 56 125.18 152" opacity="0.2" fill="currentColor"/><polyline points="144 192 80 56 16 192" strokeWidth="16" className="draw-line"/><ellipse cx="200" cy="164" rx="32" ry="28" strokeWidth="16" className="draw-line"/><path d="M232,192V132c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const TextAaIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
