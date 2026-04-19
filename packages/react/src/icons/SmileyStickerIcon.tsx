import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M156.22,219.79a95.9,95.9,0,1,1,63.57-63.58Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const SmileyStickerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
