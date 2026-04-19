import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><ellipse cx="128" cy="60" rx="64" ry="36" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,60V196c0,19.88,28.65,36,64,36s64-16.12,64-36V60" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><ellipse cx="128" cy="60" rx="64" ry="36" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,60V196c0,19.88,28.65,36,64,36s64-16.12,64-36V60" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><ellipse cx="128" cy="60" rx="64" ry="36" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,60V196c0,19.88,28.65,36,64,36s64-16.12,64-36V60" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><ellipse cx="128" cy="60" rx="64" ry="36" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,60V196c0,19.88,28.65,36,64,36s64-16.12,64-36V60" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,16C87.63,16,56,35.33,56,60V196c0,24.67,31.63,44,72,44s72-19.33,72-44V60C200,35.33,168.37,16,128,16Zm0,208c-29.83,0-56-13.08-56-28V77.43C82.92,88.5,103.9,96,128,96s45.08-7.5,56-18.57V196C184,210.92,157.83,224,128,224Z" fill="currentColor"/></>,
  duotone: <><ellipse cx="128" cy="60" rx="64" ry="36" opacity="0.2" fill="currentColor"/><ellipse cx="128" cy="60" rx="64" ry="36" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,60V196c0,19.88,28.65,36,64,36s64-16.12,64-36V60" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const CylinderIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
