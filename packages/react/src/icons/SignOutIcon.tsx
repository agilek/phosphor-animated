import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="112 40 48 40 48 216 112 216" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="184 88 224 128 184 168" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="112 40 48 40 48 216 112 216" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="184 88 224 128 184 168" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="112 40 48 40 48 216 112 216" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="184 88 224 128 184 168" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="112 40 48 40 48 216 112 216" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="184 88 224 128 184 168" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40A8,8,0,0,0,176,88v32H112a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,229.66,122.34Z" fill="currentColor"/></>,
  duotone: <><path d="M48,40H208a16,16,0,0,1,16,16V200a16,16,0,0,1-16,16H48a0,0,0,0,1,0,0V40A0,0,0,0,1,48,40Z" opacity="0.2" fill="currentColor"/><polyline points="112 40 48 40 48 216 112 216" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="184 88 224 128 184 168" strokeWidth="16" className="draw-line"/></>,
};

export const SignOutIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
