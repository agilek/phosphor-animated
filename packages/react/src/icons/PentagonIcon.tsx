import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M35.27,93.93a8,8,0,0,0-2.88,8.9l32,107.62A8,8,0,0,0,72,216H184a8,8,0,0,0,7.62-5.55l32-107.62a8,8,0,0,0-2.88-8.9l-88-68.38a8,8,0,0,0-9.46,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M35.27,93.93a8,8,0,0,0-2.88,8.9l32,107.62A8,8,0,0,0,72,216H184a8,8,0,0,0,7.62-5.55l32-107.62a8,8,0,0,0-2.88-8.9l-88-68.38a8,8,0,0,0-9.46,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M35.27,93.93a8,8,0,0,0-2.88,8.9l32,107.62A8,8,0,0,0,72,216H184a8,8,0,0,0,7.62-5.55l32-107.62a8,8,0,0,0-2.88-8.9l-88-68.38a8,8,0,0,0-9.46,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M35.27,93.93a8,8,0,0,0-2.88,8.9l32,107.62A8,8,0,0,0,72,216H184a8,8,0,0,0,7.62-5.55l32-107.62a8,8,0,0,0-2.88-8.9l-88-68.38a8,8,0,0,0-9.46,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M35.27,93.93a8,8,0,0,0-2.88,8.9l32,107.62A8,8,0,0,0,72,216H184a8,8,0,0,0,7.62-5.55l32-107.62a8,8,0,0,0-2.88-8.9l-88-68.38a8,8,0,0,0-9.46,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const PentagonIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
