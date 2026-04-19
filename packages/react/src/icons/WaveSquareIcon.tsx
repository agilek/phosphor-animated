import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="232 128 232 184 128 184 128 72 24 72 24 128" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="232 128 232 184 128 184 128 72 24 72 24 128" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="232 128 232 184 128 184 128 72 24 72 24 128" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="232 128 232 184 128 184 128 72 24 72 24 128" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-8,128a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V96H64v32a8,8,0,0,1-16,0V88a8,8,0,0,1,8-8h72a8,8,0,0,1,8,8v72h56V128a8,8,0,0,1,16,0Z" fill="currentColor"/></>,
  duotone: <><polygon points="232 128 232 184 128 184 128 72 24 72 24 128 232 128" opacity="0.2" fill="currentColor"/><polyline points="232 128 232 184 128 184 128 72 24 72 24 128" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const WaveSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
