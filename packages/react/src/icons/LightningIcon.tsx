import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="160 16 144 96 208 120 96 240 112 160 48 136 160 16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polygon points="160 16 144 96 208 120 96 240 112 160 48 136 160 16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polygon points="160 16 144 96 208 120 96 240 112 160 48 136 160 16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polygon points="160 16 148 96 208 120 96 240 108 160 48 136 160 16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="160 16 144 96 208 120 96 240 112 160 48 136 160 16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const LightningIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
