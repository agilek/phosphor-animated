import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="48 176 104 176 104 136 152 136 152 96 208 96" strokeWidth="8" className="draw-line"/><rect x="48" y="32" width="160" height="192" rx="8" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="48 176 104 176 104 136 152 136 152 96 208 96" strokeWidth="12" className="draw-line"/><rect x="48" y="32" width="160" height="192" rx="8" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="48 176 104 176 104 136 152 136 152 96 208 96" strokeWidth="16" className="draw-line"/><rect x="48" y="32" width="160" height="192" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="48 176 104 176 104 136 152 136 152 96 208 96" strokeWidth="24" className="draw-line"/><rect x="48" y="32" width="160" height="192" rx="8" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-40,80h40v24H160Zm-48,40h88v24H112Zm88,72H56V184H200v32Z" fill="currentColor"/></>,
  duotone: <><path d="M48,40a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8V96H152v40H104v40H48Z" opacity="0.2" fill="currentColor"/><polyline points="48 176 104 176 104 136 152 136 152 96 208 96" strokeWidth="16" className="draw-line"/><rect x="48" y="32" width="160" height="192" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const StairsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
