import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M90,104a51,51,0,0,1,0,48" strokeWidth="8" className="draw-line"/><path d="M146,72a119,119,0,0,1,0,112" strokeWidth="8" className="draw-line"/><path d="M118,88a85,85,0,0,1,0,80" strokeWidth="8" className="draw-line"/><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M90,104a51,51,0,0,1,0,48" strokeWidth="12" className="draw-line"/><path d="M146,72a119,119,0,0,1,0,112" strokeWidth="12" className="draw-line"/><path d="M118,88a85,85,0,0,1,0,80" strokeWidth="12" className="draw-line"/><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><path d="M90,104a51,51,0,0,1,0,48" strokeWidth="16" className="draw-line"/><path d="M146,72a119,119,0,0,1,0,112" strokeWidth="16" className="draw-line"/><path d="M118,88a85,85,0,0,1,0,80" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M142,72a119,119,0,0,1,0,112" strokeWidth="24" className="draw-line"/><path d="M106,88a85,85,0,0,1,0,80" strokeWidth="24" className="draw-line"/><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM97.07,155.74a8,8,0,1,1-14.14-7.48,42.79,42.79,0,0,0,0-40.52,8,8,0,0,1,14.14-7.48A59.33,59.33,0,0,1,97.07,155.74Zm28,16a8,8,0,1,1-14.12-7.52,77.07,77.07,0,0,0,0-72.48,8,8,0,1,1,14.12-7.52A93,93,0,0,1,125.06,171.76Zm28,16A8,8,0,0,1,139,180.23a110.62,110.62,0,0,0,0-104.46,8,8,0,0,1,14.12-7.54A126.67,126.67,0,0,1,153.07,187.77Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><path d="M90,104a51,51,0,0,1,0,48" strokeWidth="16" className="draw-line"/><path d="M146,72a119,119,0,0,1,0,112" strokeWidth="16" className="draw-line"/><path d="M118,88a85,85,0,0,1,0,80" strokeWidth="16" className="draw-line"/></>,
};

export const ContactlessPaymentIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
