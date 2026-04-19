import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M205.15,165.3C211.76,150.66,216,133.06,216,112V56a8,8,0,0,0-8-8H98.52" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M55.27,48H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120s33.59-9.16,59.27-38.81" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M205.15,165.3C211.76,150.66,216,133.06,216,112V56a8,8,0,0,0-8-8H98.52" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M55.27,48H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120s33.59-9.16,59.27-38.81" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M205.15,165.3C211.76,150.66,216,133.06,216,112V56a8,8,0,0,0-8-8H98.52" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M55.27,48H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120s33.59-9.16,59.27-38.81" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M55.27,48H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120s33.59-9.16,59.27-38.81" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208.49,157.07A131.21,131.21,0,0,0,216,112V56a8,8,0,0,0-8-8H109.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M205.15,165.3C211.76,150.66,216,133.06,216,112V56a8,8,0,0,0-8-8H98.52" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M55.27,48H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120s33.59-9.16,59.27-38.81" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ShieldSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
