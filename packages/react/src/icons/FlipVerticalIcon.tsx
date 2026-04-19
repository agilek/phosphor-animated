import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M59.12,32.64A8,8,0,0,0,48,40v64a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z" strokeWidth="8" className="draw-line"/><path d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M59.12,32.64A8,8,0,0,0,48,40v64a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z" strokeWidth="12" className="draw-line"/><path d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M59.12,32.64A8,8,0,0,0,48,40v64a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z" strokeWidth="16" className="draw-line"/><path d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M59.12,32.64A8,8,0,0,0,48,40v60a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z" strokeWidth="24" className="draw-line"/><path d="M219.11,163.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v60a8,8,0,0,0,11.12,7.37Z" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M56,120H216a16,16,0,0,0,6.23-30.74l-.14-.06-159.93-64A16,16,0,0,0,40,40v64A16,16,0,0,0,56,120Zm0-80,.15.06L216,104H56l0-64ZM231.67,148.82a15.85,15.85,0,0,1-9.45,17.92l-.14.06-159.93,64A16,16,0,0,1,40,216V152a16,16,0,0,1,16-16H216A15.85,15.85,0,0,1,231.67,148.82Z" fill="currentColor"/></>,
  duotone: <><path d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z" opacity="0.2" fill="currentColor"/><path d="M59.12,32.64A8,8,0,0,0,48,40v64a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z" strokeWidth="16" className="draw-line"/><path d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z" strokeWidth="16" className="draw-line"/></>,
};

export const FlipVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
