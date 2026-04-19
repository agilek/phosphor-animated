import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="152 224 232 48 152 48 112 136 192 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="152 224 232 48 152 48 112 136 192 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="152 224 232 48 152 48 112 136 192 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="152 224 232 48 152 48 112 136 192 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="152 224 232 48 152 48 112 136 192 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FlagBannerFoldIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
