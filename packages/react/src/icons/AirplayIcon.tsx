import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="128 160 176 216 80 216 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polygon points="128 160 176 216 80 216 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polygon points="128 160 176 216 80 216 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polygon points="128 160 176 216 80 216 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M52,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-4" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="128 160 176 216 80 216 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16h-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const AirplayIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
