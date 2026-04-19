import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M152,206.4a88,88,0,0,1,0-156.8,88,88,0,1,0,0,156.8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="177.46 128 160 98.33 192.59 106.4 214.39 80 217.06 114.65 248 128 217.06 141.35 214.39 176 192.59 149.6 160 157.67 177.46 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M152,206.4a88,88,0,0,1,0-156.8,88,88,0,1,0,0,156.8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="177.46 128 160 98.33 192.59 106.4 214.39 80 217.06 114.65 248 128 217.06 141.35 214.39 176 192.59 149.6 160 157.67 177.46 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M152,206.4a88,88,0,0,1,0-156.8,88,88,0,1,0,0,156.8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="177.46 128 160 98.33 192.59 106.4 214.39 80 217.06 114.65 248 128 217.06 141.35 214.39 176 192.59 149.6 160 157.67 177.46 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M152,206.4a88,88,0,0,1,0-156.8,88,88,0,1,0,0,156.8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="173.46 128 156 98.33 188.59 106.4 210.39 80 213.06 114.65 244 128 213.06 141.35 210.39 176 188.59 149.6 156 157.67 173.46 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M152,206.4a88,88,0,0,1,0-156.8,88,88,0,1,0,0,156.8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="177.46 128 160 98.33 192.59 106.4 214.39 80 217.06 114.65 248 128 217.06 141.35 214.39 176 192.59 149.6 160 157.67 177.46 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const StarAndCrescentIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
