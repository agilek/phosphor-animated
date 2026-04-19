import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,224a8,8,0,0,0,7.35-11.15L160,112l22.86-35.88a8,8,0,0,0,0-8.24L160,35.22,153,44a32,32,0,0,1-50,0l-7-8.77L73.14,67.88a8,8,0,0,0,0,8.24L96,112,48.66,212.85A8,8,0,0,0,56,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,224a8,8,0,0,0,7.35-11.15L160,112l22.86-35.88a8,8,0,0,0,0-8.24L160,35.22,153,44a32,32,0,0,1-50,0l-7-8.77L73.14,67.88a8,8,0,0,0,0,8.24L96,112,48.66,212.85A8,8,0,0,0,56,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,224a8,8,0,0,0,7.35-11.15L160,112l22.86-35.88a8,8,0,0,0,0-8.24L160,35.22,153,44a32,32,0,0,1-50,0l-7-8.77L73.14,67.88a8,8,0,0,0,0,8.24L96,112,48.66,212.85A8,8,0,0,0,56,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,224a8,8,0,0,0,7.35-11.15L160,112l22.86-35.88a8,8,0,0,0,0-8.24L160,35.22,153,44a32,32,0,0,1-50,0l-7-8.77L73.14,67.88a8,8,0,0,0,0,8.24L96,112,48.66,212.85A8,8,0,0,0,56,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,224a8,8,0,0,0,7.35-11.15L160,112l22.86-35.88a8,8,0,0,0,0-8.24L160,35.22,153,44a32,32,0,0,1-50,0l-7-8.77L73.14,67.88a8,8,0,0,0,0,8.24L96,112,48.66,212.85A8,8,0,0,0,56,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const DressIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
