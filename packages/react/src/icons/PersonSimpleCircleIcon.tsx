import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><circle cx="128" cy="80" r="12" fill="currentColor"/><line strokeWidth="8" className="draw-line"/><polyline points="160 184 128 136 96 184" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><circle cx="128" cy="80" r="14" fill="currentColor"/><line strokeWidth="12" className="draw-line"/><polyline points="160 184 128 136 96 184" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><circle cx="128" cy="80" r="16" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><polyline points="160 184 128 136 96 184" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><circle cx="128" cy="80" r="20" fill="currentColor"/><line strokeWidth="24" className="draw-line"/><polyline points="156 180 128 136 100 180" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,40a16,16,0,1,1-16,16A16,16,0,0,1,128,64Zm48,56H136v13.58l30.66,46a8,8,0,0,1-13.32,8.88l-25.34-38-25.34,38a8,8,0,1,1-13.32-8.88l30.66-46V120H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><circle cx="128" cy="80" r="16" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><polyline points="160 184 128 136 96 184" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const PersonSimpleCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
