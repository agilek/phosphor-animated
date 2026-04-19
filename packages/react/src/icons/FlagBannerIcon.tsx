import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M239.22,59.44l-45.63,95.82a3.54,3.54,0,0,1-.16.34l-34.21,71.84a8,8,0,1,1-14.44-6.88L173.62,160H40a8,8,0,0,1-5.66-13.66L76.69,104,34.34,61.66A8,8,0,0,1,40,48H232a8,8,0,0,1,7.22,11.44Z" fill="currentColor"/></>,
  duotone: <><polygon points="232 56 40 56 88 104 40 152 186.29 152 232 56" opacity="0.2" fill="currentColor"/><polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const FlagBannerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
