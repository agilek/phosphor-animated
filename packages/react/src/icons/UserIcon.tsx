import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="96" r="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="96" r="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="96" r="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="96" r="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="96" r="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const UserIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
