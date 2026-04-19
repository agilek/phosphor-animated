import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" strokeWidth="8" className="draw-line"/><polyline points="144 96 96 96 96 144" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" strokeWidth="12" className="draw-line"/><polyline points="144 96 96 96 96 144" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" strokeWidth="16" className="draw-line"/><polyline points="144 96 96 96 96 144" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" strokeWidth="24" className="draw-line"/><polyline points="144 96 96 96 96 144" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM165.66,165.66a8,8,0,0,1-11.32,0L104,115.31V144a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H115.31l50.35,50.34A8,8,0,0,1,165.66,165.66Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" strokeWidth="16" className="draw-line"/><polyline points="144 96 96 96 96 144" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const ArrowSquareUpLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
