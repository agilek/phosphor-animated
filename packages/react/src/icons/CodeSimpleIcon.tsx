import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 64 16 128 88 192" strokeWidth="8" className="draw-line"/><polyline points="168 64 240 128 168 192" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="88 64 16 128 88 192" strokeWidth="12" className="draw-line"/><polyline points="168 64 240 128 168 192" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="88 64 16 128 88 192" strokeWidth="16" className="draw-line"/><polyline points="168 64 240 128 168 192" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="88 64 16 128 88 192" strokeWidth="24" className="draw-line"/><polyline points="168 64 240 128 168 192" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM101.66,162.34a8,8,0,0,1-11.32,11.32l-40-40a8,8,0,0,1,0-11.32l40-40a8,8,0,0,1,11.32,11.32L67.31,128Zm104-28.68-40,40a8,8,0,0,1-11.32-11.32L188.69,128,154.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,205.66,133.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="168 192 240 128 168 64 88 64 16 128 88 192 168 192" opacity="0.2" fill="currentColor"/><polyline points="88 64 16 128 88 192" strokeWidth="16" className="draw-line"/><polyline points="168 64 240 128 168 192" strokeWidth="16" className="draw-line"/></>,
};

export const CodeSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
