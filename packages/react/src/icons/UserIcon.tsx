import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="96" r="64" strokeWidth="8" className="draw-line"/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="96" r="64" strokeWidth="12" className="draw-line"/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="96" r="64" strokeWidth="16" className="draw-line"/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="96" r="64" strokeWidth="24" className="draw-line"/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="96" r="64" opacity="0.2" fill="currentColor"/><circle cx="128" cy="96" r="64" strokeWidth="16" className="draw-line"/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" strokeWidth="16" className="draw-line"/></>,
};

export const UserIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
