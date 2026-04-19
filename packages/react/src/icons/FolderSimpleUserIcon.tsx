import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="192" cy="176" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M120,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="192" cy="176" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M120,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="192" cy="176" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M120,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="192" cy="176" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M160,224c3.67-13.8,16.6-24,32-24s28.33,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="192" cy="176" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M120,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const FolderSimpleUserIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
