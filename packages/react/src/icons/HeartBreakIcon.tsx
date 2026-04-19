import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122a54,54,0,0,0-92.18-38.18L112,91.63l30.18,30.19L120,144" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><path d="M128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122a54,54,0,0,0-92.18-38.18L112,91.63l30.18,30.19L120,144" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122a54,54,0,0,0-92.18-38.18L112,91.63l30.18,30.19L120,144" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122a54,54,0,0,0-92.18-38.18L112,91.63l30.18,30.19L120,144" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M239.81,107.5c-5.19,67.42-103.7,121.23-108,123.54a8,8,0,0,1-7.58,0C119.8,228.67,16,172,16,102a62,62,0,0,1,96.47-51.55,4,4,0,0,1,.61,6.17L99.72,70a8,8,0,0,0,0,11.31l32.53,32.53L111,135a8,8,0,1,0,11.31,11.31l26.88-26.87a8,8,0,0,0,0-11.31L116.7,75.63l17.47-17.47h0A61.63,61.63,0,0,1,178.41,40C214.73,40.23,242.59,71.29,239.81,107.5Z" fill="currentColor"/></>,
  duotone: <><path d="M178,48a53.79,53.79,0,0,0-38.18,15.82L128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122A54,54,0,0,0,178,48Z" opacity="0.2" fill="currentColor"/><path d="M128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122a54,54,0,0,0-92.18-38.18L112,91.63l30.18,30.19L120,144" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const HeartBreakIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
