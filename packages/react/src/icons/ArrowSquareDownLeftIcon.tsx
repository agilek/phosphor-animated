import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" strokeWidth="8" className="draw-line"/><polyline points="96 112 96 160 144 160" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" strokeWidth="12" className="draw-line"/><polyline points="96 112 96 160 144 160" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" strokeWidth="16" className="draw-line"/><polyline points="96 112 96 160 144 160" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" strokeWidth="24" className="draw-line"/><polyline points="96 112 96 160 144 160" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-42.34,69.66L115.31,152H144a8,8,0,0,1,0,16H96a8,8,0,0,1-8-8V112a8,8,0,0,1,16,0v28.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" strokeWidth="16" className="draw-line"/><polyline points="96 112 96 160 144 160" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const ArrowSquareDownLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
