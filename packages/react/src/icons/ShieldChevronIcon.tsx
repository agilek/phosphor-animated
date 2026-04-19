import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="201.97 171.78 128 120 54.03 171.78" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="201.97 171.78 128 120 54.03 171.78" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="201.97 171.78 128 120 54.03 171.78" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="201.97 171.78 128 120 54.03 171.78" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="201.97 171.78 128 120 54.03 171.78" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ShieldChevronIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
