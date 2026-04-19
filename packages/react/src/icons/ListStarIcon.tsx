import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polygon points="184 174.54 213.67 192 205.6 159.41 232 137.61 197.35 134.94 184 104 170.65 134.94 136 137.61 162.4 159.41 154.33 192 184 174.54" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polygon points="184 174.54 213.67 192 205.6 159.41 232 137.61 197.35 134.94 184 104 170.65 134.94 136 137.61 162.4 159.41 154.33 192 184 174.54" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polygon points="184 174.54 213.67 192 205.6 159.41 232 137.61 197.35 134.94 184 104 170.65 134.94 136 137.61 162.4 159.41 154.33 192 184 174.54" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polygon points="184 174.54 213.67 192 205.6 159.41 232 137.61 197.35 134.94 184 104 170.65 134.94 136 137.61 162.4 159.41 154.33 192 184 174.54" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polygon points="184 174.54 213.67 192 205.6 159.41 232 137.61 197.35 134.94 184 104 170.65 134.94 136 137.61 162.4 159.41 154.33 192 184 174.54" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ListStarIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
