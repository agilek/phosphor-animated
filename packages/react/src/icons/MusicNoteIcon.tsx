import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="88" cy="184" r="40" strokeWidth="8" className="draw-line"/><polyline points="128 184 128 40 208 64 208 112 128 88" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="88" cy="184" r="40" strokeWidth="12" className="draw-line"/><polyline points="128 184 128 40 208 64 208 112 128 88" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="88" cy="184" r="40" strokeWidth="16" className="draw-line"/><polyline points="128 184 128 40 208 64 208 112 128 88" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="88" cy="184" r="40" strokeWidth="24" className="draw-line"/><polyline points="128 184 128 40 208 64 208 112 128 88" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34Z" fill="currentColor"/></>,
  duotone: <><circle cx="88" cy="184" r="40" opacity="0.2" fill="currentColor"/><circle cx="88" cy="184" r="40" strokeWidth="16" className="draw-line"/><polyline points="128 184 128 40 208 64 208 112 128 88" strokeWidth="16" className="draw-line"/></>,
};

export const MusicNoteIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
