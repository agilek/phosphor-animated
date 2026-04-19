import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="144 64 144 112 192 112" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="64 144 112 144 112 192" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="144 64 144 112 192 112" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="64 144 112 144 112 192" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="144 64 144 112 192 112" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="64 144 112 144 112 192" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="148 60 148 108 196 108" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="60 148 108 148 108 196" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M213.66,53.66,179.31,88l18.35,18.34A8,8,0,0,1,192,120H144a8,8,0,0,1-8-8V64a8,8,0,0,1,13.66-5.66L168,76.69l34.34-34.35a8,8,0,0,1,11.32,11.32ZM112,136H64a8,8,0,0,0-5.66,13.66L76.69,168,42.34,202.34a8,8,0,0,0,11.32,11.32L88,179.31l18.34,18.35A8,8,0,0,0,120,192V144A8,8,0,0,0,112,136Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="32" width="192" height="192" rx="16" opacity="0.2" fill="currentColor"/><polyline points="144 64 144 112 192 112" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="64 144 112 144 112 192" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const ArrowsInSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
