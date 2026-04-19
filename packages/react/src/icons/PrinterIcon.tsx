import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="64 80 64 40 192 40 192 80" strokeWidth="8" className="draw-line"/><rect x="64" y="152" width="128" height="64" strokeWidth="8" className="draw-line"/><path d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" strokeWidth="8" className="draw-line"/><circle cx="188" cy="116" r="8" fill="currentColor"/></>,
  light: <><polyline points="64 80 64 40 192 40 192 80" strokeWidth="12" className="draw-line"/><rect x="64" y="152" width="128" height="64" strokeWidth="12" className="draw-line"/><path d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" strokeWidth="12" className="draw-line"/><circle cx="188" cy="116" r="10" fill="currentColor"/></>,
  regular: <><polyline points="64 80 64 40 192 40 192 80" strokeWidth="16" className="draw-line"/><rect x="64" y="152" width="128" height="64" strokeWidth="16" className="draw-line"/><path d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" strokeWidth="16" className="draw-line"/><circle cx="188" cy="116" r="12" fill="currentColor"/></>,
  bold: <><polyline points="64 80 64 40 192 40 192 80" strokeWidth="24" className="draw-line"/><rect x="64" y="160" width="128" height="56" strokeWidth="24" className="draw-line"/><path d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" strokeWidth="24" className="draw-line"/><circle cx="188" cy="120" r="16" fill="currentColor"/></>,
  fill: <><path d="M240,96v80a8,8,0,0,1-8,8H200v32a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V184H24a8,8,0,0,1-8-8V96c0-13.23,11.36-24,25.33-24H56V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V72h14.67C228.64,72,240,82.77,240,96ZM72,72H184V48H72Zm112,88H72v48H184Zm16-44a12,12,0,1,0-12,12A12,12,0,0,0,200,116Z" fill="currentColor"/></>,
  duotone: <><path d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192V152H64Z" opacity="0.2" fill="currentColor"/><polyline points="64 80 64 40 192 40 192 80" strokeWidth="16" className="draw-line"/><rect x="64" y="152" width="128" height="64" strokeWidth="16" className="draw-line"/><path d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" strokeWidth="16" className="draw-line"/><circle cx="188" cy="116" r="12" fill="currentColor"/></>,
};

export const PrinterIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
