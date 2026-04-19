import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M216,112a88,88,0,0,1-176,0Z" strokeWidth="8" className="draw-line"/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M216,112a88,88,0,0,1-176,0Z" strokeWidth="12" className="draw-line"/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M216,112a88,88,0,0,1-176,0Z" strokeWidth="16" className="draw-line"/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M64,108V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v68" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M216,108a88,88,0,0,1-176,0Z" strokeWidth="24" className="draw-line"/><path d="M93,188.74l-4.88,34.13A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13L163,188.75" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M60,88H196a4,4,0,0,0,4-4V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V84A4,4,0,0,0,60,88ZM88,48h16a8,8,0,0,1,0,16H88a8,8,0,0,1,0-16Zm136,64a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8,96.09,96.09,0,0,0,51.68,85.14l-3.52,24.6A16,16,0,0,0,96,240h64a16,16,0,0,0,15.84-18.26l-3.52-24.6A96.09,96.09,0,0,0,224,112ZM96,224l2.93-20.5a96.15,96.15,0,0,0,58.14,0L160,224Z" fill="currentColor"/></>,
  duotone: <><path d="M163.58,192.51h0a88.21,88.21,0,0,1-71.14,0h0l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13Z" opacity="0.2" fill="currentColor"/><path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72Z" opacity="0.2" fill="currentColor"/><path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M216,112a88,88,0,0,1-176,0Z" strokeWidth="16" className="draw-line"/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" strokeWidth="16" className="draw-line"/></>,
};

export const ToiletIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
