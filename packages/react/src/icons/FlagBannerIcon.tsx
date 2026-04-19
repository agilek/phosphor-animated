import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const FlagBannerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
