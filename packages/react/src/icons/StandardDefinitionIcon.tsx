import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M144,176h24a48,48,0,0,0,0-96H144Z" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M48,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M144,176h24a48,48,0,0,0,0-96H144Z" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M48,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M144,176h24a48,48,0,0,0,0-96H144Z" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M48,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M148,176h24a48,48,0,0,0,0-96H148Z" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M44,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M192,128a32,32,0,0,1-32,32h-8V96h8A32,32,0,0,1,192,128Zm40-72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM120,148c0-19.88-19.92-25.35-34.47-29.34-12.06-3.31-20-5.84-20-10.66,0-6.73,8.1-12,18.44-12,8,0,14.85,3.13,17.42,8a8,8,0,1,0,14.13-7.51C110.16,86.31,98.07,80,84,80c-19.64,0-34.44,12-34.44,28,0,17.38,17.6,22.21,31.74,26.09,16,4.39,22.7,7.3,22.7,13.91,0,5.68-8.21,12-20,12s-20-6.32-20-12a8,8,0,0,0-16,0c0,15.7,15.81,28,36,28S120,163.7,120,148Zm88-20a48.05,48.05,0,0,0-48-48H144a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8h16A48.05,48.05,0,0,0,208,128Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="160" opacity="0.2" fill="currentColor"/><path d="M144,176h20a48,48,0,0,0,0-96H144Z" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M48,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" strokeWidth="16" className="draw-line"/></>,
};

export const StandardDefinitionIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
