import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,124H94a34,34,0,0,1,0,68H32V64H90a30,30,0,0,1,0,60" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M232,176a40,40,0,1,1,8-24H160" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M32,124H94a34,34,0,0,1,0,68H32V64H90a30,30,0,0,1,0,60" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M232,176a40,40,0,1,1,8-24H160" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M32,124H94a34,34,0,0,1,0,68H32V64H90a30,30,0,0,1,0,60" strokeWidth="16" className="draw-line"/><path d="M232,176a40,40,0,1,1,8-24H160" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M32,124H90a34,34,0,0,1,0,68H32V64H86a30,30,0,0,1,0,60" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M217.45,188A40,40,0,1,1,240,152H160" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M92,120H64V96H92a12,12,0,0,1,0,24Zm4,16H64v32H96a16,16,0,0,0,0-32Zm80-16a24,24,0,0,0-22.62,16h45.24A24,24,0,0,0,176,120Zm64-64V200a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V56A16,16,0,0,1,32,40H224A16,16,0,0,1,240,56ZM144,88a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H152A8,8,0,0,0,144,88Zm-16,64a32,32,0,0,0-14.13-26.53A28,28,0,0,0,92,80H56a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8H96A32,32,0,0,0,128,152Zm88-8a40,40,0,1,0-13.54,30,8,8,0,0,0-10.59-12,24,24,0,0,1-38.49-10H208A8,8,0,0,0,216,144Z" fill="currentColor"/></>,
  duotone: <><path d="M160,152a40,40,0,0,1,80,0Z" opacity="0.2" fill="currentColor"/><path d="M94,124H90a30,30,0,0,0,0-60H32V192H94a34,34,0,0,0,0-68Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M32,124H94a34,34,0,0,1,0,68H32V64H90a30,30,0,0,1,0,60" strokeWidth="16" className="draw-line"/><path d="M232,176a40,40,0,1,1,8-24H160" strokeWidth="16" className="draw-line"/></>,
};

export const BehanceLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
