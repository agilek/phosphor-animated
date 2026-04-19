import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const PatreonLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
