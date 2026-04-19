import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="88 136 112 160 168 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="88 136 112 160 168 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="88 136 112 160 168 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="88 136 112 160 168 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="88 136 112 160 168 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ShieldCheckIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
