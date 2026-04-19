import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><polyline points="56 88 56 56 200 56 200 88" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><polyline points="56 88 56 56 200 56 200 88" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><polyline points="56 88 56 56 200 56 200 88" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><polyline points="56 88 56 56 200 56 200 88" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,96a8,8,0,0,1-16,0V88H136v88h12a8,8,0,0,1,0,16H108a8,8,0,0,1,0-16h12V88H88v8a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" fill="currentColor"/></>,
  duotone: <><path d="M56,56H200a0,0,0,0,1,0,0V184a16,16,0,0,1-16,16H72a16,16,0,0,1-16-16V56A0,0,0,0,1,56,56Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><polyline points="56 88 56 56 200 56 200 88" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const TextTIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
