import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" strokeWidth="8" className="draw-line"/><path d="M88,32H192a8,8,0,0,1,8,8V192" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" strokeWidth="12" className="draw-line"/><path d="M88,32H192a8,8,0,0,1,8,8V192" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" strokeWidth="16" className="draw-line"/><path d="M88,32H192a8,8,0,0,1,8,8V192" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M164,228l-56-40L52,228V76a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" strokeWidth="24" className="draw-line"/><path d="M92,28H196a8,8,0,0,1,8,8V188" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M160,56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V72A16,16,0,0,0,160,56Z" fill="currentColor"/><path d="M192,24H88a8,8,0,0,0,0,16H192V192a8,8,0,0,0,16,0V40A16,16,0,0,0,192,24Z" fill="currentColor"/></>,
  duotone: <><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" opacity="0.2" fill="currentColor"/><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" strokeWidth="16" className="draw-line"/><path d="M88,32H192a8,8,0,0,1,8,8V192" strokeWidth="16" className="draw-line"/></>,
};

export const BookmarksSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
