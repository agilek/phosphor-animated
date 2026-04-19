import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M205.15,165.3C211.76,150.66,216,133.06,216,112V56a8,8,0,0,0-8-8H98.52" strokeWidth="8" className="draw-line"/><path d="M55.27,48H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120s33.59-9.16,59.27-38.81" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M205.15,165.3C211.76,150.66,216,133.06,216,112V56a8,8,0,0,0-8-8H98.52" strokeWidth="12" className="draw-line"/><path d="M55.27,48H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120s33.59-9.16,59.27-38.81" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M205.15,165.3C211.76,150.66,216,133.06,216,112V56a8,8,0,0,0-8-8H98.52" strokeWidth="16" className="draw-line"/><path d="M55.27,48H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120s33.59-9.16,59.27-38.81" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M55.27,48H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120s33.59-9.16,59.27-38.81" strokeWidth="24" className="draw-line"/><path d="M208.49,157.07A131.21,131.21,0,0,0,216,112V56a8,8,0,0,0-8-8H109.33" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,56v56c0,25.24-5.85,45.72-14.3,62.14a4,4,0,0,1-6.53.87L86.52,46.69a4,4,0,0,1,3-6.69H208A16,16,0,0,1,224,56ZM53.92,34.62A8,8,0,0,0,40.26,42,16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53A131.92,131.92,0,0,0,187.18,205l14.9,16.38a8,8,0,1,0,11.84-10.76Z" fill="currentColor"/></>,
  duotone: <><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M205.15,165.3C211.76,150.66,216,133.06,216,112V56a8,8,0,0,0-8-8H98.52" strokeWidth="16" className="draw-line"/><path d="M55.27,48H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120s33.59-9.16,59.27-38.81" strokeWidth="16" className="draw-line"/></>,
};

export const ShieldSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
