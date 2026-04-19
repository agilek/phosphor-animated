import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="72 40 184 40 240 104 128 224 16 104 72 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="176 104 128 224 80 104 128 40 176 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="72 40 184 40 240 104 128 224 16 104 72 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="176 104 128 224 80 104 128 40 176 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polygon points="72 40 184 40 240 104 128 224 16 104 72 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="176 104 128 224 80 104 128 40 176 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polygon points="72 40 184 40 240 104 128 224 16 104 72 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="176 104 128 224 80 104 128 40 176 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="72 40 184 40 240 104 128 224 16 104 72 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="176 104 128 224 80 104 128 40 176 104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const SketchLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
