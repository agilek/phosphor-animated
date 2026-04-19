import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,105.6s-32-25.67-80,7c-50.47,34.3-80,20.85-80,20.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M143.89,107.62C143,126.17,144,208,64,232" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="139.94 145.95 176 176 160 224" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,105.6s-32-25.67-80,7c-50.47,34.3-80,20.85-80,20.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M143.89,107.62C143,126.17,144,208,64,232" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="139.94 145.95 176 176 160 224" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,105.6s-32-25.67-80,7c-50.47,34.3-80,20.85-80,20.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M143.89,107.62C143,126.17,144,208,64,232" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="139.94 145.95 176 176 160 224" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,113.6s-32-25.67-80,7c-50.47,34.3-80,20.85-80,20.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="139.94 145.95 176 176 160 224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M143.56,115.8c-1.3,27.56-8.3,94.82-79.56,116.2" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,105.6s-32-25.67-80,7c-50.47,34.3-80,20.85-80,20.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M143.89,107.62C143,126.17,144,208,64,232" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="139.94 145.95 176 176 160 224" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const PersonSimpleThrowIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
