import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="8 96 128 32 248 96 128 160 8 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 96 184 125.87 184 240" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="8 96 128 32 248 96 128 160 8 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 96 184 125.87 184 240" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polygon points="8 96 128 32 248 96 128 160 8 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 96 184 125.87 184 240" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polygon points="12 96 128 32 244 96 128 160 12 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="180 240 180 124.69 128 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,111.45v54.84a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V111.45" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="8 96 128 32 248 96 128 160 8 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 96 184 125.87 184 240" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const GraduationCapIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
