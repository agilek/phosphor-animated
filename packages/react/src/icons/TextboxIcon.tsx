import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M144,72h88a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H144" strokeWidth="8" className="draw-line"/><path d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M144,72h88a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H144" strokeWidth="12" className="draw-line"/><path d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M144,72h88a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H144" strokeWidth="16" className="draw-line"/><path d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M152,72h80a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H152" strokeWidth="24" className="draw-line"/><path d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M248,80v96a16,16,0,0,1-16,16H140a4,4,0,0,1-4-4V68a4,4,0,0,1,4-4h92A16,16,0,0,1,248,80ZM120,48V208a8,8,0,0,1-16,0V192H24A16,16,0,0,1,8,176V80A16,16,0,0,1,24,64h80V48a8,8,0,0,1,16,0ZM88,112a8,8,0,0,0-8-8H48a8,8,0,0,0,0,16h8v24a8,8,0,0,0,16,0V120h8A8,8,0,0,0,88,112Z" fill="currentColor"/></>,
  duotone: <><rect x="16" y="72" width="224" height="112" rx="8" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M144,72h88a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H144" strokeWidth="16" className="draw-line"/><path d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const TextboxIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
