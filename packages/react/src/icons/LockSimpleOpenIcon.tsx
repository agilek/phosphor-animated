import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="88" width="176" height="128" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="40" y="88" width="176" height="128" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="40" y="88" width="176" height="128" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="40" y="88" width="176" height="128" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M224,96V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80H80V56A48.05,48.05,0,0,1,128,8c23.2,0,43.32,16.15,47.84,38.41a8,8,0,0,1-15.68,3.18C157.2,35,143.37,24,128,24A32,32,0,0,0,96,56V80H208A16,16,0,0,1,224,96Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="88" width="176" height="128" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="88" width="176" height="128" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const LockSimpleOpenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
