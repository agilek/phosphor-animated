import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M144,104h64a32,32,0,0,1,32,32v24H61.06a32,32,0,0,1-30.65-22.8L16.34,90.3A8,8,0,0,1,24,80h8l24,24H92.91L80.42,66.53A8,8,0,0,1,88,56h8Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="208" cy="200" r="12" fill="currentColor"/><circle cx="112" cy="200" r="12" fill="currentColor"/></>,
  light: <><path d="M144,104h64a32,32,0,0,1,32,32v24H61.06a32,32,0,0,1-30.65-22.8L16.34,90.3A8,8,0,0,1,24,80h8l24,24H92.91L80.42,66.53A8,8,0,0,1,88,56h8Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="208" cy="200" r="14" fill="currentColor"/><circle cx="112" cy="200" r="14" fill="currentColor"/></>,
  regular: <><path d="M144,104h64a32,32,0,0,1,32,32v24H61.06a32,32,0,0,1-30.65-22.8L16.34,90.3A8,8,0,0,1,24,80h8l24,24H92.91L80.42,66.53A8,8,0,0,1,88,56h8Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="208" cy="200" r="16" fill="currentColor"/><circle cx="112" cy="200" r="16" fill="currentColor"/></>,
  bold: <><path d="M144,100h64a32,32,0,0,1,32,32v24H61.06a32,32,0,0,1-30.65-22.8L16.34,86.3A8,8,0,0,1,24,76h8l24,24H92.91L80.42,62.53A8,8,0,0,1,88,52h8Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="208" cy="204" r="20" fill="currentColor"/><circle cx="112" cy="204" r="20" fill="currentColor"/></>,
  fill: <><path d="M248,136v24a8,8,0,0,1-8,8H61.07a39.75,39.75,0,0,1-38.31-28.51L8.69,92.6A16,16,0,0,1,24,72h8a8,8,0,0,1,5.65,2.34L59.32,96H81.81l-9-26.94A16,16,0,0,1,88,48h8a8,8,0,0,1,5.66,2.34L147.32,96H208A40,40,0,0,1,248,136Zm-40,48a16,16,0,1,0,16,16A16,16,0,0,0,208,184Zm-96,0a16,16,0,1,0,16,16A16,16,0,0,0,112,184Z" fill="currentColor"/></>,
  duotone: <><path d="M144,104h64a32,32,0,0,1,32,32v24H61.06a32,32,0,0,1-30.65-22.8L16.34,90.3A8,8,0,0,1,24,80h8l24,24H92.91L80.42,66.53A8,8,0,0,1,88,56h8Z" opacity="0.2" fill="currentColor"/><path d="M144,104h64a32,32,0,0,1,32,32v24H61.06a32,32,0,0,1-30.65-22.8L16.34,90.3A8,8,0,0,1,24,80h8l24,24H92.91L80.42,66.53A8,8,0,0,1,88,56h8Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="208" cy="200" r="16" fill="currentColor"/><circle cx="112" cy="200" r="16" fill="currentColor"/></>,
};

export const AirplaneTaxiingIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
