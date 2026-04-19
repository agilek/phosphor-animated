import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M56,216H85.29a32,32,0,0,0,31.49-26.28L139.22,66.28A32,32,0,0,1,170.71,40H200" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M56,216H85.29a32,32,0,0,0,31.49-26.28L139.22,66.28A32,32,0,0,1,170.71,40H200" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M56,216H85.29a32,32,0,0,0,31.49-26.28L139.22,66.28A32,32,0,0,1,170.71,40H200" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M56,216H85.29a32,32,0,0,0,31.49-26.28L139.22,66.28A32,32,0,0,1,170.71,40H200" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,72H159.92a16,16,0,0,0-15.73,13l-6.55,35H168a8,8,0,0,1,0,16H134.64l-7.11,37.9A32,32,0,0,1,96.08,200H80a8,8,0,0,1,0-16H96.08A16,16,0,0,0,111.81,171L118.36,136H88a8,8,0,0,1,0-16h33.36l7.11-37.9A32,32,0,0,1,159.92,56H176a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><path d="M72,40H200a0,0,0,0,1,0,0V200a16,16,0,0,1-16,16H56a0,0,0,0,1,0,0V56A16,16,0,0,1,72,40Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M56,216H85.29a32,32,0,0,0,31.49-26.28L139.22,66.28A32,32,0,0,1,170.71,40H200" strokeWidth="16" className="draw-line"/></>,
};

export const FunctionIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
