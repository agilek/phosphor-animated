import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M200,64v80a72,72,0,0,1-144,0V64" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M200,64v80a72,72,0,0,1-144,0V64" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M200,64v80a72,72,0,0,1-144,0V64" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M200,64v80a72,72,0,0,1-144,0V64" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136a56,56,0,0,1-112,0V80a8,8,0,0,1,16,0v56a40,40,0,0,0,80,0V80a8,8,0,0,1,16,0Z" fill="currentColor"/></>,
  duotone: <><path d="M200,64v80a72,72,0,0,1-144,0V64Z" opacity="0.2" fill="currentColor"/><path d="M200,64v80a72,72,0,0,1-144,0V64" strokeWidth="16" className="draw-line"/></>,
};

export const UnionIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
