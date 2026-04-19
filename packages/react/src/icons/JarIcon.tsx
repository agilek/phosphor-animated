import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="48" y="56" width="160" height="176" rx="32" strokeWidth="8" className="draw-line"/><path d="M80,56V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V56" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="48" y="56" width="160" height="176" rx="32" strokeWidth="12" className="draw-line"/><path d="M80,56V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V56" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="48" y="56" width="160" height="176" rx="32" strokeWidth="16" className="draw-line"/><path d="M80,56V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V56" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="48" y="60" width="160" height="172" rx="32" strokeWidth="24" className="draw-line"/><path d="M80,60V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V60" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM120,48V32h16V48Zm48,0H152V32h16ZM104,32V48H88V32Z" fill="currentColor"/></>,
  duotone: <><rect x="48" y="56" width="160" height="176" rx="32" opacity="0.2" fill="currentColor"/><rect x="48" y="56" width="160" height="176" rx="32" strokeWidth="16" className="draw-line"/><path d="M80,56V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V56" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const JarIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
