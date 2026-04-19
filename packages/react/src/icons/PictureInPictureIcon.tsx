import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="56" width="192" height="144" rx="8" strokeWidth="8" className="draw-line"/><polyline points="136 200 136 128 224 128" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="32" y="56" width="192" height="144" rx="8" strokeWidth="12" className="draw-line"/><polyline points="136 200 136 128 224 128" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="32" y="56" width="192" height="144" rx="8" strokeWidth="16" className="draw-line"/><polyline points="136 200 136 128 224 128" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="32" y="56" width="192" height="144" rx="8" strokeWidth="24" className="draw-line"/><polyline points="136 200 136 128 224 128" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48Zm0,144H136V128h80v64Z" fill="currentColor"/></>,
  duotone: <><path d="M216,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8h96V128h88V64A8,8,0,0,0,216,56Z" opacity="0.2" fill="currentColor"/><rect x="32" y="56" width="192" height="144" rx="8" strokeWidth="16" className="draw-line"/><polyline points="136 200 136 128 224 128" strokeWidth="16" className="draw-line"/></>,
};

export const PictureInPictureIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
