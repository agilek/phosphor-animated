import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="160 120 112 88 112 152 160 120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="160 120 112 88 112 152 160 120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="160 120 112 88 112 152 160 120" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polygon points="156 120 116 92 116 148 156 120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="160 120 112 88 112 152 160 120" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const MonitorPlayIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
