import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="168 152 232 152 232 88" strokeWidth="8" className="draw-line"/><path d="M32,184a96,96,0,0,1,163.88-67.88L232,152" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="168 152 232 152 232 88" strokeWidth="12" className="draw-line"/><path d="M32,184a96,96,0,0,1,163.88-67.88L232,152" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="168 152 232 152 232 88" strokeWidth="16" className="draw-line"/><path d="M32,184a96,96,0,0,1,163.88-67.88L232,152" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="168 152 232 152 232 88" strokeWidth="24" className="draw-line"/><path d="M32,184a96,96,0,0,1,163.88-67.88L232,152" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M240,88v64a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66l26.19-26.18A88,88,0,0,0,40,184a8,8,0,0,1-16,0,104,104,0,0,1,175.86-75.18l26.48-26.48A8,8,0,0,1,240,88Z" fill="currentColor"/></>,
  duotone: <><polygon points="168 152 232 152 232 88 168 152" opacity="0.2" fill="currentColor"/><polygon points="168 152 232 152 232 88 168 152" strokeWidth="16" className="draw-line"/><path d="M32,184a96,96,0,0,1,163.88-67.88L200,120" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowArcRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
