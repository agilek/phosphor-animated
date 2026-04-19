import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,216V184a48,48,0,0,1,48-48h32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,216V184a48,48,0,0,1,48-48h32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,216V184a48,48,0,0,1,48-48h32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,216V184a48,48,0,0,1,48-48h32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M136,216H88a48,48,0,0,1-48-48V88A48,48,0,0,1,88,40h80a48,48,0,0,1,48,48v48C208,160,160,208,136,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,216V184a48,48,0,0,1,48-48h32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const StickerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
