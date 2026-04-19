import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="112 96 144 96 112 144 144 144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,192a32,32,0,0,0,64,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="112 96 144 96 112 144 144 144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,192a32,32,0,0,0,64,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="112 96 144 96 112 144 144 144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,192a32,32,0,0,0,64,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="112 92 144 92 112 140 144 140" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,184v8a32,32,0,0,0,64,0v-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,184H48a8,8,0,0,1-6.88-12C47.71,160.6,56,139.81,56,104Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="112 96 144 96 112 144 144 144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,192a32,32,0,0,0,64,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BellZIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
