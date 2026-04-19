import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" strokeWidth="8" className="draw-line"/><path d="M136,192c20-3.37,36.61-20,40-40" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" strokeWidth="12" className="draw-line"/><path d="M136,192c20-3.37,36.61-20,40-40" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" strokeWidth="16" className="draw-line"/><path d="M136,192c20-3.37,36.61-20,40-40" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" strokeWidth="24" className="draw-line"/><path d="M166.17,156A40.11,40.11,0,0,1,140,182.17" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75Zm9.85,105.59a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z" fill="currentColor"/></>,
  duotone: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" opacity="0.2" fill="currentColor"/><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" strokeWidth="16" className="draw-line"/><path d="M136,192c20-3.37,36.61-20,40-40" strokeWidth="16" className="draw-line"/></>,
};

export const DropIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
