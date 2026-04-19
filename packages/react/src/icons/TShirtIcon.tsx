import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M192,120h28.34a8.44,8.44,0,0,0,7.5-4.42l19.27-36.81a7.81,7.81,0,0,0-3.33-10.52L192,40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,120H35.66a8.44,8.44,0,0,1-7.5-4.42L8.89,78.77a7.81,7.81,0,0,1,3.33-10.52L64,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M192,120h28.34a8.44,8.44,0,0,0,7.5-4.42l19.27-36.81a7.81,7.81,0,0,0-3.33-10.52L192,40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,120H35.66a8.44,8.44,0,0,1-7.5-4.42L8.89,78.77a7.81,7.81,0,0,1,3.33-10.52L64,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M192,120h28.34a8.44,8.44,0,0,0,7.5-4.42l19.27-36.81a7.81,7.81,0,0,0-3.33-10.52L192,40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,120H35.66a8.44,8.44,0,0,1-7.5-4.42L8.89,78.77a7.81,7.81,0,0,1,3.33-10.52L64,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M192,120h26.32a7.77,7.77,0,0,0,7-4.42l17.9-36.81a8.12,8.12,0,0,0-3.1-10.52L192,40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,120H37.68a7.77,7.77,0,0,1-7-4.42L12.82,78.77a8.12,8.12,0,0,1,3.1-10.52L64,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M192,120h28.34a8.44,8.44,0,0,0,7.5-4.42l19.27-36.81a7.81,7.81,0,0,0-3.33-10.52L192,40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,120H35.66a8.44,8.44,0,0,1-7.5-4.42L8.89,78.77a7.81,7.81,0,0,1,3.33-10.52L64,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const TShirtIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
